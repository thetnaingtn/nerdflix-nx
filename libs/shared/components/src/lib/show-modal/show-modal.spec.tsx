import { render } from '@testing-library/react';

import ShowModal from './show-modal';

describe('ShowModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowModal />);
    expect(baseElement).toBeTruthy();
  });
});
