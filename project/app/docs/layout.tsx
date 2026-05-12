import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { LayoutProps } from 'fumadocs-ui/layouts/shared';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
