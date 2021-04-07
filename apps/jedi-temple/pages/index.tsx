import * as React from 'react';

import { API_URL_MOVIES, Movie } from '@coruscant/api-interface';
import { Card } from '@coruscant/ui';

import styles from './index.module.scss';

export function Index() {
  const [movieList, setMovieList] = React.useState<Movie[]>(null);

  React.useEffect(() => {
    fetch(`http://localhost:3333${API_URL_MOVIES}`)
      .then((response) => response.json())
      .then((movies: { results: Movie[] }) => setMovieList(movies.results));
  }, []);

  return (
    <div className={styles.page}>
      {movieList?.map(({ title }) => (
        <Card description="This is a sample description" title={title} />
      ))}
    </div>
  );
}

export default Index;
