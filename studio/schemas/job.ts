export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      description: 'Optional. PNG, JPG, JPEG, or WEBP.',
      options: {
        hotspot: true,
        accept: 'image/png,image/jpeg,image/webp',
      },
    },
    {
      name: 'jobBanner',
      title: 'Job Banner Image',
      type: 'image',
      description: 'Optional header/banner image for this job post. PNG, JPG, JPEG, or WEBP.',
      options: {
        hotspot: true,
        accept: 'image/png,image/jpeg,image/webp',
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Government', value: 'govt' },
          { title: 'Private', value: 'private' },
          { title: 'Contract', value: 'contract' },
          { title: 'Walk-in', value: 'walkin' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Finance', value: 'finance' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Sales', value: 'sales' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Education', value: 'education' },
          { title: 'IT', value: 'it' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'salary',
      title: 'Salary Range',
      type: 'string',
    },
    {
      name: 'experience',
      title: 'Experience Required',
      type: 'string',
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'text',
    },
    {
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
    },
    {
      name: 'postedDate',
      title: 'Posted Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'deadline',
      title: 'Application Deadline',
      type: 'datetime',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company',
      jobType: 'jobType',
      media: 'companyLogo',
    },
    prepare(selection: any) {
      const { title, company, jobType, media } = selection
      return {
        title: title,
        subtitle: `${company} - ${jobType}`,
        media,
      }
    },
  },
}
