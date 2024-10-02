import { MDXProvider } from '@mdx-js/react'
import React from 'react'

const components = {
  HorizontalEncoder: React.lazy(() => import('./encoders/HorizontalEncoder')),
  VerticalEncoder: React.lazy(() => import('./encoders/VerticalEncoder')),
  SelectEncoder: React.lazy(() => import('./encoders/SelectEncoder')),
  LowerModEncoder: React.lazy(() => import('./encoders/LowerModEncoder')),
  UpperModEncoder: React.lazy(() => import('./encoders/UpperModEncoder')),
}

export const MdxComponentProvider = ({ children }: { children: React.ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
