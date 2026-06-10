export default {
  name: 'jobAlert',
  title: 'Job Alert',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Job keywords to search for (comma separated)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'jobTypes',
      title: 'Job Types',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Government', value: 'govt' },
          { title: 'Private', value: 'private' },
          { title: 'Contract', value: 'contract' },
          { title: 'Walk-in', value: 'walkin' },
        ],
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
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
      name: 'salaryMin',
      title: 'Minimum Salary',
      type: 'number',
    },
    {
      name: 'salaryMax',
      title: 'Maximum Salary',
      type: 'number',
    },
    {
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      options: {
        list: [
          { title: 'Entry Level', value: 'entry' },
          { title: 'Mid Level', value: 'mid' },
          { title: 'Senior', value: 'senior' },
          { title: 'Any', value: 'any' },
        ],
      },
    },
    {
      name: 'frequency',
      title: 'Alert Frequency',
      type: 'string',
      options: {
        list: [
          { title: 'Daily', value: 'daily' },
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
        ],
      },
      initialValue: 'daily',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      email: 'email',
      keywords: 'keywords',
    },
    prepare(selection: any) {
      const { email, keywords } = selection
      return {
        title: email,
        subtitle: `Keywords: ${keywords}`,
      }
    },
  },
}
