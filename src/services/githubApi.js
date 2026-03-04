const GITHUB_USERNAME = 'SimerdeepSingh4';
const GITHUB_API_BASE = 'https://api.github.com';

// Optional: Add your GitHub personal access token for higher rate limits
// Get it from: https://github.com/settings/tokens
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  'Accept': 'application/vnd.github.v3+json',
  ...(GITHUB_TOKEN && { 'Authorization': `token ${GITHUB_TOKEN}` })
};

/**
 * Fetch GitHub user profile data
 */
export const fetchGitHubUser = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const user = await response.json();
    console.log(user);

    return {
      name: user.name,
      bio: user.bio,
      avatar: user.avatar_url,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    };
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

/**
 * Fetch GitHub repositories
 */
export const fetchGitHubRepos = async (limit = 6) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${limit}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    return repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      watchers: repo.watchers_count,
      updated: repo.updated_at,
      created: repo.created_at,
      url: repo.html_url,
      topics: repo.topics || [],
      isPrivate: repo.private,
      defaultBranch: repo.default_branch,
      size: repo.size,
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};

/**
 * Fetch GitHub user events (commits, PRs, etc.)
 */
export const fetchGitHubEvents = async (limit = 100) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events/public?per_page=${limit}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const events = await response.json();

    // Count different types of events
    const stats = {
      totalEvents: events.length,
      pushEvents: events.filter(e => e.type === 'PushEvent').length,
      createEvents: events.filter(e => e.type === 'CreateEvent').length,
      issueEvents: events.filter(e => e.type === 'IssuesEvent').length,
      prEvents: events.filter(e => e.type === 'PullRequestEvent').length,
      watchEvents: events.filter(e => e.type === 'WatchEvent').length,
    };

    return { events, stats };
  } catch (error) {
    console.error('Error fetching GitHub events:', error);
    throw error;
  }
};

/**
 * Fetch contribution data using GitHub GraphQL API
 */
