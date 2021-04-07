import { Controller, Get } from '@nestjs/common';
import fetch from 'node-fetch';

import { AppService } from './app.service';
import { Movie } from '@coruscant/api-interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/movies')
  async getMovies() {
    let movies: Movie[] = null;
    await fetch('https://swapi.dev/api/films')
      .then((response) => response.json())
      .then((data) => {
        movies = data;
      });
    return movies;
  }
}
