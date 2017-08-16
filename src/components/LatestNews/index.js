import React from "react";
// import styles from './style.module.scss';
import NukaCarousel from './NukaCarousel';

const Article = ({ article }) => (
  <div>
    <div>{article.date}</div>
    <div >{article.headLine}</div>
    <div>{article.reporter}</div>
  </div>
);

class LatestNews extends React.Component {
  render() {

    const { latestNews } = this.props;

    return (
      <div>
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