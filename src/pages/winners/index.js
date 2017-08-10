import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './winners.module.scss';
import Select from 'react-select';

const Winners = ({ data: { winners, latestNews } }) => {
  const categories = [
    { id: 1, value: 'ALL CATEGORIES', label: 'ALL CATEGORIES' },
    { id: 2, value: 'OVERALL DEVELOPER SATISFACTION', label: 'OVERALL DEVELOPER SATISFACTION' },
    { id: 3, value: 'BEST HACKATHON', label: 'BEST HACKATHON' },
    { id: 4, value: 'MACHINE LEARNING Tech media popularity', label: 'MACHINE LEARNING Tech media popularity' },
    { id: 5, value: 'MACHINE LEARNING FRAMEWORKS', label: 'MACHINE LEARNING FRAMEWORKS' },
    { id: 6, value: 'PLATFORM AS A SERVICE', label: 'PLATFORM AS A SERVICE' }
  ];

  const handleCategories = ({ target }) => {
    console.log('target');
    console.log(target);
  };

  return (
    <div>
      <h1>That is Winners page</h1>
      <div>
        <Select
          searchable={false}
          options={categories}
          onChange={handleCategories}
        />
      </div>
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  );
}

export default Winners;

export const pageQuery = graphql`
  query WinnersQuery {
    winners:  allContentfulFinalists(filter: { isWinner: {eq: true} }) {
    edges {
      node { 
        id
        companyName
        logo {
          file {
            url
          }
        }
        webSite
        category {
          label
          date
        }
        medal {
          label
        }
    }
  }
  }
    latestNews: allContentfulNews(limit: 1000) {
    edges {
      node {
        date
        headLine
        reporter
    }
  }
  }
}
`

