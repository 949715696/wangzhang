import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

export default buildConfig({
  admin: {
    autoLogin: {
      email: 'admin@payloadcms.com',
      password: 'password',
    },
  },
  collections: [
    {
      slug: 'products',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        { name: 'title', type: 'text', required: true, label: '产品名称' },
        { name: 'description', type: 'textarea', label: '产品描述' },
        { name: 'icon', type: 'upload', relationTo: 'media', label: '产品图标' },
        { name: 'link', type: 'text', label: '购买/了解链接' },
      ],
    },
    {
      slug: 'media',
      fields: [
        { name: 'alt', type: 'text', required: true },
      ],
      upload: {
        staticURL: '/media',
        staticDir: path.resolve(__dirname, 'media'),
      },
    },
  ],
  globals: [
    {
      slug: 'siteSettings',
      fields: [
        { name: 'heroTitle', type: 'text', label: '首页主标题' },
        { name: 'heroDescription', type: 'textarea', label: '首页副标题' },
        { name: 'primaryButtonLabel', type: 'text', label: '主按钮文案' },
        { name: 'primaryButtonLink', type: 'text', label: '主按钮链接' },
      ],
    },
  ],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  secret: process.env.PAYLOAD_SECRET || 'supersecretstring',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})