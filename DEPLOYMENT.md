# Assam Job Alerts - Deployment Guide

This guide will help you deploy the Assam Job Alerts application to Vercel with Sanity.io as the backend.

## Prerequisites

- Node.js 18+ installed
- A GitHub account
- A Vercel account
- A Sanity.io account

## Step 1: Set Up Sanity.io

### 1.1 Create a Sanity Project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create a new Sanity project
sanity init

# Follow the prompts:
# - Project name: "Assam Job Alerts"
# - Use default starter project: No
# - Dataset name: "production"
# - Visibility: Public
```

### 1.2 Get Your Sanity Project Credentials

After creating your project:

1. Go to https://manage.sanity.io
2. Select your "Assam Job Alerts" project
3. Go to **Settings > API**
4. Note down your **Project ID** and **Dataset name**
5. Create an API token under **Settings > API > Tokens**
   - Click "Add API token"
   - Name: "Vercel Deployment"
   - Select "Editor" role
   - Copy the token (you'll need this for Vercel)

### 1.3 Deploy Sanity Studio

```bash
# In your project root, deploy the Sanity studio
sanity deploy

# This will give you a studio URL like: https://your-project.sanity.studio
```

### 1.4 Import Schema to Sanity

The Sanity schemas are already defined in `/studio/schemas/`. To import them:

1. Go to your Sanity studio: https://your-project.sanity.studio
2. The schemas should automatically appear in the sidebar
3. You can now create content using the studio interface

## Step 2: Deploy to Vercel

### 2.1 Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Assam Job Alerts"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/assam-job-board.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2.2 Deploy via Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and confirm deployment
```

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables (see below)
6. Click "Deploy"

### 2.3 Configure Environment Variables

In your Vercel project settings, add these environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_sanity_api_token
```

**Where to find these:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: From Sanity manage dashboard
- `NEXT_PUBLIC_SANITY_DATASET`: Usually "production"
- `SANITY_API_TOKEN`: Generated from Sanity API tokens

### 2.4 Redeploy After Adding Environment Variables

After adding environment variables:
1. Go to your Vercel project
2. Click "Deployments"
3. Click the three dots on your latest deployment
4. Click "Redeploy"

## Step 3: Configure Your Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 24-48 hours)

## Step 4: Create Initial Content

1. Go to your Sanity studio: https://your-project.sanity.studio
2. Create sample jobs in the "Job" collection
3. Create job alerts in the "Job Alert" collection
4. Your frontend will automatically fetch and display this content

## Environment Variables Reference

### Public Variables (visible in browser)
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: The dataset name (usually "production")
- `NEXT_PUBLIC_SANITY_API_VERSION`: Sanity API version (default: "2024-01-01")

### Private Variables (server-only)
- `SANITY_API_TOKEN`: Your Sanity API token for backend operations

## Troubleshooting

### Build Fails with "Cannot find module"
- Ensure all environment variables are set in Vercel
- Redeploy after adding environment variables

### Content Not Showing
1. Verify environment variables are correct
2. Check that you've created content in Sanity studio
3. Check browser console for errors

### Sanity Studio Not Loading
- Verify your project is deployed: `sanity deploy`
- Check that your project ID is correct
- Visit https://your-project.sanity.studio

## Updating Content

### Adding New Jobs
1. Go to Sanity studio
2. Click "Job" in the sidebar
3. Click "Create" or "New Job"
4. Fill in job details
5. Click "Publish"

### Modifying Job Categories
Edit `/studio/schemas/job.ts` to add/remove categories in the options list.

### Creating Job Alerts
1. Go to Sanity studio
2. Click "Job Alert" in the sidebar
3. Fill in alert criteria
4. The alert will be saved to your database

## Performance Tips

1. Use Sanity's CDN (enabled by default)
2. Implement pagination for large job lists
3. Cache job listings on the server side
4. Use image optimization for company logos

## Security

- Never commit `.env.local` files
- Keep API tokens private
- Use Sanity's role-based permissions
- Enable webhook validation for content changes

## Next Steps

1. Customize the design (colors, fonts, branding)
2. Implement user authentication
3. Add email notification system for job alerts
4. Integrate payment processing for premium features
5. Set up analytics and tracking

## Support

For issues with:
- **Vercel**: https://vercel.com/help
- **Sanity.io**: https://www.sanity.io/help
- **Next.js**: https://nextjs.org/docs

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
