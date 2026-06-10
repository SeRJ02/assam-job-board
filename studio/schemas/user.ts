export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Resume URL',
      type: 'url',
    },
    {
      name: 'savedJobs',
      title: 'Saved Jobs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'job' }],
        },
      ],
    },
    {
      name: 'appliedJobs',
      title: 'Applied Jobs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'jobRef',
              type: 'reference',
              to: [{ type: 'job' }],
            },
            {
              name: 'appliedDate',
              type: 'datetime',
            },
            {
              name: 'status',
              type: 'string',
              options: {
                list: [
                  { title: 'Applied', value: 'applied' },
                  { title: 'Shortlisted', value: 'shortlisted' },
                  { title: 'Rejected', value: 'rejected' },
                  { title: 'Interview', value: 'interview' },
                ],
              },
            },
          ],
        },
      ],
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
      title: 'name',
      subtitle: 'email',
    },
  },
}
