import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get('/')
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get(':id')
  getMovie(@Param() params) {
    return this.moviesService.getMovie({ id: params.id });
  }
}
