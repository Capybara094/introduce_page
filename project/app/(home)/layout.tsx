import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { PropsWithChildren } from 'react';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: PropsWithChildren) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
