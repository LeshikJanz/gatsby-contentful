import React from "react"
import styles from './styles/winner.module.scss'

const Winner = ({winner}) => {
  const companyDescription = winner && winner.companyDescription.companyDescription;
  const logo = winner && winner.logo.file.url;

  return (
    <div>
      {
        winner &&
        <div className={styles.winnerContainer}>
          <div>{winner.category.label}</div>
          <div><img src={logo} alt={winner.companyName}/></div>
          <div>
            <div className={styles.companyName}>{winner.companyName}</div>
            <div className={ styles.companyDescription }>{companyDescription}</div>
          </div>
        </div>
      }
    </div>
  )
};

export default Winner;