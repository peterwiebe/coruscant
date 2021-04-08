import * as React from 'react';

import { fetcher, useMovies } from '@coruscant/data-fetching';
import { Typography } from 'antd';
import { Card } from '@coruscant/ui';

import styles from './index.module.scss';
import { API_URL_MOVIES, Movie } from '@coruscant/api-interface';

const { Title } = Typography;

export interface HomePageProps {
  movies: Movie[];
}

export function Index({ movies }: HomePageProps) {
  const { isLoading, isError } = useMovies({ initialData: movies });

  return (
    <div className={styles.page}>
      <Title>Jedi Archive</Title>
      <div className={styles.movieList}>
        {movies?.map(({ id, title }) => (
          <a href={`/movies/${id}`} key={id}>
            <Card description="This is a sample description" title={title} />
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

  return {
    props: { movies },
  };
}

export default Index;
