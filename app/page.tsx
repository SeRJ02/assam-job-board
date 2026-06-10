import HeroSection from '@/components/HeroSection'
import JobCard from '@/components/JobCard'
import Link from 'next/link'
import { getFeaturedJobs, getLatestJobs, getJobStats } from '@/lib/sanity'
import { getJobTypeBadgeColor, getJobTypeLabel, formatDate } from '@/lib/utils'

export const revalidate = 60

export default async function Home() {
  const [featuredJobs, latestJobs, stats] = await Promise.all([
    getFeaturedJobs().catch(() => []),
    getLatestJobs(8).catch(() => []),
    getJobStats().catch(() => ({ totalJobs: 0, newThisMonth: 0, categories: 0, featuredJobs: 0 })),
  ])

  return (
    <>
      <HeroSection />

      {/* Stats */}
      <section className="bg-white py-10 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-green-700 mb-1">{stats.totalJobs}</div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Total Jobs</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-700 mb-1">{stats.newThisMonth}</div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">New Monthly</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-700 mb-1">{stats.categories || 10}</div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Categories</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-700 mb-1">{stats.featuredJobs}</div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Featured</p>
          </div>
        </div>
      </section>

      {/* Featured Opportunities + Sidebar */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Jobs */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                🏆 Featured Opportunities
              </h2>
              <Link href="/all-jobs" className="text-green-700 font-semibold hover:text-green-800 text-sm">
                View All →
              </Link>
            </div>

            {featuredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredJobs.map((job) => (
                  <JobCard key={job._id} {...job} id={job._id} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 border border-dashed border-gray-300 p-8 rounded-lg text-center">
                <p className="text-gray-400">No featured jobs yet.</p>
                <p className="text-gray-400 text-sm mt-1">Add jobs in your Sanity Studio and mark them as featured.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Browse by Category */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🗂 Browse by Category</h3>
              <ul className="space-y-2">
                {[
                  'Agriculture', 'Banking & Finance', 'Engineering',
                  'Government Jobs', 'Health & Medical', 'Hospitality & Tourism',
                  'IT & Software', 'Police & Defence', 'Railway Jobs',
                  'Teaching & Education',
                ].map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/all-jobs?category=${encodeURIComponent(cat)}`}
                      className="flex justify-between items-center text-sm text-gray-700 hover:text-green-700 transition py-1"
                    >
                      <span>{cat}</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Filters */}
            <div className="bg-green-800 rounded-lg p-5 text-white">
              <h3 className="text-lg font-bold mb-4">⚡ Quick Filters</h3>
              <div className="space-y-2">
                {[
                  { label: 'Government Jobs', href: '/govt-jobs' },
                  { label: 'Private Sector', href: '/private-jobs' },
                  { label: 'Contract Jobs', href: '/all-jobs?type=contract' },
                  { label: 'Walk-in Drives', href: '/walk-ins' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block bg-green-700 hover:bg-green-600 text-white text-sm px-4 py-2 rounded transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Browse by District */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Browse by District</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Nagaon',
                  'Tezpur', 'Tinsukia', 'Bongaigaon', 'Dhubri', 'Goalpara',
                  'Kamrup', 'Lakhimpur', 'Sivasagar', 'Sonitpur',
                ].map((district) => (
                  <Link
                    key={district}
                    href={`/all-jobs?location=${encodeURIComponent(district)}`}
                    className="text-xs bg-white border border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-600 px-3 py-1 rounded-full transition"
                  >
                    {district}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Feed */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">📋 Latest Jobs Feed</h2>
            <Link href="/all-jobs" className="text-green-700 font-semibold hover:text-green-800 text-sm">
              Browse More →
            </Link>
          </div>

          {latestJobs.length > 0 ? (
            <div className="space-y-3">
              {latestJobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md hover:border-green-300 transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-base font-bold text-gray-900">{job.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span>📍 {job.location}</span>
                        {job.salary && <span>💰 {job.salary}</span>}
                        <span>🗓 {formatDate(job.postedDate)}</span>
                      </div>
                      {job.description && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-1">{job.description}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className={`${getJobTypeBadgeColor(job.jobType)} text-white text-xs font-bold px-3 py-1 rounded`}>
                        {getJobTypeLabel(job.jobType)}
                      </span>
                      <Link
                        href={`/job/${job._id}`}
                        className="text-green-700 font-semibold hover:text-green-800 text-sm whitespace-nowrap"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center border border-dashed border-gray-300">
              <p className="text-gray-400">No jobs yet. Add jobs in your Sanity Studio!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
