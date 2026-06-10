import { getAllJobs } from '@/lib/sanity'
import AllJobsClient from '@/components/AllJobsClient'

export const revalidate = 60

export default async function AllJobsPage() {
  const jobs = await getAllJobs().catch(() => [])

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Jobs</h1>
        <p className="text-gray-500 mb-8">
          Browse all latest job openings across government, private, and contract sectors in Assam.
        </p>
        <AllJobsClient jobs={jobs} />
      </div>
    </div>
  )
}
