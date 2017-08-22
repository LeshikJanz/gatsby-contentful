import React from 'react';
import styles from './styles/sponsors.module.scss';

const Sponsors = ({ sponsors }) => (
  <div className={styles.sponsorsContainer}>
    <div className={styles.sponsorsLabel}>Sponsored by</div>
    <div className={styles.sponsors}>
      {
        sponsors.map(({ node }, i) =>
          <div><img key={i} src={node.logo.file.url} alt={node.name}/></div>
        )
      }
    </div>
  </div>
);

export default Sponsors;