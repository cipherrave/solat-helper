import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import DashboardContainer from '@/components/DashboardContainer/dashboard-container';
import { ThemeProvider } from '@/components/ThemeProvider/theme-provider';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider>
        <DashboardContainer>
          <div className='px-3'>
            <Outlet />
          </div>
          <TanStackRouterDevtools position='bottom-right' />
        </DashboardContainer>
      </ThemeProvider>
    </>
  );
}
