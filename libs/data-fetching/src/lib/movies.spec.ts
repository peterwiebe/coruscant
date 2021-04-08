import { useMovies } from './movies';

describe('useMovies', () => {
  it('should work', () => {
    expect(useMovies()).toEqual('data-fetching');
  });
});
