import React from "react"
import styles from './styles/winner.module.scss'

export const Winner = ({ winner }) => {
  const companyDescription = winner.companyDescription.companyDescription;
  const logo = winner.logo.file.url;

  return (
    <div className={styles.winnerContainer}>
      <div>{winner.award}</div>
      <div><img src={logo} alt={winner.companyName}/></div>
      <div>
        <div className={styles.companyName}>{winner.companyName}</div>
        <div className={ styles.companyDescription }>{companyDescription}</div>
      </div>
    </div>
  )
};