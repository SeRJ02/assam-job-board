'use client'

import JobCard from '@/components/JobCard'

const privateJobs = [
  {
    id: '3',
    title: 'Junior Engineer',
    company: 'Associated Engineering Solutions',
    location: 'Silchar, Assam',
    jobType: 'private',
    salary: 'Rs. 35,000 - 45,000',
    postedDate: '2024-06-06',
    description: 'Civil engineering graduate required for project work.',
  },
  {
    id: '5',
    title: 'Software Developer',
    company: 'TechCorp India',
    location: 'Guwahati, Assam',
    jobType: 'private',
    salary: 'Rs. 60,000 - 80,000',
    postedDate: '2024-06-04',
    description: 'Full stack developer needed for web application development.',
  },
  {
    id: '7',
    title: 'Marketing Executive',
    company: 'Digital Solutions Ltd',
    location: 'Assam',
    jobType: 'private',
    salary: 'Rs. 30,000 - 40,000',
    postedDate: '2024-06-02',
    description: 'Digital marketing professional needed for campaign management.',
  },
  {
    id: '8',
    title: 'Data Analyst',
    company: 'Analytics India',
    location: 'Guwahati, Assam',
    jobType: 'private',
    salary: 'Rs. 55,000 - 75,000',
    postedDate: '2024-06-01',
    description: 'Data analyst needed for business intelligence projects.',
  },
]

export default function PrivateJobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Private Jobs</h1>
        <p className="text-gray-600 mb-8">
          Latest private sector job opportunities in Assam with competitive salaries.
        </p>

        <div className="space-y-4">
          {privateJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  )
}
