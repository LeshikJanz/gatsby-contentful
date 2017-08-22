import React from 'react';
import styles from './styles/style.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import Select from 'react-select';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import FinalistCategory from './components/FinalistCategory';
import { compose, withState } from 'recompose';
import arrowIcon from '../../assets/images/icons/back-slide.svg';

const DEFAULT_DATE_FILTER = { value: '', label: 'All Years' };

const Finalists = ({ data: { latestNews, finalists, categories }, selectedYear, setYear }) => {
  const getYears = () =>
    [DEFAULT_DATE_FILTER,
      ...finalists.edges.map(e => e.node.category.date.split('-')[0])
        .filter((item, pos, self) => self.indexOf(item) == pos)
        .map(y => ({
          value: y,
          label: y
        }))
    ];

  const getFilteredCategories = () =>
    categories.edges
      .map(e => e.node)
      .sort((a, b) => a.label.localeCompare(b.label));

  const applyFinalistsFiltering = (filter) =>
    finalists.edges
      .filter(({ node: { category } }) => (filter.label === category.label) &&
      (selectedYear === DEFAULT_DATE_FILTER ? true : selectedYear.label === category.date.split('-')[0]));

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.dropdownsContainer}>
          <Select
            arrowRenderer={({ isOpen }) => (
              <img className={cx(['dropdownArrow', { [styles['white']]: isOpen }])} src={arrowIcon}/>)}
            name="Select Year"
            value={selectedYear}
            onChange={setYear}
            clearable={false}
            searchable={false}
            options={getYears()}
            style={{ minWidth: '128px', marginTop: '20px' }}
          />
        </div>
        {
          getFilteredCategories()
            .map((c, i) => <FinalistCategory key={i} finalists={applyFinalistsFiltering(c)}/>
            )
        }
      </div>
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
    finalists: allContentfulFinalists(limit: 1000) {
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