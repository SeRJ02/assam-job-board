'use client'

import { useState, useMemo } from 'react'
import JobCard from '@/components/JobCard'
import type { Job } from '@/lib/types'

const JOB_TYPE_OPTIONS = [
  { label: 'Government', value: 'govt' },
  { label: 'Private', value: 'private' },
  { label: 'Contract', value: 'contract' },
  { label: 'Walk-in', value: 'walkin' },
]

const CATEGORY_OPTIONS = [
  'Agriculture', 'Banking & Finance', 'Engineering', 'Government Jobs',
  'Health & Medical', 'Hospitality & Tourism', 'IT & Software',
  'Police & Defence', 'Railway Jobs', 'Teaching & Education',
]

export default function AllJobsClient({ jobs }: { jobs: Job[] }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const toggleType = (value: string) =>
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    )

  const toggleCategory = (value: string) =>
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    )

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      if (selectedTypes.length > 0 && !selectedTypes.includes(job.jobType)) return false
      if (selectedCategories.length > 0 && job.category && !selectedCategories.includes(job.category)) return false
      if (search) {
        const q = search.toLowerCase()
        if (
          !job.title.toLowerCase().includes(q) &&
          !job.company.toLowerCase().includes(q) &&
          !job.location.toLowerCase().includes(q)
        ) return false
      }
      return true
    })
  }, [jobs, selectedTypes, selectedCategories, search])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <aside className="lg:col-span-1 space-y-6">
        {/* Search */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-900 mb-3">Search Jobs</h3>
          <input
            type="text"
            placeholder="Title, company, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-green-600"
          />
        </div>

        {/* Job Type Filter */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-900 mb-3">Job Type</h3>
          <div className="space-y-2">
            {JOB_TYPE_OPTIONS.map(({ label, value }) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(value)}
                  onChange={() => toggleType(value)}
                  className="w-4 h-4 accent-green-700"
                />
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {CATEGORY_OPTIONS.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 accent-green-700"
                />
                <span className="text-sm text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {(selectedTypes.length > 0 || selectedCategories.length > 0 || search) && (
          <button
            onClick={() => { setSelectedTypes([]); setSelectedCategories([]); setSearch('') }}
            className="w-full border-2 border-red-400 text-red-500 hover:bg-red-50 font-semibold py-2 rounded transition text-sm"
          >
            Clear All Filters
          </button>
        )}
      </aside>

      {/* Job List */}
      <div className="lg:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 text-sm">
            Showing <strong>{filtered.length}</strong> of <strong>{jobs.length}</strong> jobs
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-4">
            {filtered.map((job) => (
              <JobCard key={job._id} {...job} id={job._id} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg border border-dashed border-gray-300 text-center">
            <p className="text-gray-500">No jobs match your filters.</p>
            <button
              onClick={() => { setSelectedTypes([]); setSelectedCategories([]); setSearch('') }}
              className="mt-3 text-green-700 font-semibold hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
