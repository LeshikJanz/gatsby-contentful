import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/style.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import Select from 'react-select';
import WinnerCategory from './components/WinnerCategory';
import { compose, withState, withHandlers, withProps } from 'recompose';
import arrowIcon from '../../assets/images/icons/back-slide.svg';

const DEFAULT_DATE_FILTER = { value: '', label: 'All Years' };
const DEFAULT_CATEGORY_FILTER = { value: '', label: 'All Categories' };

const Winners = (props) => {
  const {
    handleCategorySelect, handleDateSelect, selectedCategory, selectedYear, selectedWinners,
    data: { latestNews, categories }
  } = props;

  const getYears = () =>
    [DEFAULT_DATE_FILTER,
      ...categories.edges.map(e => e.node.date && e.node.date.split('-')[0])
        .filter((item, pos, self) => self.indexOf(item) == pos)
        .map(y => ({
          value: y,
          label: y
        }))
    ];

  const getCategories = () => [DEFAULT_CATEGORY_FILTER, ...categories.edges.map(e => e.node)];

  const getFilteredCategories = () =>
    getCategories()
      .filter(c => selectedCategory === DEFAULT_CATEGORY_FILTER ? true : c === selectedCategory)
      .sort((a, b) => a.label.localeCompare(b.label));

  const applyWinnersGrouping = (filter) => selectedWinners.filter(({ node: { category } }) => category && category.find(c => c.label === filter.label))
    .sort((a, b) => (a.node.medal && b.node.medal) && (a.node.medal.order - b.node.medal.order));

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.dropdownsContainer}>
          <Select
            arrowRenderer={({ isOpen }) => (
              <img className={cx(['dropdownArrow', { [styles['white']]: isOpen }])} src={arrowIcon}/>)}
            name="Select Year"
            value={selectedYear}
            clearable={false}
            style={{ minWidth: '128px', marginTop: '20px' }}
            searchable={false}
            options={getYears()}
            onChange={handleDateSelect}
          />
          <Select
            arrowRenderer={({ isOpen }) => (
              <img className={cx(['dropdownArrow', { [styles['white']]: isOpen }])} src={arrowIcon}/>)}
            name="Select Category"
            clearable={false}
            value={selectedCategory}
            style={{ minWidth: '315px', marginTop: '20px' }}
            searchable={false}
            options={getCategories()}
            onChange={handleCategorySelect}
          />
        </div>
        {
          getFilteredCategories()
            .map((c, i) => <WinnerCategory key={i} category={c}
                                           winners={applyWinnersGrouping(c)}
            />)
        }
        {
          selectedWinners && !selectedWinners.length &&
          <div style={{ paddingTop: '60px' }}><h1 className={styles.dropdownsContainer}>There is no one winner
            for {selectedCategory.label + ' ' + selectedYear.label}</h1></div>
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
  withState('selectedCategory', 'setCategory', DEFAULT_CATEGORY_FILTER),
  withState('selectedYear', 'setYear', { label: '2017', value: '2017' }),
  withProps((props) => ({
    winners: props.data.winners.edges,
  })),
  withProps((props) => {
    return ({
      selectedWinners: props.winners.filter(
        ({ node: { category } }) => ( category && category.find(c => c.label === props.selectedCategory.label) || props.selectedCategory.value === DEFAULT_CATEGORY_FILTER.value) &&
        ( category && category.find(c => c.date.split('-')[0] == props.selectedYear.label) || props.selectedYear.value === DEFAULT_DATE_FILTER.value ))
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
)
(Winners);

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
        description: companyDescription {
          id
          text: companyDescription
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
        linkToFullArticle
    }
  }
  }
}
`