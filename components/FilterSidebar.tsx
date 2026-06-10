'use client'

import { useState } from 'react'

interface Filters {
  jobTypes: string[]
  categories: string[]
  salaryRange: [number, number]
}

interface FilterSidebarProps {
  onFilterChange: (filters: Filters) => void
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<Filters>({
    jobTypes: [],
    categories: [],
    salaryRange: [0, 1000000],
  })

  const categories = [
    'Engineering',
    'Finance',
    'Marketing',
    'Sales',
    'Healthcare',
    'Education',
    'IT',
    'Other',
  ]

  const jobTypes = ['Government', 'Private', 'Contract', 'Walk-in']

  const handleJobTypeChange = (type: string) => {
    const updatedFilters = {
      ...filters,
      jobTypes: filters.jobTypes.includes(type)
        ? filters.jobTypes.filter((t) => t !== type)
        : [...filters.jobTypes, type],
    }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleCategoryChange = (category: string) => {
    const updatedFilters = {
      ...filters,
      categories: filters.categories.includes(category)
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category],
    }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <aside className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h3>
      <div className="space-y-2 mb-6">
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="w-4 h-4 accent-green-700"
            />
            <span className="text-sm text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-4">Job Type</h3>
      <div className="space-y-2">
        {jobTypes.map((type) => (
          <label key={type} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.jobTypes.includes(type)}
              onChange={() => handleJobTypeChange(type)}
              className="w-4 h-4 accent-green-700"
            />
            <span className="text-sm text-gray-700">{type}</span>
          </label>
        ))}
      </div>
    </aside>
  )
}
