import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './winners.module.scss';
import Select from 'react-select';
import { withState } from 'recompose';

const enhance = withState('dropdownValue', 'handleSelect', { value: 'All Categories', label: 'All Categories' });

const Winners = enhance(({ dropdownValue, handleSelect, data: { winners, latestNews, categories } }) => (
  <div>
    <h1>That is Winners page</h1>
    <div>
      <Select
        name="Select Category"
        value={dropdownValue}
        placeholder=""
        options={categories.edges.map(e => e.node)}
        onChange={handleSelect}
      />
    </div>
    <div className={styles.info}>
      <LatestNews latestNews={latestNews.edges}/>
      <Following />
    </div>
  </div>
));

export default Winners;

export const pageQuery = graphql`
  query WinnersQuery {
   categories: allContentfulCategory(limit: 1000) {
    edges {
      node {
        id
        label
        value: label
        }
      }
    }
    winners: allContentfulFinalists(filter: { isWinner: {eq: true} }) {
    edges {
      node { 
        id
        companyName
        companyDescription {
          id
          companyDescription
        }
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