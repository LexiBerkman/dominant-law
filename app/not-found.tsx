import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-serif text-5xl">Page not found</h1>
      <p className="mt-4 text-mutedForeground">The requested page does not exist.</p>
      <Link href="/" className="mt-6 inline-block text-primary no-underline hover:underline">Return home</Link>
    </div>
  );
}
