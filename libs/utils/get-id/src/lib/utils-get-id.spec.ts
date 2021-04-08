import { utilsGetId } from './utils-get-id';

describe('utilsGetId', () => {
  it('should work', () => {
    expect(utilsGetId()).toEqual('utils-get-id');
  });
});