export const fetchContributionStats = async () => {
  try {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            totalRepositoryContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        ...(GITHUB_TOKEN && { 'Authorization': `Bearer ${GITHUB_TOKEN}` })
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${data.errors.map(e => e.message).join(', ')}`);
    }

    const contributions = data.data.user.contributionsCollection;
    const calendar = contributions.contributionCalendar;

    // Calculate streaks from contribution calendar
    const contributionDates = new Set();
    const contributionDays = []; // Keep this for the count
    calendar.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        contributionDays.push(day); // Populate for length
        if (day.contributionCount > 0) {
          contributionDates.add(day.date);
        }
      });
    });

    let currentStreak = 0;
    const today = new Date();
    let streakDate = new Date(today);

    // If no contributions today, check from yesterday
    if (!contributionDates.has(today.toISOString().split('T')[0])) {
      streakDate.setDate(streakDate.getDate() - 1);
    }
    
    // The streak is valid if there are contributions today or yesterday
    if (contributionDates.has(streakDate.toISOString().split('T')[0])) {
        while (contributionDates.has(streakDate.toISOString().split('T')[0])) {
            currentStreak++;
            streakDate.setDate(streakDate.getDate() - 1);
        }
    }

    // `longestStreak` is not used in the UI, so we can ignore it for now.
    const longestStreak = 0;

    return {
      totalCommits: contributions.totalCommitContributions,
      totalContributions: calendar.totalContributions,
      contributions: calendar.totalContributions, // This matches GitHub's contribution count
      currentStreak,
      longestStreak,
      contributionDays: contributionDays.length,
      totalIssues: contributions.totalIssueContributions,
      totalPRs: contributions.totalPullRequestContributions,
      totalReviews: contributions.totalPullRequestReviewContributions,
    };
  } catch (error) {
    console.error('Error fetching contribution stats:', error);
    throw error;
  }
};

/**
 * Calculate contribution stats from events (fallback method)
 */
export const calculateContributionStats = (events) => {
  const now = new Date();
  const thisYear = now.getFullYear();

  // Filter events from this year
  const thisYearEvents = events.filter(event => {
    const eventYear = new Date(event.created_at).getFullYear();
    return eventYear === thisYear;
  });

  // Count commits from push events
  let totalCommits = 0;
  const contributionsByDay = {};

  thisYearEvents.forEach(event => {
    const date = new Date(event.created_at).toDateString();

    // Count different types of contributions
    if (event.type === 'PushEvent' && event.payload.commits) {
      const commits = event.payload.commits.length;
      totalCommits += commits;
      contributionsByDay[date] = (contributionsByDay[date] || 0) + commits;
    } else if (
      event.type === 'CreateEvent' ||
      event.type === 'IssuesEvent' ||
      event.type === 'PullRequestEvent' ||
      event.type === 'PullRequestReviewEvent'
    ) {
      // Count other contribution types
      contributionsByDay[date] = (contributionsByDay[date] || 0) + 1;
    }
  });

  // Calculate streak
  const contributionDates = Object.keys(contributionsByDay).sort((a, b) => new Date(b) - new Date(a));
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const today = new Date().toDateString();
  let checkDate = new Date();

  // Check current streak
  for (let i = 0; i < 365; i++) {
    const dateStr = checkDate.toDateString();
    if (contributionsByDay[dateStr]) {
      if (currentStreak === 0 && (dateStr === today || i <= 1)) {
        currentStreak = tempStreak + 1;
      }
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      if (currentStreak === 0 && tempStreak > 0) {
        tempStreak = 0;
      }
    }
    checkDate.setDate(checkDate.getDate() - 1);
  }

  return {
    totalCommits,
    contributions: Object.values(contributionsByDay).reduce((sum, count) => sum + count, 0),
    currentStreak: Math.max(currentStreak, tempStreak),
    longestStreak,
    contributionDays: Object.keys(contributionsByDay).length,
  };
};

/**
 * Fetch comprehensive GitHub stats
 */
export const fetchGitHubStats = async () => {
  try {
    // Try to get contribution stats from GraphQL API first
    let contributionStats;
    try {
      contributionStats = await fetchContributionStats();
    } catch (graphqlError) {
      console.log('GraphQL contribution fetch failed, using fallback method');
      // Fallback to event-based calculation
      const { events } = await fetchGitHubEvents(300);
      contributionStats = calculateContributionStats(events);
    }

    // Get user and repos data
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubRepos(50) // Fetch more repos for accurate stats
    ]);

    // Calculate total stars and forks
    const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks, 0);
    const totalWatchers = repos.reduce((sum, repo) => sum + repo.watchers, 0);

    return {
      // User stats
      totalRepos: user.publicRepos,
      totalStars,
      totalForks,
      totalWatchers,
      followers: user.followers,
      following: user.following,

      // Contribution stats (now accurate!)
      totalCommits: contributionStats.totalCommits,
      contributions: contributionStats.contributions, 
      currentStreak: contributionStats.currentStreak,
      longestStreak: contributionStats.longestStreak,
      contributionDays: contributionStats.contributionDays,

      // Additional stats from GraphQL (if available)
      ...(contributionStats.totalIssues && {
        totalIssues: contributionStats.totalIssues,
        totalPRs: contributionStats.totalPRs,
        totalReviews: contributionStats.totalReviews,
      }),

      // Profile info
      profileCreated: user.createdAt,
      lastUpdated: user.updatedAt,
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
};

/**
 * Fetch pinned repositories using GitHub GraphQL API
 */
export const fetchPinnedRepos = async () => {
  try {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                  color
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                updatedAt
                createdAt
                isPrivate
                watchers {
                  totalCount
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        ...(GITHUB_TOKEN && { 'Authorization': `Bearer ${GITHUB_TOKEN}` })
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${data.errors.map(e => e.message).join(', ')}`);
    }

    const pinnedRepos = data.data.user.pinnedItems.nodes;

    return pinnedRepos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      language: repo.primaryLanguage?.name || 'Unknown',
      languageColor: repo.primaryLanguage?.color,
      stars: repo.stargazerCount,
      forks: repo.forkCount,
      watchers: repo.watchers.totalCount,
      updated: repo.updatedAt,
      created: repo.createdAt,
      url: repo.url,
      topics: repo.repositoryTopics.nodes.map(node => node.topic.name),
      isPrivate: repo.isPrivate,
    }));
  } catch (error) {
    console.error('Error fetching pinned repos:', error);

    // If GraphQL fails (no token or API issues), fall back to REST API for recent repos
    if (error.message.includes('GraphQL') || error.message.includes('401')) {
      console.log('Falling back to recent repositories...');
      return await fetchGitHubRepos(6);
    }

    throw error;
  }
};

/**
 * Get recent repositories (fallback when pinned repos fail)
 */
export const fetchRecentRepos = async () => {
  try {
    return await fetchGitHubRepos(6);
  } catch (error) {
    console.error('Error fetching recent repos:', error);
    throw error;
  }
};
