import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { LayoutProps } from 'fumadocs-ui/layouts/shared';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
