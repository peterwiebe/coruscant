import { Injectable, InternalServerErrorException } from '@nestjs/common';
import fetch from 'node-fetch';
import { Movie } from '@coruscant/api-interface';

@Injectable()
export class MoviesService {
  async getMovies() {
    let movies: Movie[] = null;

    await fetch('https://swapi.dev/api/films')
      .then((response) => response.json())
      .then(({ results }) => {
        // TODO: inject additional data
        movies = results.map(({ episode_id, title }) => ({
          id: episode_id,
          title,
        }));
      })
      .catch((err) => {
        console.error(err);
        throw new InternalServerErrorException();
      });

    return movies;
  }

  async getMovie({ id }) {
    let data: Movie = null;

    await fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => response.json())
      .then((movie) => {
        // TODO: inject additional data
        data = movie;
      })
      .catch((err) => {
        console.error(err);
        throw new InternalServerErrorException();
      });

    return data;
  }
}
