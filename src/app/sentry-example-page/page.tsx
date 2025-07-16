// app/sentry-example-page/page.tsx
import * as Sentry from '@sentry/nextjs';
import { SentryClientTest } from '@/components/sentry-client-test';

export default function Page() {
  // Server-side Sentry test
  Sentry.captureMessage('✅ Server-side Sentry test triggered!');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧪 Sentry Example Page</h1>
      <p>
        This page triggers Sentry errors for testing (server and client events).
      </p>

      {/* This is the Client Component */}
      <SentryClientTest />
    </div>
  );
}
