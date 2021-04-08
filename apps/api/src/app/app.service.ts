import { Injectable, InternalServerErrorException } from '@nestjs/common';
import fetch from 'isomorphic-fetch';
import { Character, Planet } from '@coruscant/api-interface';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  async getCharacter({ id }) {
    let data: Character = null;

    await fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => response.json())
      .then(({ birth_year, height, name }) => {
        data = { birthdate: birth_year, height, name };
      })
      .catch((err) => {
        console.error(err);
        throw new InternalServerErrorException();
      });

    return data;
  }

  async getPlanet({ id }) {
    let data: Planet = null;

    await fetch(`https://swapi.dev/api/planets/${id}`)
      .then((response) => response.json())
      .then((planet) => {
        data = planet;
      })
      .catch((err) => {
        console.error(err);
        throw new InternalServerErrorException();
      });

    return data;
  }
}
