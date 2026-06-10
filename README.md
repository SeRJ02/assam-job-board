# Assam Job Alerts

**Assam's Most Trusted Job Alert Network** - A modern job board and alert system for government, private, and contract roles across Northeast India.

This is an exact replica of the original Assam Job Alerts application, built with Next.js, Vercel, and Sanity.io.

## 🚀 Features

### Core Functionality
- **Job Listings**: Browse government, private, contract, and walk-in opportunities
- **Job Alerts**: Subscribe to daily job alerts based on your preferences
- **Advanced Filtering**: Filter by job type, category, experience level, and salary range
- **Job Details**: Comprehensive job information with requirements and application links
- **Search**: Real-time job search functionality
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop

### Pages Included
- **Home**: Featured jobs, statistics, and trending opportunities
- **All Jobs**: Complete job listings with filtering capabilities
- **Government Jobs**: Dedicated page for government positions
- **Private Jobs**: Private sector job opportunities
- **Walk-ins**: Immediate hiring walk-in interviews
- **Job Details**: Full job information with application options

## 🎨 Design

- **Color Scheme**: Forest green (#1B5C50) and gold (#FFB800)
- **Typography**: Clean, professional fonts
- **Layout**: Modern card-based design matching the original application
- **Accessibility**: Semantic HTML and keyboard-friendly navigation

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 + React + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Sanity.io
- **Hosting**: Vercel
- **Database**: Sanity Content Lake

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git
- GitHub account (for Vercel deployment)
- Sanity.io account (free tier available)

## 🚀 Quick Start (Local Development)

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/assam-job-board.git
cd assam-job-board
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
# Copy example file
cp .env.local.example .env.local

# Edit .env.local and add your Sanity credentials
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
# NEXT_PUBLIC_SANITY_DATASET=production
# NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
# SANITY_API_TOKEN=your_api_token
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📦 Project Structure

```
assam-job-board/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── all-jobs/            # All jobs page
│   ├── govt-jobs/           # Government jobs page
│   ├── private-jobs/        # Private jobs page
│   ├── walk-ins/            # Walk-in interviews page
│   ├── job/[id]/            # Job detail page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx      # Hero section with search
│   ├── JobCard.tsx          # Job listing card
│   ├── FilterSidebar.tsx    # Filter sidebar
│   └── StatsSection.tsx     # Statistics section
├── studio/                  # Sanity configuration
│   ├── schemas/            # Content schemas
│   │   ├── job.ts         # Job schema
│   │   ├── jobAlert.ts    # Job alert schema
│   │   └── user.ts        # User schema
│   └── lib/               # Sanity utilities
├── public/                 # Static assets
├── sanity.config.ts       # Sanity configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies
├── DEPLOYMENT.md          # Deployment guide
└── README.md             # This file
```

## 🔧 Configuration

### Sanity.io Setup
Follow the [DEPLOYMENT.md](./DEPLOYMENT.md) guide for complete Sanity.io configuration.

### Tailwind CSS
Custom colors are configured in `tailwind.config.ts`:
- `assam-green`: Primary green color palette
- `assam-gold`: Accent gold color palette

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
```bash
git push origin main
```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables
   - Deploy

### Full Deployment Instructions
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Content Management

### Create Jobs in Sanity Studio

1. Visit your Sanity studio: `https://your-project.sanity.studio`
2. Click "Job" in the sidebar
3. Click "Create" to add a new job
4. Fill in:
   - Job Title
   - Company Name
   - Location
   - Job Description
   - Job Type (Government/Private/Contract/Walk-in)
   - Category
   - Salary Range (optional)
   - Experience Required
   - Application Link
   - Posted Date
5. Click "Publish"

### Create Job Alerts

1. In Sanity studio, click "Job Alert"
2. Click "Create" to add a new alert
3. Fill in:
   - Email address
   - Keywords to search for
   - Location preference
   - Job types to filter
   - Categories of interest
   - Salary expectations
   - Experience level
   - Alert frequency (Daily/Weekly/Monthly)
4. Click "Publish"

## 🎯 API Schema

### Job Document
```typescript
{
  title: string
  company: string
  location: string
  description: string
  jobType: 'govt' | 'private' | 'contract' | 'walkin'
  category: string
  salary?: string
  experience?: string
  qualifications?: string
  applicationLink?: string
  postedDate: date
  deadline?: date
  featured: boolean
}
```

### Job Alert Document
```typescript
{
  email: string
  keywords: string
  location: string
  jobTypes: string[]
  categories: string[]
  salaryMin?: number
  salaryMax?: number
  experienceLevel?: string
  frequency: 'daily' | 'weekly' | 'monthly'
  isActive: boolean
  createdAt: date
}
```

### User Document
```typescript
{
  email: string
  name: string
  phone?: string
  resume?: string
  savedJobs: reference[]
  appliedJobs: object[]
  createdAt: date
}
```

## 🔒 Environment Variables

### Development (.env.local)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
```

### Production (Vercel Environment Variables)
Add the same variables in Vercel project settings.

## 📱 Features Implemented

✅ Exact replica of original design  
✅ Government, Private, Contract job categories  
✅ Walk-in interview section  
✅ Advanced job filtering  
✅ Job search functionality  
✅ Featured jobs section  
✅ Job statistics dashboard  
✅ Responsive mobile design  
✅ Sanity.io content management  
✅ Vercel-ready deployment  
✅ TypeScript support  
✅ Tailwind CSS styling  

## 🔄 Continuous Deployment

Once deployed to Vercel:
- Every push to `main` branch triggers automatic deployment
- Sanity webhooks can trigger rebuilds on content changes
- No downtime deployments with Vercel's preview URLs

## 🐛 Troubleshooting

**Content not showing?**
- Verify environment variables in Vercel
- Check that you've published content in Sanity
- Redeploy after updating environment variables

**Build errors?**
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf .next && npm run build`
- Check Node version: `node --version` (should be 18+)

**Sanity connection issues?**
- Verify Project ID is correct
- Check API token has proper permissions
- Ensure dataset exists and is public/has proper permissions

## 📖 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Detailed setup for Vercel and Sanity
- [CLAUDE.md](./CLAUDE.md) - Development notes and architecture
- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Vercel Docs](https://vercel.com/docs)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/feature-name`
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- User authentication and profiles
- Email notifications for job alerts
- Resume upload and management
- Application tracking system
- Admin dashboard
- Analytics and reporting
- Payment integration for premium features
- Mobile app version

## ✉️ Support

For questions or issues:
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Visit [Sanity.io Help](https://www.sanity.io/help)
- Visit [Vercel Help](https://vercel.com/help)
- Open an issue in this repository

---

**Built with ❤️ for Assam Job Seekers**
