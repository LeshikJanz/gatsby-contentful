import React from 'react';
import styles from '../styles/style.module.scss';
import Winner from '../../../components/Winner'

const WinnerCategory = ({ winners, category }) => (
  <div>
    {winners && !!winners.length &&
      <div className={styles.innerContainer}>
        <div className={styles.categoryLabel}>
          <h2>{category && category.label}</h2>
          <hr/>
        </div>
        <div className={styles.winners}>
          {
            winners && winners
              .sort((a,b) => (a.node.medal && b.node.medal) && (a.node.medal.order - b.node.medal.order))
              .map((w, i) => <Winner key={i} winner={w.node} styles={styles}/>)
          }
        </div>
      </div>
    }
  </div>
);

export default WinnerCategory;