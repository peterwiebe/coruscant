import React from 'react';
import { useCharacter } from '@coruscant/data-fetching';

import Link from 'next/link';
import { Card } from '@coruscant/ui';

import './character-card.module.scss';

/* eslint-disable-next-line */
export interface CharacterCardProps {
  id: string;
}

export function CharacterCard({ id }: CharacterCardProps) {
  const { character, isLoading, isError } = useCharacter({ id });

  if (isLoading) {
    return <Card isLoading />;
  }

  return (
    <Link href={`/characters/${id}`}>
      <a>
        <Card
          title={character.name}
          description={`height: ${character.height}`}
        />
      </a>
    </Link>
  );
}

export default CharacterCard;
