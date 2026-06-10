import { getJobsByType } from '@/lib/sanity'
import JobCard from '@/components/JobCard'

export const revalidate = 60

export default async function GovtJobsPage() {
  const jobs = await getJobsByType('govt').catch(() => [])

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Jobs</h1>
          <p className="text-gray-500">
            Daily updates on government and public sector job openings across Assam and Northeast India.
          </p>
        </div>

        {jobs.length > 0 ? (
          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard key={job._id} {...job} id={job._id} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg border border-dashed border-gray-300 text-center">
            <p className="text-gray-400 text-lg">No government jobs posted yet.</p>
            <p className="text-gray-400 text-sm mt-1">Check back soon or subscribe to get alerts.</p>
          </div>
        )}
      </div>
    </div>
  )
}
