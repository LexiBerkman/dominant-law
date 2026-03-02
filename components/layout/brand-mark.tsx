import Image from 'next/image';
import { cn } from '@/lib/utils';

export function BrandMark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('relative overflow-hidden rounded-md border border-primary/60 bg-card/80', compact ? 'h-10 w-10' : 'h-16 w-16')}>
        <Image
          src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
          alt="Dominant Law lion logo"
          fill
          sizes={compact ? '40px' : '64px'}
          className="object-contain p-1.5"
          priority
        />
      </div>
      <div className="leading-tight">
        <p className={cn('font-serif font-semibold tracking-wide', compact ? 'text-lg' : 'text-2xl')}>
          Dominant <span className="text-primary">Law</span>
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-mutedForeground">Georgia Trial-Ready Counsel</p>
      </div>
    </div>
  );
}
