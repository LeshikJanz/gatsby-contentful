import React from "react"
import styles from './styles/winner.module.scss'
import { Winner } from './Winner'

export const TopWinners = ({ winners }) => {
  console.log('winners');
  console.log(winners);

  return (
    <div className={styles.topWinnersContainer}>
      <div className={styles.winnerLabel}>
        <h2>Winners 2017</h2>
        <hr/>
      </div>
      <div className={styles.winners}>
        {
          winners.map((w, i) => <Winner key={i} winner={w.node}/>)
        }
      </div>
    </div>
  );
}