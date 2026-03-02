import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/mdx/callout';
import { Checklist } from '@/components/mdx/checklist';
import { FAQ } from '@/components/mdx/faq';
import { CitationBlock } from '@/components/mdx/citation-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Checklist,
    FAQ,
    CitationBlock,
    ...components
  };
}
