import React from 'react';
import styles from './styles/style.module.scss';
import Select from 'react-select';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import FinalistCategory from './components/FinalistCategory';
import { compose, withState } from 'recompose';

const DEFAULT_DATE_FILTER = { value: '', label: 'All Years' };

const Finalists = ({ data: { latestNews, winners, categories }, selectedYear, setYear }) => {
  const getYears = (props) =>
    [DEFAULT_DATE_FILTER,
      ...[...new Set(winners.edges.map(e => e.node.category.date.split('-')[0]))]
        .map(y => ({
          value: y,
          label: y
        }))
    ];

  const getFilteredCategories = () =>
    categories.edges
      .map(e => e.node)
      .sort((a, b) => a.label.localeCompare(b.label));

  const applyWinnersFiltering = (filter) =>
    winners.edges
      .filter(({ node: { category } }) => (filter.label === category.label) &&
      (selectedYear === DEFAULT_DATE_FILTER ? true : selectedYear.label === category.date.split('-')[0]));

  return (
    <div className={styles.finalistsContainer}>
      <div className={styles.dropdownsContainer}>
        <Select
          name="Select Year"
          value={selectedYear}
          onChange={setYear}
          clearable={false}
          options={getYears()}
          style={{ minWidth: '128px' }}
        />
      </div>
      {
        getFilteredCategories()
          .map((c, i) => <FinalistCategory key={i} winners={applyWinnersFiltering(c)}/>
          )
      }

      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
};


export default compose(
  withState('selectedYear', 'setYear', { label: '2017', value: '2017' })
)(Finalists);

export const pageQuery = graphql`
  query FinalistsQuery {
     categories: allContentfulCategory(limit: 1000) {
    edges {
      node {
        id
        label
        value: label
        date
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
          order
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