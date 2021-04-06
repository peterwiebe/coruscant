import React from 'react';

import { Card } from '@coruscant/ui';

import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Card
        description="This is a sample description"
        title="This is a sample title"
      />
    </div>
  );
}

export default Index;
