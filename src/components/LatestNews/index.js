import React from "react";
import styles from './style.module.scss';
import NukaCarousel from './NukaCarousel';

const Article = ({ article }) => (
  <div className={styles.articleContainer}>
    <div className={styles.date}>{article.date}</div>
    <div className={styles.headLine}>{article.headLine}</div>
    <div className={styles.reporter}>{article.reporter}</div>
  </div>
);

class LatestNews extends React.Component {
  render() {

    const { latestNews } = this.props;

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
}


export default LatestNews;