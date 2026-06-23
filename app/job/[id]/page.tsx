import { getJobById } from '@/lib/sanity'
import { urlForImage, urlForImageWithDimensions } from '@/lib/sanity'
import { getJobTypeBadgeColor, getJobTypeLabel, formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id).catch(() => null)

  if (!job) return notFound()

  const bannerUrl = job.jobBanner ? urlForImage(job.jobBanner) : null
  const logoUrl = job.companyLogo ? urlForImageWithDimensions(job.companyLogo, 96, 96) : null

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/all-jobs" className="text-green-700 font-semibold hover:text-green-800 mb-6 inline-block">
          ← Back to All Jobs
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Banner Image */}
          {bannerUrl && (
            <div className="relative w-full h-52 sm:h-64 bg-gray-100">
              <Image
                src={bannerUrl}
                alt={`${job.title} banner`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 gap-4">
              <div className="flex items-start gap-4">
                {logoUrl && (
                  <div className="shrink-0 w-16 h-16 rounded-lg border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
                    <Image
                      src={logoUrl}
                      alt={`${job.company} logo`}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{job.title}</h1>
                  <p className="text-xl text-gray-600">{job.company}</p>
                </div>
              </div>
              <span className={`${getJobTypeBadgeColor(job.jobType)} text-white font-bold px-4 py-2 rounded shrink-0`}>
                {getJobTypeLabel(job.jobType)}
              </span>
            </div>

            {/* Meta Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-6 border-b border-gray-200">
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">Location</p>
                <p className="text-gray-900 font-semibold text-sm">📍 {job.location}</p>
              </div>
              {job.salary && (
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Salary</p>
                  <p className="text-gray-900 font-semibold text-sm">💰 {job.salary}</p>
                </div>
              )}
              {job.experience && (
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Experience</p>
                  <p className="text-gray-900 font-semibold text-sm">{job.experience}</p>
                </div>
              )}
              {job.deadline && (
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Deadline</p>
                  <p className="text-gray-900 font-semibold text-sm">🗓 {formatDate(job.deadline)}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Job Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
            </div>

            {/* Qualifications */}
            {job.qualifications && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Qualifications</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.qualifications}</p>
              </div>
            )}

            {/* Footer */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 mb-4">
                Posted on: {formatDate(job.postedDate)}
                {job.category && ` · Category: ${job.category}`}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {job.applicationLink ? (
                  <a
                    href={job.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded text-center transition"
                  >
                    Apply Now →
                  </a>
                ) : (
                  <button className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition">
                    Apply Now
                  </button>
                )}
                <Link
                  href="/all-jobs"
                  className="flex-1 border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold py-3 px-6 rounded text-center transition"
                >
                  Browse More Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
