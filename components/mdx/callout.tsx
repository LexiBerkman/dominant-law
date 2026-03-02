import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Callout({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'warning' }) {
  return (
    <aside
      className={cn(
        'my-6 rounded-lg border p-4 text-sm',
        tone === 'warning' ? 'border-primary/70 bg-primary/10 text-foreground' : 'border-border bg-muted/50 text-mutedForeground'
      )}
    >
      {children}
    </aside>
  );
}
