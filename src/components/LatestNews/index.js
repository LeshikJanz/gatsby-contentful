import React from "react";
import styles from './style.module.scss';
import NukaCarousel from './NukaCarousel';
import { format } from 'date-fns';
import { LATEST_NEWS_COUNT } from "../../constants/index";

const Article = ({ article }) => (
  <div className={styles.articleContainer}>
    <div className={styles.date}>{format(new Date(article.date), 'MMMM DD,YYYY')}</div>
    <div className={styles.headLine}>{article.headLine}</div>
    <div className={styles.reporter}>{article.reporter}</div>
  </div>
);

const LatestNews = (props) => {
  const latestNews = props.latestNews
    .sort((a, b) => new Date(b.node.date) - new Date(a.node.date))
    .slice(0, LATEST_NEWS_COUNT);

  return (
    <div className={styles.latestNewsContainer}>
      <h2>Latest News</h2>
      <NukaCarousel>
        {
          latestNews.map((n, i) => <Article key={i} article={n.node}/>)
        }
      </NukaCarousel>
    </div>
  );
}

export default LatestNews;