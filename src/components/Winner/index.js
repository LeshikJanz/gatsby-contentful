import React from "react";

const Winner = ({ winner, styles }) => {
  const companyDescription = winner.companyDescription && winner.companyDescription.companyDescription;
  const logo = winner.logo && (winner.homeLogo || winner.logo).file.url;

  return (
    <div className={styles.selectedWinner}>
      {
        winner &&
        <div className={styles.winnerContainer}>
          <div className={styles.winnerCategory}>{winner.category && winner.category.label}</div>
          <div className={styles.winnerMedal}>{winner.medal && winner.medal.label.toUpperCase()}</div>
          <div className={styles.logo}><img src={logo} alt={winner.companyName}/></div>
          <div className={styles.company}>
            <div className={styles.companyName}>{winner.companyName}</div>
            <div className={ styles.companyDescription } dangerouslySetInnerHTML={{
              __html: companyDescription
            }}/>
          </div>
          <a target="_blank" className={styles.winnerWebsite} href={winner.webSite}>{winner.webSite}</a>
        </div>
      }
    </div>
  )
};

export default Winner;