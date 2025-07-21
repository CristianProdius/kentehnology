import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-full w-full'>
          <div className='flex flex-1 flex-col p-4 md:px-6'>{children}</div>
        </ScrollArea>
      ) : (
        <div className='flex h-full w-full flex-1 flex-col overflow-auto p-4 md:px-6'>
          {children}
        </div>
      )}
    </>
  );
}
