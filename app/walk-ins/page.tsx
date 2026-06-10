import { getJobsByType } from '@/lib/sanity'
import JobCard from '@/components/JobCard'

export const revalidate = 60

export default async function WalkInsPage() {
  const jobs = await getJobsByType('walkin').catch(() => [])

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Walk-in Interviews</h1>
          <p className="text-gray-500">
            Immediate hiring opportunities — walk in directly without prior registration or appointment.
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
            <p className="text-gray-400 text-lg">No walk-in interviews posted yet.</p>
            <p className="text-gray-400 text-sm mt-1">Check back soon or subscribe to get alerts.</p>
          </div>
        )}
      </div>
    </div>
  )
}
