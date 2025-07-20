import { SignIn as ClerkSignInForm } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'If it dosent work ask Gods for help.'
};

export default function SignInViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center'>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          <ClerkSignInForm />
        </div>
      </div>
    </div>
  );
}
