import useSwr from 'swr';
import { API_URL_MOVIES } from '@coruscant/api-interface';
import fetcher from './fetcher';

export function useMovies({ initialData }) {
  const endpoint = `${API_URL_MOVIES}`;
  const { data, error } = useSwr(endpoint, fetcher, { initialData });

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useMovie({ id }: { id: string }) {
  const { data, error } = useSwr(`${API_URL_MOVIES}/${id}`, fetcher);

  return {
    movie: data,
    isLoading: !error && !data,
    isError: error,
  };
}
