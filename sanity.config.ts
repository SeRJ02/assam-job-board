import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemas'

export default defineConfig({
  name: 'assam-job-alerts',
  title: 'Assam Job Alerts',
  projectId: 'd9abxm70',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
