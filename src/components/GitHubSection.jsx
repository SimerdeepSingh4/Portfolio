import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Eye, Calendar, TrendingUp, Code, Coffee, AlertCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fetchGitHubStats, fetchPinnedRepos } from "@/services/githubApi";

export default function GitHubSection () {
  const [ref, inView] = useInView();
  const [gitHubStats, setGitHubStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch real GitHub data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch GitHub stats and pinned repositories in parallel
        const [stats, repositories] = await Promise.all([
          fetchGitHubStats(),
          fetchPinnedRepos()
        ]);
        
        setGitHubStats(stats);
        setRepos(repositories);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError({
          message: 'Failed to load GitHub data',
          details: err.message.includes('rate limit') 
            ? 'GitHub API rate limit exceeded. Please try again later.'
            : 'Unable to connect to GitHub API. Please check your connection.'
        });
        
        // Fallback to basic mock data on error
        setGitHubStats({
          totalRepos: 12,
          totalStars: 8,
          totalForks: 3,
          contributions: 156,
          currentStreak: 15,
        });
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      Python: "#3572A5",
      Java: "#b07219",
      TypeScript: "#2b7489",
      HTML: "#e34c26",
      CSS: "#563d7c",
    };
    return colors[language] || "#8b5cf6";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-secondary/50 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-secondary/50 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-card p-6 rounded-lg animate-pulse">
                <div className="h-4 bg-secondary/50 rounded w-16 mb-2"></div>
                <div className="h-8 bg-secondary/50 rounded w-12"></div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card p-6 rounded-lg animate-pulse">
                <div className="h-4 bg-secondary/50 rounded w-32 mb-2"></div>
                <div className="h-3 bg-secondary/50 rounded w-full mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-secondary/50 rounded w-16"></div>
                  <div className="h-6 bg-secondary/50 rounded w-20"></div>
                </div>
                <div className="h-3 bg-secondary/50 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={`py-24 px-4 bg-secondary/30 section-fade${inView ? " in-view" : ""}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GitHub <span className="text-primary">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a snapshot of my coding activity and open-source contributions on GitHub.
          </p>
          
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 mx-auto max-w-md bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                <AlertCircle size={16} />
                <span className="text-sm font-medium">{error.message}</span>
              </div>
              <p className="text-xs text-orange-600 dark:text-orange-300 mt-1">
                {error.details}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            { label: "Repositories", value: gitHubStats.totalRepos, icon: Github, color: "text-blue-500" },
            { label: "Total Stars", value: gitHubStats.totalStars, icon: Star, color: "text-yellow-500" },
            { label: "Contributions", value: gitHubStats.contributions, icon: Code, color: "text-green-500" },
            { label: "Current Streak", value: `${gitHubStats.currentStreak} days`, icon: TrendingUp, color: "text-orange-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="bg-card p-6 rounded-lg shadow-xs border border-border/50 text-center group hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`inline-flex p-3 rounded-full bg-secondary/20 mb-3 ${stat.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon size={24} />
              </motion.div>
              <motion.div
                className="text-2xl font-bold mb-1"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Highlighted <span className="text-primary">Repositories</span>
          </h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {repos.length > 0 ? repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                variants={cardVariants}
                className="group"
                whileHover={{ y: -3 }}
              >
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-card p-6 rounded-lg shadow-xs border border-border/50 h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/20">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Github size={16} className="text-muted-foreground" />
                        <h4 className="font-semibold text-sm truncate">{repo.name}</h4>
                      </div>
                      <motion.div
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Eye size={16} />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {repo.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: repo.languageColor || getLanguageColor(repo.language) }}
                          />
                          <span>{repo.language}</span>
                        </div>
                        {repo.stars > 0 && (
                          <div className="flex items-center gap-1">
                            <Star size={12} />
                            <span>{repo.stars}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{formatDate(repo.updated)}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            )) : (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Github size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Pinned Repositories Unavailable</h3>
                <p className="text-muted-foreground text-sm">
                  {error ? 'Unable to load pinned repositories. This may be due to API limits or missing authentication.' : 'No pinned repositories to display.'}
                </p>
                <motion.a
                  href="https://github.com/SimerdeepSingh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={16} />
                  View on GitHub
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/SimerdeepSingh4"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View Full Profile
          </motion.a>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          className="mt-16 text-center px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-muted-foreground bg-card p-4 sm:p-4 rounded-2xl sm:rounded-full border border-border/50 max-w-full">
            <div className="flex items-center gap-2">
              <Coffee size={16} className="text-amber-500" />
              <span>Fueled by coffee</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="block sm:hidden w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <Code size={16} className="text-blue-500" />
              <span>Always coding</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="block sm:hidden w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-500" />
              <span>Continuously learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};