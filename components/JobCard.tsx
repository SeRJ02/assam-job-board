import Link from 'next/link'
import Image from 'next/image'
import { urlForImageWithDimensions } from '@/lib/sanity'
import type { SanityImage } from '@/lib/types'

interface JobCardProps {
  id: string
  title: string
  company: string
  location: string
  jobType: string
  salary?: string
  postedDate: string
  description?: string
  companyLogo?: SanityImage
  // jobBanner is not displayed on the card, only on the detail page
  jobBanner?: SanityImage
}

export default function JobCard({
  id,
  title,
  company,
  location,
  jobType,
  salary,
  postedDate,
  description,
  companyLogo,
}: JobCardProps) {
  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'govt':
        return 'bg-green-700'
      case 'private':
        return 'bg-blue-700'
      case 'contract':
        return 'bg-orange-700'
      case 'walkin':
        return 'bg-purple-700'
      default:
        return 'bg-gray-700'
    }
  }

  const getJobTypeLabel = (type: string) => {
    switch (type) {
      case 'govt':
        return 'Government'
      case 'private':
        return 'Private'
      case 'contract':
        return 'Contract'
      case 'walkin':
        return 'Walk-in'
      default:
        return type
    }
  }

  const logoUrl = companyLogo ? urlForImageWithDimensions(companyLogo, 80, 80) : null

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3 flex-1">
          {logoUrl && (
            <div className="shrink-0 w-10 h-10 rounded border border-gray-100 overflow-hidden bg-gray-50">
              <Image
                src={logoUrl}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{company}</p>
          </div>
        </div>
        <span className={`${getJobTypeColor(jobType)} text-white text-xs font-bold px-3 py-1 rounded shrink-0`}>
          {getJobTypeLabel(jobType)}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <p>📍 {location}</p>
        {salary && <p>💰 {salary}</p>}
        <p className="text-xs text-gray-500">Posted: {new Date(postedDate).toLocaleDateString()}</p>
      </div>

      {description && (
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{description}</p>
      )}

      <div className="flex gap-2">
        <Link
          href={`/job/${id}`}
          className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded text-center transition"
        >
          View Details
        </Link>
        <button className="flex-1 border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold py-2 px-4 rounded transition">
          Save Job
        </button>
      </div>
    </div>
  )
}
