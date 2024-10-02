import { createRootRoute, Outlet } from '@tanstack/react-router'
import React, { Suspense } from 'react'
import { MdxComponentProvider } from '../components/MdxComponentProvider'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <MdxComponentProvider>
        <Outlet />
      </MdxComponentProvider>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
