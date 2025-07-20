'use client';

import { SignInButton } from '@clerk/clerk-react';

export default function SignInForm() {
  return (
    <div className='flex flex-col items-center space-y-6'>
      <h2 className='text-2xl font-bold'>Log in to Ken</h2>
      <SignInButton mode='modal'>
        <button className='flex items-center space-x-3 rounded-full bg-black px-6 py-3 text-white hover:opacity-90'>
          <img src='/google-icon.svg' alt='Google' className='h-5 w-5' />
          <span>Continue with Google</span>
        </button>
      </SignInButton>
    </div>
  );
}
