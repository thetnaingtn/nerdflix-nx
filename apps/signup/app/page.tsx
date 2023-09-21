import { Hero } from '@nerdflix/shared/components';
import { SignUpForm } from '@nerdflix/shared/components';
import { Metadata } from 'next';

import HomeBg from '@nerdflix/shared/assets/images/home-bg.jpg';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nerdflix | Sign Up',
  description: 'Create an account to access thousands of series and movies',
};

export default function Page() {
  return (
    <div>
      <Hero className="h-[116vh]" type="static" src={HomeBg}>
        <SignUpForm />
      </Hero>
    </div>
  );
}
