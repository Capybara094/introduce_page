import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { PropsWithChildren } from 'react';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
