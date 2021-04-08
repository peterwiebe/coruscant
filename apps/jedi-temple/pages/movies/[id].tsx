import * as React from 'react';
import { useRouter } from 'next/router';
import { useMovie } from '@coruscant/data-fetching';

import { Skeleton, Typography } from 'antd';
import LoreList from '../../libs/components/lore-list';
import Navigation from '../../libs/components/navigation';
import PlanetCard from '../../libs/components/planet-card';
import CharacterCard from '../../libs/components/character-card';

import styles from './[id].module.scss';

const { Title } = Typography;

/* eslint-disable-next-line */
export interface MoviePageProps {}

export function MoviePage(props: MoviePageProps) {
  const { id } = useRouter().query;
  const { movie, isLoading, isError } = useMovie({ id: `${id}` });

  if (isLoading) {
    return (
      <div>
        <Navigation />
        <Skeleton active />
      </div>
    );
  }

  return (
    <div>
      <Navigation />

      <Title level={2}>{movie.title}</Title>

      <dl>
        <dt>Episode:</dt>
        <dl>{movie.episode_id}</dl>

        <dt>Release Date:</dt>
        <dl>{movie.release_date}</dl>

        <dt>Director:</dt>
        <dl>{movie.director}</dl>

        <dt>Producer:</dt>
        <dl>{movie.producer}</dl>
      </dl>

      <LoreList
        list={movie.characters}
        render={CharacterCard}
        title="Characters"
      />
      <LoreList list={movie.planets} render={PlanetCard} title="Planets" />
    </div>
  );
}

export default MoviePage;
