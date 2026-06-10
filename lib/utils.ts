export function getJobTypeBadgeColor(type: string): string {
  switch (type) {
    case 'govt': return 'bg-green-700'
    case 'private': return 'bg-blue-700'
    case 'contract': return 'bg-orange-600'
    case 'walkin': return 'bg-purple-700'
    default: return 'bg-gray-700'
  }
}

export function getJobTypeLabel(type: string): string {
  switch (type) {
    case 'govt': return 'Government'
    case 'private': return 'Private'
    case 'contract': return 'Contract'
    case 'walkin': return 'Walk-in'
    default: return type
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
