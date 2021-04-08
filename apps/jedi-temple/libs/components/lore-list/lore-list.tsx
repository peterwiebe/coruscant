import * as React from 'react';
import { getId } from '@coruscant/utils/get-id';

import { Typography } from 'antd';

import styles from './lore-list.module.scss';

const { Title } = Typography;

export interface LoreListProps {
  list?: string[];
  render: any;
  title: string;
}

export function PlanetList({ list, render: Component, title }: LoreListProps) {
  const [index, setIndex] = React.useState(0);

  const handleForwardClick = () => {
    setIndex(index + 1);
  };
  const handleBackwardClick = () => {
    setIndex(index - 1);
  };

  return (
    <div>
      <Title level={3}>{title}</Title>

      <div className={styles.loreList}>
        <Component id={getId(list?.[index]) || ''} />
        <Component id={getId(list?.[index + 1]) || ''} />
        <Component id={getId(list?.[index + 2]) || ''} />
      </div>
    </div>
  );
}

export default PlanetList;
