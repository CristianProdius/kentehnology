import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import * as Sentry from '@sentry/nextjs'; // Make sure this works based on your Sentry setup

export default async function Page() {
  try {
    const { userId } = await auth();

    // Trigger test error
    const sentry = myUndefinedFunction();

    if (!userId) {
      return redirect('/auth/sign-in');
    } else {
      return redirect('/dashboard/overview');
    }
  } catch (error) {
    // Log it to Sentry
    Sentry.captureException(error);

    // Re-throw it to make sure the error is visible
    throw error;
  }
}
