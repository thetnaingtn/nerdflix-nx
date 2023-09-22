import { PropsWithChildren } from 'react';

import { Nav } from '@nerdflix/shared/ui';
import { Footer } from '@nerdflix/shared/ui';
import { getServerSession } from 'next-auth';
import Provider from '../provider/provider';

export default async function ProtectedLayout({ children }: PropsWithChildren) {
  const session = await getServerSession();

  function renderWhenSessionValid(element: JSX.Element) {
    if (!session) return null;
    return element;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Provider session={session}>
        <Nav.default>
          <Nav.Frame>
            <Nav.Group>
              <Nav.Logo />
              {renderWhenSessionValid(
                <>
                  <Nav.TextLink href="/series">Series</Nav.TextLink>
                  <Nav.TextLink href="/films">Films</Nav.TextLink>
                </>
              )}
            </Nav.Group>
            {renderWhenSessionValid(
              <Nav.Group>
                <Nav.Search />
                <Nav.Profile>
                  <Nav.Picture />
                  <Nav.Dropdown>
                    <Nav.Group>
                      <Nav.Picture className="mr-3" />
                      <Nav.TextLink href="#">
                        {session?.user?.email}
                      </Nav.TextLink>
                    </Nav.Group>
                    <Nav.Group>
                      <Nav.SignOutButton>Sign Out</Nav.SignOutButton>
                    </Nav.Group>
                  </Nav.Dropdown>
                </Nav.Profile>
              </Nav.Group>
            )}
          </Nav.Frame>
        </Nav.default>
        <main className="flex-1">{children}</main>
        <Footer>
          <Footer.Title>Questions? Contact us.</Footer.Title>
          <Footer.Break />
          <Footer.Row>
            <Footer.Column>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Investor Relations</Footer.Link>
              <Footer.Link href="#">Ways to Watch</Footer.Link>
              <Footer.Link href="#">Corporate Information</Footer.Link>
              <Footer.Link href="#">Netflix Originals</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#">Help Centre</Footer.Link>
              <Footer.Link href="#">Jobs</Footer.Link>
              <Footer.Link href="#">Terms of Use</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#">Account</Footer.Link>
              <Footer.Link href="#">Redeem gift cards</Footer.Link>
              <Footer.Link href="#">Privacy</Footer.Link>
              <Footer.Link href="#">Speed Test</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#">Media Centre</Footer.Link>
              <Footer.Link href="#">Buy gift cards</Footer.Link>
              <Footer.Link href="#">Cookie Preferences</Footer.Link>
              <Footer.Link href="#">Legal Notices</Footer.Link>
            </Footer.Column>
          </Footer.Row>
          <Footer.Break />
          <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
      </Provider>
    </div>
  );
}
