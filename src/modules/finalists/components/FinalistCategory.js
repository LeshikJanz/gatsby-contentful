import React from 'react';
import styles from '../styles/style.module.scss';

const FinalistCategory = ({ finalists }) => (
  <div>
    {finalists && !!finalists.length &&
    <div className={styles.innerContainer}>
      <div className={styles.categoryLabel}>
        <h2>{finalists && finalists[0].node.category.label}</h2>
        <hr/>
      </div>
      <div className={styles.finalists}>
        {
          finalists && finalists
            .map((w, i) => <div className={styles.finalist} key={i}>{w.node.companyName}</div>)
        }
      </div>
    </div>
    }
  </div>
);

export default FinalistCategory;