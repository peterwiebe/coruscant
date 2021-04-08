import * as React from 'react';
import Fuse from 'fuse.js';
import { API_URL_MOVIES, Movie } from '@coruscant/api-interface';
import { fetcher, movieIdMap, useMovies } from '@coruscant/data-fetching';

import { Form, Input, Typography } from 'antd';
import { Card } from '@coruscant/ui';

import styles from './index.module.scss';

const { Title } = Typography;

export interface HomePageProps {
  movies: Movie[];
}

export function Index({ movies }: HomePageProps) {
  const { isLoading, isError } = useMovies({ initialData: movies });
  const [filterTerm, setFilterTerm] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(movies);

  const handleFilterChange = ({ target }) => {
    setFilterTerm(target.value);
  };

  React.useEffect(() => {
    if (!filterTerm) {
      setFilteredMovies(movies);
    } else {
      const filteredMovieList = new Fuse(movies, { keys: ['title'] }).search(
        filterTerm
      );

      setFilteredMovies(filteredMovieList.map(({ item }) => item));
    }
  }, [filterTerm, movies]);

  return (
    <div className={styles.page}>
      <Title>Jedi Archive</Title>
      <Form>
        <Form.Item label="Filter Movies">
          <Input allowClear onChange={handleFilterChange} />
        </Form.Item>
      </Form>
      <div className={styles.movieList}>
        {filteredMovies?.map(({ description, id, posterUrl, title }) => (
          <a href={`/movies/${id}`} key={id}>
            <Card
              description={description ? description : ''}
              title={title}
              imgUrl={
                posterUrl ? `https://image.tmdb.org/t/p/w500${posterUrl}` : null
              }
            />
          </a>
        ))}
        {isLoading ? (
          <>
            <Card isLoading />
            <Card isLoading />
            <Card isLoading />
          </>
        ) : null}
        {isError ? (
          <p>
            Hmm... something unexpected happened. Please contact support for
            help.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const movies = await fetcher(
    `http://${process.env.API_DOMAIN}:${process.env.API_PORT}${API_URL_MOVIES}`
  );

  if (process.env.MOVIE_DATABASE_API_KEY)
    await Promise.all(
      movies.map(({ id }) => {
        const movieDataBaseId = movieIdMap[id];
        return fetcher(
          `https://api.themoviedb.org/3/movie/${movieDataBaseId}?api_key=${process.env.MOVIE_DATABASE_API_KEY}&language=en-US`
        );
      })
    ).then((data) => {
      const movieIdMappings = Object.entries(movieIdMap);

      data.forEach(({ id, poster_path, overview }) => {
        const swapiId = movieIdMappings.reduce((result, [key, value]) => {
          if (result) {
            return result;
          }
          return id === value ? key : null;
        }, null);
        const moviesIndex = movies.findIndex(({ id }) => id === swapiId);

        movies[moviesIndex].posterUrl = poster_path;
        movies[moviesIndex].description = overview;
      });
    });

  return {
    props: { movies },
  };
}

export default Index;
