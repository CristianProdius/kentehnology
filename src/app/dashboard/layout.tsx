import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Ken Tehnology Dashboard',
  description: 'If u dont knwo what to do, nither do I'
};

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <KBar>
      <div className='flex h-screen overflow-hidden p-5'>
        <SidebarProvider
          defaultOpen={defaultOpen}
          className='flex flex-1 flex-col gap-3'
        >
          <Header />

          <div className='relative flex min-h-0 flex-1 flex-row gap-3'>
            <AppSidebar />
            <SidebarInset className='border-sidebar-foreground bg-sidebar overflow-hidden rounded-[50px] border-3'>
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </KBar>
  );
}
