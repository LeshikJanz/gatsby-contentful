import React from 'react';
import styles from '../styles/style.module.scss';
import Winner from '../../../components/Winner'

const WinnerCategory = ({ winners }) => (
  <div className={styles.winnerCategoryContainer}>
    <div className={styles.categoryLabel}>
      <h2>{winners && winners[0].node.category.label}</h2>
      <hr/>
    </div>
    <div className={styles.winners}>
      {
        winners && winners.map((w, i) => <Winner key={i} winner={w.node} styles={styles}/>)
      }
    </div>
  </div>
)

export default WinnerCategory;