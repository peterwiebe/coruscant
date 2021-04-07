import React from 'react';
import { Card as AntCard } from 'antd';

import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  description: string;
  title: string;
}

export function Card({ description, title }: CardProps) {
  return (
    <AntCard className={styles.card} hoverable title={title}>
      <p>{description}</p>
    </AntCard>
  );
}

export default Card;
