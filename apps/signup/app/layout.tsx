import './global.css';
import { Layout } from '@nerdflix/shared/components';

export const metadata = {
  title: 'Welcome to signup',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}