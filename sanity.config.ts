import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity next.js site',

  projectId: '4o864j8b',
  dataset: 'production',

  basePath: "/studio",

  plugins: [deskTool(), 
    // visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
