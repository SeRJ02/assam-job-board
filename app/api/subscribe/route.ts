import { NextRequest, NextResponse } from 'next/server'
import { createJobAlert } from '@/lib/sanity'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, keywords, location, jobTypes, frequency } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
    }

    if (!process.env.SANITY_API_TOKEN) {
      return NextResponse.json(
        { error: 'Sanity API token not configured. Add SANITY_API_TOKEN to your environment variables.' },
        { status: 500 }
      )
    }

    await createJobAlert({ email, keywords, location, jobTypes, frequency: frequency || 'daily' })

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
  }
}
