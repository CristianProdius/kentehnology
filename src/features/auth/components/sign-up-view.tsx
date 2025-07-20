import { SignUp as ClerkSignUpForm } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'If God didnt help then create  the account'
};

export default function SignUpViewPage() {
  return (
    <div className='relative h-screen flex-col items-center justify-center'>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          <ClerkSignUpForm />
        </div>
      </div>
    </div>
  );
}
