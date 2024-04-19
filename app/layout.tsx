/*
 * @Date: 2024-04-17 18:06:35
 * @LastEditTime: 2024-04-19 14:39:24
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import clsx from 'clsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'layout-root antialiased')}>
        {children}
      </body>
    </html>
  );
}
