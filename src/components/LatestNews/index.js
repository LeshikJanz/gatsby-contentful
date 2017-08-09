import React from "react";
import styles from './style.module.scss';
import NukaCarousel from './NukaCarousel';

const Article = ({ article }) => {
  console.log('article');
  console.log(article);

  return (
    <div className={styles.articleContainer}>
      <div className={styles.date}>{article.date}</div>
      <div className={styles.headLine}>{article.headLine}</div>
      <div className={styles.reporter}>{article.reporter}</div>
    </div>
  )
}

const LatestNews = ({ latestNews }) => (
  <div className={styles.latestNewsContainer}>
    <h2>Latest News</h2>
    <NukaCarousel>
      {
        latestNews.map((n, i) => <Article key={i} article={n.node}/>)
      }
    </NukaCarousel>
  </div>
);

export default LatestNews;