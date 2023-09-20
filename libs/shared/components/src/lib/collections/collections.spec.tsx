import { render } from '@testing-library/react';

import Collections from './collections';

describe('Collections', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Collections />);
    expect(baseElement).toBeTruthy();
  });
});
