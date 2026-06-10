'use client'

import JobCard from '@/components/JobCard'

const govtJobs = [
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
    id: '4',
    title: 'Constable',
    company: 'Assam Police',
    location: 'Multiple Locations',
    jobType: 'govt',
    postedDate: '2024-06-05',
    description: 'Police constable recruitment for Assam Police Department.',
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
]

export default function GovtJobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Jobs</h1>
        <p className="text-gray-600 mb-8">
          Daily updates on government and public sector job openings across Assam and Northeast India.
        </p>

        <div className="space-y-4">
          {govtJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  )
}
