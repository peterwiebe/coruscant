import { API_URL_BASE } from './api-interface';

describe('API_URL_BASE', () => {
  it('should work', () => {
    expect(API_URL_BASE).toEqual('/api');
  });
});
