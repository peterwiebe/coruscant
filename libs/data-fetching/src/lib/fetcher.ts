const fetcher = (endpoint, options) =>
  fetch(endpoint, options).then((res) => res.json());

export default fetcher;
