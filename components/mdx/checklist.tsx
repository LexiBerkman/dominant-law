import type { ReactNode } from 'react';

export function Checklist({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-6 space-y-2 rounded-lg border border-border bg-muted/40 p-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm">
          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
