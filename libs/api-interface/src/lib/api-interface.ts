export interface Movie {
  title: string;
  description: string;
  id: string;
}

export const API_URL_BASE = '/api';
export const API_URL_CHARACTERS = `${API_URL_BASE}/people`;
export const API_URL_MOVIES = `${API_URL_BASE}/movies`;
