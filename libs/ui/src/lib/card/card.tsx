import React from 'react';

import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  description: string;
  title: string;
}

export function Card({ description, title }: CardProps) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;
