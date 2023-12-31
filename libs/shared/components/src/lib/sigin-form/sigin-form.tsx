'use client';

import { FormEventHandler, useState } from 'react';
import { signIn } from 'next-auth/react';
import { Form } from '@nerdflix/shared/ui';

export default function SigIn() {
  const [error, setError] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    signIn('credentials', {
      email: emailAddress,
      password,
      redirect: true,
      callbackUrl: 'http://localhost:4300',
    }).catch((err) => {
      setError(err.message);
    });
  };

  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error data-testid="error">{error}</Form.Error>}

      <Form.Base onSubmit={handleSignin} method="POST">
        <Form.Input
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input
          type="password"
          value={password}
          autoComplete="off"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit type="submit" data-testid="sign-in">
          Sign In
        </Form.Submit>
      </Form.Base>
      <Form.Text>
        New to Netflix?{' '}
        <Form.Link href="http://localhost:4100">Sign up now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
      </Form.TextSmall>
    </Form>
  );
}
