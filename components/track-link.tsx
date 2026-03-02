'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { track } from '@/lib/analytics/core';

export function TrackLink({
  href,
  event,
  children,
  className,
  props
}: {
  href: string;
  event: string;
  children: ReactNode;
  className?: string;
  props?: Record<string, string | number | boolean>;
}) {
  const isExternalProtocol = href.startsWith('tel:') || href.startsWith('sms:') || href.startsWith('mailto:');

  if (isExternalProtocol) {
    return (
      <a href={href} className={className} onClick={() => track(event, props)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={() => track(event, props)}>
      {children}
    </Link>
  );
}
