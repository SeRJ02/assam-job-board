export interface Job {
  _id: string
  title: string
  company: string
  location: string
  jobType: 'govt' | 'private' | 'contract' | 'walkin'
  category?: string
  salary?: string
  experience?: string
  qualifications?: string
  applicationLink?: string
  postedDate: string
  deadline?: string
  description: string
  featured?: boolean
}

export interface JobStats {
  totalJobs: number
  newThisMonth: number
  categories: number
  featuredJobs: number
}

export interface JobAlert {
  email: string
  keywords?: string
  location?: string
  jobTypes?: string[]
  frequency?: 'daily' | 'weekly' | 'monthly'
}
