// Run with: SANITY_API_TOKEN=<your-token> node scripts/seed-categories.mjs
// Get your token from: https://www.sanity.io/manage → project d9abxm70 → API → Tokens

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'd9abxm70',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const CATEGORIES = [
  'Agriculture',
  'Banking & Finance',
  'Engineering',
  'Government Jobs',
  'Health & Medical',
  'Hospitality & Tourism',
  'IT & Software',
  'Police & Defence',
  'Railway Jobs',
  'Teaching & Education',
]

function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

async function seed() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('Error: SANITY_API_TOKEN env var is required.')
    process.exit(1)
  }

  console.log('Seeding categories...\n')

  for (const title of CATEGORIES) {
    const slug = toSlug(title)
    const doc = {
      _id: `category-${slug}`,
      _type: 'category',
      title,
      slug: { _type: 'slug', current: slug },
    }

    try {
      await client.createIfNotExists(doc)
      console.log(`✓  ${title}`)
    } catch (err) {
      console.error(`✗  ${title} — ${err.message}`)
    }
  }

  console.log('\nDone.')
}

seed()
