export interface Character {
  name: string;
  birthdate: string;
  height: string;
}

export interface Movie {
  title: string;
  description: string;
  id: string;
}

export interface Planet {
  name: string;
  population: string;
  climate: string;
}

export const API_URL_BASE = '/api';
export const API_URL_CHARACTERS = `${API_URL_BASE}/characters`;
export const API_URL_MOVIES = `${API_URL_BASE}/movies`;
export const API_URL_PLANETS = `${API_URL_BASE}/planets`;
