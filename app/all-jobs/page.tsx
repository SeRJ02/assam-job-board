'use client'

import { useState } from 'react'
import JobCard from '@/components/JobCard'
import FilterSidebar from '@/components/FilterSidebar'

const allJobs = [
  {
    id: '1',
    title: 'Staff Nurse',
    company: 'Guwahati Medical College',
    location: 'Guwahati, Assam',
    jobType: 'govt',
    salary: 'Rs. 45,000 - 50,000',
    postedDate: '2024-06-08',
    description: 'Experienced staff nurse needed for the government hospital.',
  },
  {
    id: '2',
    title: 'Assistant Professor',
    company: 'Dibrugarh University',
    location: 'Dibrugarh, Assam',
    jobType: 'govt',
    salary: 'Rs. 55,000 - 65,000',
    postedDate: '2024-06-07',
    description: 'Teaching position in the Department of Physics.',
  },
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
    id: '4',
    title: 'Constable',
    company: 'Assam Police',
    location: 'Multiple Locations',
    jobType: 'govt',
    postedDate: '2024-06-05',
    description: 'Police constable recruitment for Assam Police Department.',
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
    id: '6',
    title: 'Bank PO',
    company: 'State Bank of India',
    location: 'Multiple Locations',
    jobType: 'govt',
    salary: 'Rs. 50,000 - 70,000',
    postedDate: '2024-06-03',
    description: 'Probationary Officer recruitment for various branches.',
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

interface Filters {
  jobTypes?: string[]
  categories?: string[]
}

export default function AllJobsPage() {
  const [filters, setFilters] = useState<Filters>({})

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters)
  }

  const filteredJobs = allJobs.filter((job) => {
    if (filters.jobTypes && filters.jobTypes.length > 0) {
      if (!filters.jobTypes.includes(job.jobType)) return false
    }
    return true
  })

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Jobs</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} {...job} />)
              ) : (
                <div className="bg-white p-8 rounded-lg text-center">
                  <p className="text-gray-600">No jobs found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
