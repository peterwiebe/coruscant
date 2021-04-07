import * as React from 'react';

import { useMovies } from '@coruscant/data-fetching';
import { Typography } from 'antd';
import { Card } from '@coruscant/ui';

import styles from './index.module.scss';

const { Title } = Typography;

export function Index() {
  const { movies, isLoading, isError } = useMovies();

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

export default Index;
