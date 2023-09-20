import { Metadata } from 'next';

import { Hero } from '@nerdflix/shared/components';
import { SignInForm } from '@nerdflix/shared/components';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign In',
  description: 'Sign in to see thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero src="/home-bg.jpg" type="static" className="h-[116vh]">
        <SignInForm />
      </Hero>
    </div>
  );
}
