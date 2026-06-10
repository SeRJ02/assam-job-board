import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="bg-yellow-500 text-green-800 px-2 py-1 rounded font-bold">🏢</div>
          <span>Assam Job Alerts</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/all-jobs" className="hover:text-yellow-400 transition">All Jobs</Link>
          <Link href="/govt-jobs" className="hover:text-yellow-400 transition">Govt Jobs</Link>
          <Link href="/private-jobs" className="hover:text-yellow-400 transition">Private Jobs</Link>
          <Link href="/walk-ins" className="hover:text-yellow-400 transition">Walk-ins</Link>
        </nav>

        <div className="flex items-center gap-2 bg-white rounded px-3 py-2 text-gray-700">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search jobs..."
            className="outline-none text-sm w-40"
          />
        </div>
      </div>
    </header>
  )
}
