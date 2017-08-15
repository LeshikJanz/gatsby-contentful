import React from 'react';
import styles from './styles/style.module.scss';
import Select from 'react-select';
import { compose, withState, withHandlers, withProps } from 'recompose';

const DEFAULT_DATE_FILTER = { value: '', label: 'All Years' };

const Finalists = () => {

  const getYears = (props) =>
    [DEFAULT_DATE_FILTER,
      ...[...new Set(categories.edges.map(e => e.node.date.split('-')[0]))]
        .map(y => ({
          value: y,
          label: y
        }))
    ];

  return (
    <div className={styles.finalistsContainer}>
      <Select
        name="Select Year"
        value={selectedYear}
        clearable={false}
        style={{ minWidth: '128px', marginTop: '20px' }}
        placeholder=""
        options={getYears()}
        onChange={handleDateSelect}
      />

      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
};


export default compose(
  withState('selectedYear', 'setYear', DEFAULT_DATE_FILTER),
  withProps((props) => ({
    winners: props.data.winners.edges,
  })),
  withProps((props) => {
    console.log(props);
    return ({
      selectedWinners: props.winners.filter(
        ({ node: { category } }) => ( category.label === props.selectedCategory.label || props.selectedCategory.value === DEFAULT_CATEGORY_FILTER.value) &&
        ( category.date.split('-')[0] == props.selectedYear.label || props.selectedYear.value === DEFAULT_DATE_FILTER.value ))
    })
  }),
  withHandlers({
    handleCategorySelect: (props) => (evt) => {
      props.setCategory(evt);
    },
    handleDateSelect: (props) => (evt) => {
      props.setYear(evt);
    },
  })
)(Finalists);


export const pageQuery = graphql`
  query WinnersQuery {
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