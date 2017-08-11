import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/style.module.scss';
import Select from 'react-select';
import VericalCarousel from './components/VerticalCarousel';
import WinnerCategory from './components/WinnerCategory';
import { compose, withState } from 'recompose';

const Winners = (props) => {
  const {
    dropdownCategoryValue, dropdownYearValue, handleCategorySelect, handleYearSelect,
    data: { winners, latestNews, categories }
  } = props;

  const getYears = () =>
    [...new Set(categories.edges.map(e => e.node.date.split('-')[0]))]
      .map(y => ({
        value: y,
        label: y
      }));

  return (
    <div>
      <div className={styles.dropdownsContainer}>
        <Select
          name="Select Year"
          value={dropdownYearValue}
          style={{ minWidth: '98px' }}
          placeholder=""
          options={getYears()}
          onChange={handleYearSelect}
        />
        <Select
          name="Select Category"
          value={dropdownCategoryValue}
          style={{ minWidth: '355px' }}
          placeholder=""
          options={categories.edges.map(e => e.node)}
          onChange={handleCategorySelect}
        />
      </div>
      <div>
        <VericalCarousel>
          {
            categories.edges.map((c, i) =>
              <WinnerCategory key={i}
                              winners={winners.edges.filter(w => w.node.category.label === c.node.label)}/>)
          }
        </VericalCarousel>
      </div>
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
};

export default compose(
  withState('dropdownCategoryValue', 'handleCategorySelect', { value: 'All Categories', label: 'All Categories' }),
  withState('dropdownYearValue', 'handleYearSelect', { value: '2017', label: '2017' })
)(Winners);

export const pageQuery = graphql`
  query WinnersQuery {
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