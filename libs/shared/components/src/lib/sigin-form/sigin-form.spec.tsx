import { render } from '@testing-library/react';

import SiginForm from './sigin-form';

describe('SiginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiginForm />);
    expect(baseElement).toBeTruthy();
  });
});
