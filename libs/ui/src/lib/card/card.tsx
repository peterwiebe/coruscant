import React from 'react';
import { Card as AntCard, Skeleton } from 'antd';

import styles from './card.module.scss';

const { Meta } = AntCard;

export interface CardProps {
  description?: string;
  isLoading?: boolean;
  title?: string;
}

export function Card({ description, isLoading, title }: CardProps) {
  return (
    <AntCard className={styles.card} hoverable title={title}>
      {isLoading ? (
        <Skeleton loading={isLoading} active>
          <Meta title="Card title" description="Card description" />
        </Skeleton>
      ) : (
        <p>{description}</p>
      )}
    </AntCard>
  );
}

export default Card;
