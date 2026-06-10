import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import JobCard from '@/components/JobCard'
import Link from 'next/link'

const sampleJobs = [
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
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Job Openings</h2>
            <Link href="/all-jobs" className="text-green-700 font-semibold hover:text-green-800">
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sampleJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/all-jobs"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded transition"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Jobs Feed
          </h2>

          <div className="space-y-4">
            {sampleJobs.map((job) => (
              <div key={job.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <p className="text-sm text-gray-500">📍 {job.location}</p>
                  </div>
                  <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded">
                    {job.jobType === 'govt' ? 'Government' : job.jobType === 'private' ? 'Private' : 'Contract'}
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link
                    href={`/job/${job.id}`}
                    className="text-green-700 font-semibold hover:text-green-800 text-sm"
                  >
                    View Details →
                  </Link>
                  <span className="text-gray-500 text-sm ml-auto">
                    Posted: {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Daily Job Alerts</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our daily job alerts and get notifications about new opportunities matching your preferences.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded px-4 py-2 outline-none focus:border-green-700"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
