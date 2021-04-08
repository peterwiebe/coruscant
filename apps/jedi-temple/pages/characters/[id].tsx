import * as React from 'react';
import { useCharacter } from '@coruscant/data-fetching';
import { Skeleton, Typography } from 'antd';
import { useRouter } from 'next/router';

import Navigation from '../../libs/components/navigation';

const { Title } = Typography;

/* eslint-disable-next-line */
export interface CharacterPageProps {}

export function CharacterPage(props: CharacterPageProps) {
  const { id } = useRouter().query;
  const { character, isLoading, isError } = useCharacter({ id: `${id}` });

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
      <Title level={2}>{character.name}</Title>
      <dl>
        <dt>Birth year</dt>
        <dd>{character.birthdate}</dd>

        <dt>Height</dt>
        <dd>{character.height}</dd>
      </dl>
    </div>
  );
}

export default CharacterPage;
