import Link from 'next/link'

const jobsData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Staff Nurse',
    company: 'Guwahati Medical College',
    location: 'Guwahati, Assam',
    jobType: 'govt',
    salary: 'Rs. 45,000 - 50,000',
    experience: '2-5 years',
    postedDate: '2024-06-08',
    deadline: '2024-06-30',
    description: 'Guwahati Medical College is recruiting experienced staff nurses for various departments.',
    qualifications: 'B.Sc Nursing or equivalent qualification. 2-5 years of experience in a healthcare setting.',
    responsibilities: `
      • Provide patient care and maintain patient safety
      • Administer medications and treatments as prescribed
      • Monitor patient vital signs and report changes
      • Maintain medical records and documentation
      • Coordinate with medical team members
      • Ensure infection control protocols are followed
    `,
    applicationLink: '#',
  },
  '2': {
    id: '2',
    title: 'Assistant Professor',
    company: 'Dibrugarh University',
    location: 'Dibrugarh, Assam',
    jobType: 'govt',
    salary: 'Rs. 55,000 - 65,000',
    experience: '3-10 years',
    postedDate: '2024-06-07',
    deadline: '2024-06-25',
    description: 'Dibrugarh University invites applications for Assistant Professor positions in the Department of Physics.',
    qualifications: 'M.Sc Physics with Ph.D or pursuing Ph.D. Published research papers are a plus.',
    responsibilities: `
      • Teach undergraduate and postgraduate courses
      • Conduct research and publish papers
      • Guide student projects and thesis work
      • Participate in academic committee meetings
      • Contribute to curriculum development
    `,
    applicationLink: '#',
  },
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobsData[params.id] || jobsData['1']

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

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/all-jobs" className="text-green-700 font-semibold hover:text-green-800 mb-6 inline-block">
          ← Back to All Jobs
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600">{job.company}</p>
            </div>
            <span className={`${getJobTypeColor(job.jobType)} text-white font-bold px-4 py-2 rounded`}>
              {getJobTypeLabel(job.jobType)}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-gray-600 text-sm">Location</p>
              <p className="text-gray-900 font-semibold">📍 {job.location}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Salary</p>
              <p className="text-gray-900 font-semibold">💰 {job.salary}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Experience</p>
              <p className="text-gray-900 font-semibold">{job.experience || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Deadline</p>
              <p className="text-gray-900 font-semibold">{new Date(job.deadline).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Qualifications</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{job.qualifications}</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h3>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
              {job.responsibilities}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 mb-4">
              Posted on: {new Date(job.postedDate).toLocaleDateString()}
            </p>

            <div className="flex gap-4">
              <button className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition">
                Apply Now
              </button>
              <button className="flex-1 border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold py-3 px-6 rounded transition">
                Save Job
              </button>
              <button className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-6 rounded transition">
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Link
                key={item}
                href="/all-jobs"
                className="bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">Related Job Title {item}</h3>
                <p className="text-gray-600 text-sm mb-3">Company Name</p>
                <p className="text-green-700 font-semibold text-sm hover:text-green-800">View Job →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
