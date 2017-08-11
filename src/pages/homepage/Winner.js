import React from "react"

const Winner = ({winner, styles}) => {
  const companyDescription = winner.companyDescription.companyDescription;
  const logo = winner.logo && winner.logo.file.url;

  return (
    <div style={{ flex: 1 }}>
      {
        winner &&
        <div className={styles.winnerContainer}>
          <div className={styles.winnerCategory}>{winner.category && winner.category.label}</div>
          <div className={styles.winnerMedal}>{winner.medal && winner.medal.label.toUpperCase()} WINNER</div>
          <div><img src={logo} alt={winner.companyName}/></div>
          <div className={styles.company}>
            <div className={styles.companyName}>{winner.companyName}</div>
            <div className={ styles.companyDescription }>{companyDescription}</div>
          </div>
          <div className={styles.winnerWebsite}>{winner.webSite}</div>
        </div>
      }
    </div>
  )
};

export default Winner;