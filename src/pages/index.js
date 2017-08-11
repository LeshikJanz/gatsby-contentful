import React from "react"
import * as PropTypes from "prop-types"
import TopWinners from "./homepage/TopWinners";
import LatestNews from "../components/LatestNews"
import Following from "../components/Following/index";

import styles from './homepage/styles/main.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

const propTypes = {
  data: PropTypes.object.isRequired,
};

class IndexPage extends React.Component {

  handleMeasure = () => console.log('handleMeasure');

  render() {
    const {
      title, description: { description }, homePicture
    } = this.props.data.main.edges[ 0 ].node;

    const winners = this.props.data.winners.edges;

    const latestNews = this.props.data.latestNews.edges;

    return (
      <div>
        <div className={cx(['mainContainer', 'welcome'])}>
          <div className={styles.welcomeText}>
            <div className={styles.title}>{title}</div>
            <br/>
            <div className={styles.description}>{description}</div>
            <div className={styles.actions}>
              <button className={styles.winnerButton} onClick={this.handleMeasure}>HOW WE MEASURE SATISFACTION</button>
            </div>
          </div>
          <div className={styles.welcomePicture}>
            <img src={homePicture.file.url}/>
          </div>
        </div>
        <TopWinners winners={winners}/>
        <div className={styles.info}>
          <LatestNews latestNews={latestNews}/>
          <Following />
        </div>

      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    main: allContentfulMain(limit: 1000) {
      edges {
        node {
          title
          description {
            description
          }
          homePicture {
          file {
            url
          }
        }
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
