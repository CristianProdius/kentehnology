// components/sentry-client-test.tsx
'use client';

import * as Sentry from '@sentry/nextjs';

export function SentryClientTest() {
  const triggerClientError = () => {
    try {
      throw new Error('🚨 Client-side Sentry test error!');
    } catch (error) {
      Sentry.captureException(error);
      console.error('Captured error and sent to Sentry:', error);
    }
  };

  return (
    <div>
      <button
        onClick={triggerClientError}
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Trigger Client-side Error
      </button>
    </div>
  );
}
