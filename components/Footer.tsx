'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-100">
      {/* Newsletter Section */}
      <section className="bg-green-800 border-b border-green-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Daily Job Alerts
              </h3>
              <p className="text-gray-300">
                Subscribe to receive the latest job opportunities directly in your inbox
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded text-gray-900 outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">About Assam Job Alerts</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Assam's most trusted job alert network providing daily updates on government, private, and contract roles across Northeast India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition text-xl"
                title="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition text-xl"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition text-xl"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition text-xl"
                title="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-jobs" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  All Jobs
                </Link>
              </li>
              <li>
                <Link href="/govt-jobs" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Government Jobs
                </Link>
              </li>
              <li>
                <Link href="/private-jobs" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Private Jobs
                </Link>
              </li>
              <li>
                <Link href="/walk-ins" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Walk-in Interviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Resume Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Interview Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">📍</span>
                <span className="text-gray-400">
                  Guwahati, Assam<br />
                  Northeast India
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">📧</span>
                <a
                  href="mailto:info@assamjobalerts.com"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  info@assamjobalerts.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">📞</span>
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500 font-bold">⏰</span>
                <span className="text-gray-400">
                  Mon - Fri: 9 AM - 6 PM<br />
                  Sat - Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-sm text-gray-400">
            <p className="mb-4">
              <strong className="text-white">Assam Job Alerts</strong> is committed to helping job seekers find opportunities in Northeast India. We provide daily updates on government, private, and contract job positions.
            </p>
            <p>
              © 2024 Assam Job Alerts. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-sm justify-start md:justify-end">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              Contact
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              Sitemap
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              Feedback
            </a>
          </div>
        </div>
      </div>

      {/* Top Footer Bar */}
      <div className="border-t border-green-700 bg-green-950 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            Made with ❤️ for Assam Job Seekers | Helping you find your next opportunity
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-500 transition">
              Report an Issue
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-500 transition">
              Advertise with Us
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-500 transition">
              Partner Program
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
