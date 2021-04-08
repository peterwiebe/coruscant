import React from 'react';
import { render } from '@testing-library/react';

import LoreList from './lore-list';

describe('LoreList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LoreList render={() => <div>Lore</div>} title="Lore" />
    );
    expect(baseElement).toBeTruthy();
  });
});
