import useSwr from 'swr';
import { API_URL_PLANETS } from '@coruscant/api-interface';
import fetcher from './fetcher';

export function usePlanet({ id }: { id: string }) {
  const { data, error } = useSwr(`${API_URL_PLANETS}/${id}`, fetcher);

  return {
    planet: data,
    isLoading: !error && !data,
    isError: error,
  };
}
