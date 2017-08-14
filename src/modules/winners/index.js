import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/style.module.scss';
import Select from 'react-select';
import WinnerCategory from './components/WinnerCategory';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { DEFAULT_CATEGORY_FILTER } from "./constants/index";

const Winners = (props) => {
  const {
    handleCategorySelect, handleDateSelect, selectedCategory, selectedYear, selectedWinners,
    data: {winners, latestNews, categories}
  } = props;

  const getYears = () =>
    // Make year unique
    [...new Set(categories.edges.map(e => e.node.date.split('-')[0]))]
      .map(y => ({
        value: y,
        label: y
      }));

  const getWinners = (category) =>
    (selectedWinners || winners.edges).filter(w => w.node.category.label == category.node.label);

  return (
    <div>
      <div className={styles.dropdownsContainer}>
        <Select
          name="Select Year"
          value={selectedYear}
          style={{minWidth: '98px'}}
          placeholder=""
          options={getYears()}
          onChange={handleDateSelect}
        />
        <Select
          name="Select Category"
          clearable={false}
          value={selectedCategory}
          style={{minWidth: '355px'}}
          placeholder=""
          options={categories.edges.map(e => e.node)}
          onChange={handleCategorySelect}
        />
      </div>
      {
        categories.edges.map((c, i) =>
          <WinnerCategory key={i}
                          winners={getWinners(c)}/>)
      }
      {
        selectedWinners && !selectedWinners.length &&
        <h1 className={styles.mainContainer}>There is no one winner for {selectedCategory.label + ' ' + selectedYear.label}</h1>
      }
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
};

export default compose(
  withState('selectedCategory', 'setCategory', {value: 'All Categories', label: 'All Categories'}),
  withState('selectedYear', 'setYear', {value: '2017', label: '2017'}),
  withState('selectedWinners', 'setWinners', null),
  withProps((props) => ({
    runAllCategoriesFilter: (date) => {
      props.setWinners(props.data.winners.edges.filter(({node: {category}}) =>
      category.date.split('-')[0] == date));
    },
    runFilter: (item, categoryFilter, dateFilter) => {
      return item.label === categoryFilter && item.date.split('-')[0] == dateFilter
    }
  })),
  withHandlers({
    handleCategorySelect: (props) => (evt) => {
      props.setCategory(evt);
      if (evt.label === 'All Categories') {
        props.runAllCategoriesFilter(props.selectedYear.label);
        return;
      }

      // Filtering out winners by category
      const filteredWinners = props.data.winners.edges.filter(
        ({node: {category}}) => props.runFilter(category, evt.label, props.selectedYear.label)
      );

      props.setWinners(filteredWinners);
    },

    handleDateSelect: (props) => (evt) => {
      props.setYear(evt);

      if (props.selectedCategory.label === 'All Categories') {
        props.runAllCategoriesFilter(evt.label);
        return;
      }

      // Filtering out winners by category
      const filteredWinners = props.data.winners.edges.filter(
        ({node: {category}}) => props.runFilter(category, props.selectedCategory.label, evt.label)
      );

      // Filtering out winners by year
      props.setWinners(filteredWinners);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.data.categories.edges.unshift({node: DEFAULT_CATEGORY_FILTER});
      this.props.handleCategorySelect(this.props.selectedCategory);
      this.props.handleDateSelect(this.props.selectedYear);
    },
    componentWillUnmount() {
      this.props.data.categories.edges.shift();
    }
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