import React from 'react';
import styles from '../styles/style.module.scss';

const FinalistCategory = ({ winners }) => (
  <div>
    {winners && !!winners.length &&
    <div className={styles.winnerCategoryContainer}>
      <div className={styles.categoryLabel}>
        <h2>{winners && winners[0].node.category.label}</h2>
        <hr/>
      </div>
      <div className={styles.winners}>
        {
          winners && winners
            .sort((a, b) => a.node.medal.order - b.node.medal.order)
            .map((w, i) => <div className={styles.winnerItem} key={i}>{w.node.companyName}</div>)
        }
      </div>
    </div>
    }
  </div>
);

export default FinalistCategory;