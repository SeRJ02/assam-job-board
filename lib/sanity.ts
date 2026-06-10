import { createClient } from '@sanity/client'
import type { Job, JobStats, JobAlert } from './types'

const projectId = 'd9abxm70'
const dataset = 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const jobFields = `
  _id,
  title,
  company,
  location,
  jobType,
  salary,
  postedDate,
  description,
  featured,
  category
`

export async function getFeaturedJobs(): Promise<Job[]> {
  return client.fetch(`
    *[_type == "job" && featured == true] | order(postedDate desc) [0...6] {
      ${jobFields}
    }
  `)
}

export async function getLatestJobs(limit = 8): Promise<Job[]> {
  return client.fetch(
    `*[_type == "job"] | order(postedDate desc) [0...$limit] { ${jobFields} }`,
    { limit }
  )
}

export async function getAllJobs(): Promise<Job[]> {
  return client.fetch(`
    *[_type == "job"] | order(postedDate desc) { ${jobFields} }
  `)
}

export async function getJobsByType(jobType: string): Promise<Job[]> {
  return client.fetch(
    `*[_type == "job" && jobType == $jobType] | order(postedDate desc) { ${jobFields} }`,
    { jobType }
  )
}

export async function getJobById(id: string): Promise<Job | null> {
  return client.fetch(
    `*[_type == "job" && _id == $id][0] {
      _id, title, company, location, jobType, salary, experience,
      postedDate, deadline, description, qualifications, applicationLink,
      category, featured
    }`,
    { id }
  )
}

export async function getJobStats(): Promise<JobStats> {
  return client.fetch(`{
    "totalJobs": count(*[_type == "job"]),
    "newThisMonth": count(*[_type == "job" && dateTime(postedDate) > dateTime(now()) - 60*60*24*30]),
    "categories": count(array::unique(*[_type == "job"].category)),
    "featuredJobs": count(*[_type == "job" && featured == true])
  }`)
}

export async function createJobAlert(data: JobAlert) {
  return writeClient.create({
    _type: 'jobAlert',
    ...data,
    createdAt: new Date().toISOString(),
    isActive: true,
  })
}

export async function searchJobs(query: string): Promise<Job[]> {
  const q = `*${query}*`
  return client.fetch(
    `*[_type == "job" && (
      title match "${q}" ||
      company match "${q}" ||
      location match "${q}"
    )] | order(postedDate desc) [0...20] {
      _id, title, company, location, jobType, salary, postedDate, description, featured, category
    }`
  )
}
