import useSwr from 'swr';
import { API_URL_CHARACTERS } from '@coruscant/api-interface';
import fetcher from './fetcher';

export function useCharacter({ id }: { id: string }) {
  const { data, error } = useSwr(`${API_URL_CHARACTERS}/${id}`, fetcher);

  return {
    character: data,
    isLoading: !error && !data,
    isError: error,
  };
}
