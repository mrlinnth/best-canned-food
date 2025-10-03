import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { Footer } from '@/components/footer'
import { NavMenu } from '@/components/nav-menu'
import { NotFound } from '@/components/not-found'
import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
      {/* <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      /> */}
    </>
  )
}
