# GitHub Integration Setup

This portfolio fetches real data from GitHub API, including your pinned repositories, contribution stats, and profile information.

## Quick Start (No Token - Limited Features)
The portfolio will work without any setup, but with limitations:
- ✅ Basic GitHub stats
- ✅ Recent repositories (instead of pinned)
- ❌ Pinned repositories
- ⚠️ Limited to 60 API requests per hour

## Full Setup (Recommended)

### 1. Create a GitHub Personal Access Token
1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Website"
4. Set expiration (90 days recommended)
5. Select scopes:
   - ✅ `public_repo` - Access public repositories
   - ✅ `read:user` - Read user profile data
6. Click "Generate token"
7. **Copy the token immediately** (you won't see it again)

### 2. Add Token to Your Project
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` and replace `your_github_token_here` with your actual token:
   ```
   VITE_GITHUB_TOKEN=ghp_your_actual_token_here
   ```
3. Save the file

### 3. Update GitHub Username
If you're not "SimerdeepSingh4", update the username in:
- `src/services/githubApi.js` (line 1): Change `GITHUB_USERNAME`

## Features with Token
- ✅ Pinned repositories (your showcase projects)
- ✅ Accurate contribution stats and streaks
- ✅ Higher rate limits (5000 requests/hour)
- ✅ Real language colors from GitHub
- ✅ Repository topics and metadata

## Security Notes
- ✅ Token is only used client-side for public data
- ✅ Token scope is limited to public repositories only
- ✅ No access to private data or write permissions
- ⚠️ Don't commit your `.env` file to version control

## Troubleshooting

### "Unable to load pinned repositories"
- Ensure you have a valid GitHub token in `.env`
- Check that your token has `public_repo` scope
- Verify the GitHub username is correct

### Rate Limit Exceeded
- Add a GitHub token to increase limits
- Wait for limits to reset (1 hour for REST API)

### No Repositories Showing
- Check if you have pinned repositories on GitHub
- Verify your GitHub profile is public
- Check browser console for detailed error messages