import fetch from 'isomorphic-fetch';

export const fetcher = (endpoint, options = {}) =>
  fetch(endpoint, options).then((res) => res.json());

export default fetcher;
