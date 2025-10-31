# SI QIN - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing projects, awards, and skills.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Project Showcase**: Display detailed project information with images
- **Awards Section**: Highlight achievements and honors
- **Skills Display**: Showcase technical skills and expertise
- **Static Export**: Optimized for GitHub Pages deployment
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Quick Start

### Local Development

1. Clone the repository:
\`\`\`bash
git clone https://github.com/god-good-debug/your-repo-name.git
cd your-repo-name
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This generates a static export in the `out` directory.

## Deploy to GitHub Pages

### One-Time Setup

1. **Create a new repository** on GitHub (e.g., `portfolio`)

2. **Push your code**:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/god-good-debug/portfolio.git
git push -u origin main
\`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment", set Source to **GitHub Actions**
   - Save

### Automatic Deployment

After the initial setup, every push to the `main` branch will automatically:
1. Build your Next.js site
2. Generate static files
3. Deploy to GitHub Pages

Your site will be live at: `https://god-good-debug.github.io/portfolio/`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── project/
│   │   └── [id]/
│   │       └── page.tsx    # Project detail pages
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets (images, CV, etc.)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
└── next.config.mjs         # Next.js configuration
\`\`\`

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Name and bio
- Career objectives
- Research interests
- Skills
- Awards
- Projects

### Add Your CV

Replace `public/cv.docx` with your actual CV document.

### Update GitHub Link

The GitHub link is already set to: `https://github.com/god-good-debug`

### Update Email

The email is set to: `qsi01665@gmail.com`

### Add New Projects

1. Add project data to the `projects` array in `app/page.tsx`
2. Add corresponding data to `projectsData` in `app/project/[id]/page.tsx`
3. Update `generateStaticParams` function with the new project ID
4. Add project images to the `public/` directory

## Monitoring Deployment

1. Go to the **Actions** tab in your GitHub repository
2. View the deployment progress
3. Check for any errors in the workflow logs

## Troubleshooting

### Deployment fails
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify that the build completes locally with `npm run build`

### Images not loading
- Ensure images are in the `public/` directory
- Use paths starting with `/` (e.g., `/image.jpg`)
- Check that image files are committed to the repository

### 404 errors on project pages
- Verify project IDs in `generateStaticParams` match your project data
- Ensure all project IDs are strings (e.g., `'1'`, `'2'`)

## License

© 2025 SI QIN. All rights reserved.

## Contact

- Email: qsi01665@gmail.com
- GitHub: https://github.com/god-good-debug
