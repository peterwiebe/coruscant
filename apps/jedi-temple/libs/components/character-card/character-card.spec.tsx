import React from 'react';
import { render } from '@testing-library/react';

import CharacterCard from './character-card';

describe('CharacterCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterCard />);
    expect(baseElement).toBeTruthy();
  });
});
