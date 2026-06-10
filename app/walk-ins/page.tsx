'use client'

import JobCard from '@/components/JobCard'

const walkInJobs = [
  {
    id: '9',
    title: 'Customer Service Executive',
    company: 'Contact Center Solutions',
    location: 'Guwahati, Assam',
    jobType: 'walkin',
    salary: 'Rs. 20,000 - 30,000',
    postedDate: '2024-06-08',
    description: 'Walk-in interview for customer service positions. No experience required.',
  },
  {
    id: '10',
    title: 'Data Entry Operator',
    company: 'Office Services Pvt Ltd',
    location: 'Guwahati, Assam',
    jobType: 'walkin',
    salary: 'Rs. 18,000 - 25,000',
    postedDate: '2024-06-08',
    description: 'Walk-in recruitment for data entry and administrative support roles.',
  },
  {
    id: '11',
    title: 'Sales Associate',
    company: 'Retail Chain India',
    location: 'Multiple Locations',
    jobType: 'walkin',
    salary: 'Rs. 22,000 - 35,000',
    postedDate: '2024-06-07',
    description: 'Walk-in interviews for retail sales positions across Assam.',
  },
  {
    id: '12',
    title: 'Production Operator',
    company: 'Manufacturing Unit',
    location: 'Dibrugarh, Assam',
    jobType: 'walkin',
    salary: 'Rs. 25,000 - 40,000',
    postedDate: '2024-06-06',
    description: 'Walk-in interviews for factory production and assembly work.',
  },
]

export default function WalkInsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Walk-in Interviews</h1>
        <p className="text-gray-600 mb-8">
          Immediate hiring - Walk-in interview opportunities in Assam where you can apply directly without prior registration.
        </p>

        <div className="space-y-4">
          {walkInJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  )
}
