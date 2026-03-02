'use client';

type EventProps = Record<string, string | number | boolean | undefined | null>;

type Adapter = {
  track: (eventName: string, properties?: EventProps) => void;
};

const consoleAdapter: Adapter = {
  track: (eventName, properties) => {
    if (process.env.NODE_ENV === 'development') {
      console.info('[analytics]', eventName, properties || {});
    }
  }
};

const noopAdapter: Adapter = { track: () => undefined };

const providers: Record<string, Adapter> = {
  posthog: { track: () => undefined },
  plausible: { track: () => undefined },
  ga4: { track: () => undefined }
};

function getAdapter(): Adapter {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  if (!provider) {
    return process.env.NODE_ENV === 'development' ? consoleAdapter : noopAdapter;
  }
  return providers[provider] || noopAdapter;
}

export function track(eventName: string, properties?: EventProps) {
  const safeProps = { ...properties };
  delete safeProps.description;
  delete safeProps.medical;
  getAdapter().track(eventName, safeProps);
}
