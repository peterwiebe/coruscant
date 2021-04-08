import * as React from 'react';
import { useRouter } from 'next/router';
import { usePlanet } from '@coruscant/data-fetching';

import Navigation from '../../libs/components/navigation';
import { Skeleton, Typography } from 'antd';

const { Title } = Typography;

export function PlanetPage() {
  const { id } = useRouter().query;
  const { planet, isLoading, isError } = usePlanet({ id: `${id}` });
  console.log({ planet });
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
      <Title level={2}>{planet.name}</Title>
      <dl>
        <dt>Population:</dt>
        <dd>
          {isNaN(planet.population)
            ? planet.population
            : Number(planet.population).toLocaleString()}
        </dd>

        <dt>Gravity</dt>
        <dd>{planet.gravity}</dd>

        <dt>Climate</dt>
        <dd>{planet.climate}</dd>

        <dt>Terrain:</dt>
        <dd>{planet.terrain}</dd>
      </dl>
    </div>
  );
}

export default PlanetPage;
