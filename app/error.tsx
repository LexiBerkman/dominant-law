'use client';

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-serif text-5xl">Something went wrong</h1>
      <p className="mt-4 text-mutedForeground">Please retry or contact us directly.</p>
      <button className="mt-6 rounded-md bg-primary px-4 py-2 text-primaryForeground" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
