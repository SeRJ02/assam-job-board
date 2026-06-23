'use client'

import { useState } from 'react'
import styles from './FilterSidebar.module.css'

interface Filters {
  jobTypes: string[]
  categories: string[]
  salaryRange: [number, number]
}

interface FilterSidebarProps {
  onFilterChange: (filters: Filters) => void
}

const CATEGORIES = ['Engineering', 'Finance', 'Marketing', 'Sales', 'Healthcare', 'Education', 'IT', 'Other']
const JOB_TYPES = ['Government', 'Private', 'Contract', 'Walk-in']

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<Filters>({
    jobTypes: [],
    categories: [],
    salaryRange: [0, 1000000],
  })

  const toggle = (key: 'jobTypes' | 'categories', value: string) => {
    const current = filters[key]
    const updated: Filters = {
      ...filters,
      [key]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    }
    setFilters(updated)
    onFilterChange(updated)
  }

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sectionTitle}>Browse by Category</h3>
      <div className={styles.checkGroup}>
        {CATEGORIES.map((cat) => (
          <label key={cat} className={styles.checkLabel}>
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => toggle('categories', cat)}
              className={styles.checkbox}
            />
            <span className={styles.checkText}>{cat}</span>
          </label>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Job Type</h3>
      <div className={styles.checkGroup}>
        {JOB_TYPES.map((type) => (
          <label key={type} className={styles.checkLabel}>
            <input
              type="checkbox"
              checked={filters.jobTypes.includes(type)}
              onChange={() => toggle('jobTypes', type)}
              className={styles.checkbox}
            />
            <span className={styles.checkText}>{type}</span>
          </label>
        ))}
      </div>
    </aside>
  )
}
