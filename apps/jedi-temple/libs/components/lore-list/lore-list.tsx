import * as React from 'react';
import { getId } from '@coruscant/utils/get-id';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';

import styles from './lore-list.module.scss';

const { Title } = Typography;

export interface LoreListProps {
  list?: string[];
  render: any;
  shift: number;
  title: string;
}

export function PlanetList({
  list,
  render: Component,
  shift = 3,
  title,
}: LoreListProps) {
  const [index, setIndex] = React.useState(0);

  const handleForwardClick = () => {
    setIndex(index + shift);
  };
  const handleBackwardClick = () => {
    if (index > 0) {
      setIndex(index - shift);
    }
  };

  return (
    <div>
      <Title level={3}>{title}</Title>

      <div style={{ position: 'relative' }}>
        <div
          className={styles.button}
          style={{
            left: '-2.5rem',
          }}
        >
          <Button
            disabled={index === 0}
            shape="circle"
            icon={<LeftOutlined />}
            onClick={handleBackwardClick}
          />
        </div>
        <div className={styles.loreList}>
          <Component id={getId(list?.[index]) || ''} />
          {index + 1 < list.length ? (
            <Component id={getId(list?.[index + 1]) || ''} />
          ) : (
            <div />
          )}
          {index + 2 < list.length ? (
            <Component id={getId(list?.[index + 2]) || ''} />
          ) : (
            <div />
          )}
        </div>
        <div className={styles.button} style={{ right: '-2.5rem', top: 0 }}>
          <Button
            disabled={(index / shift + 1) * 3 >= list.length}
            shape="circle"
            icon={<RightOutlined />}
            onClick={handleForwardClick}
          />
        </div>
      </div>
    </div>
  );
}

export default PlanetList;
