export default function StatsSection() {
  return (
    <section className="bg-white py-12 px-4 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-green-700 mb-2">1000+</div>
          <p className="text-gray-600">Active Jobs</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
          <p className="text-gray-600">Companies</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-700 mb-2">10K+</div>
          <p className="text-gray-600">Job Seekers</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-700 mb-2">Daily</div>
          <p className="text-gray-600">Updates</p>
        </div>
      </div>
    </section>
  )
}
