import { useCharacters } from './characters';

describe('useCharacters', () => {
  it('should work', () => {
    expect(useCharacters()).toEqual('data-fetching');
  });
});
