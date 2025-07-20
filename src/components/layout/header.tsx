import React from 'react';

import { Separator } from '../ui/separator';
import { Breadcrumbs } from '../breadcrumbs';
import SearchInput from '../search-input';
import { UserNav } from './user-nav';
import { ThemeSelector } from '../theme-selector';
import { ModeToggle } from './ThemeToggle/theme-toggle';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex h-16 shrink-0 items-center justify-between gap-2'>
      <div className='flex items-center gap-2 px-4'>
        <Image src='/ken.svg' alt='Logo' width={64} height={64} />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumbs />
      </div>

      <div className='flex items-center gap-2 px-4'>
        <div className='hidden md:flex'>
          <SearchInput />
        </div>
        <UserNav />
        <ModeToggle />
        <ThemeSelector />
      </div>
    </header>
  );
}
