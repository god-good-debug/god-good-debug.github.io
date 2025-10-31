# GitHub Pages Deployment Guide

This portfolio website is configured for automatic deployment to GitHub Pages.

## Setup Instructions

1. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/god-good-debug/your-repo-name.git
   git push -u origin main
   \`\`\`

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - Save the settings

3. **Automatic Deployment**
   - Every push to the `main` branch will automatically trigger a deployment
   - The workflow will build your Next.js site and deploy it to GitHub Pages
   - You can monitor the deployment progress in the "Actions" tab

4. **Access Your Site**
   - Your site will be available at: `https://god-good-debug.github.io/your-repo-name/`
   - If you're using a custom domain, configure it in the Pages settings

## Manual Deployment

If you need to manually trigger a deployment:
1. Go to the "Actions" tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000` to view your site locally.

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This will generate a static export in the `out` directory.
\`\`\`

```json file="" isHidden
