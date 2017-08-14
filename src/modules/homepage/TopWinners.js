import React from "react"
import styles from './styles/winner.module.scss'
import Winner from '../../components/Winner'

const TopWinners = ({ winners }) => (
  <div>
    {
      winners &&
      <div className={styles.topWinnersContainer}>
        <div className={styles.winnerLabel}>
          <h2>Winners 2017</h2>
          <hr/>
        </div>
        <div className={styles.winners}>
          {
            winners.map((w, i) => <Winner key={i} winner={w.node} styles={styles}/>)
          }
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className={styles.winnerButtonWhite}>ALL WINNERS</button>
        </div>
      </div>
    }
  </div>
);

export default TopWinners;