import React from 'react';
import { usePlanet } from '@coruscant/data-fetching';

import { Card } from '@coruscant/ui';
import Link from 'next/link';

export interface PlanetCardProps {
  id: string;
}

export function PlanetCard({ id }: PlanetCardProps) {
  const { planet, isLoading, isError } = usePlanet({ id });
  if (isLoading) {
    return <Card isLoading />;
  }
  return (
    <Link href={`/planets/${id}`}>
      <a>
        <Card title={planet.name} description={`climate: ${planet.climate}`} />
      </a>
    </Link>
  );
}

export default PlanetCard;
