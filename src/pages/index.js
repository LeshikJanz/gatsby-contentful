import React from "react"
import * as PropTypes from "prop-types"
import Link from "gatsby-link"
import TopWinners from "../modules/homepage/TopWinners";
import LatestNews from "../components/LatestNews"
import Following from "../components/Following/index";
import Sponsors from '../modules/homepage/Sponsors';
import urls from '../urls';
import styles from '../modules/homepage/styles/main.module.scss';
import { GOLD_MEDAL_ORDER } from "../constants/index";
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

const propTypes = {
  data: PropTypes.object.isRequired,
};

const IndexPage = ({ data: { main, winners, latestNews, sponsors } }) => {
  const { title, description: { description }, homePicture } = main.edges[0].node;

  // default filter by only GOLD medals
  const getWinners = () => winners.edges.filter(({ node }) => node.medal.order == GOLD_MEDAL_ORDER);

  return (
    <div>
      <div className={cx(['mainContainer', 'welcome'])}>
        <div className={styles.welcomeText}>
          <div className={styles.title}>{title}</div>
          <br/>
          <div className={styles.description}>{description}</div>
          <div className={styles.actions}>
            <Link to={urls.about} className={styles.winnerButton}>HOW WE MEASURE SATISFACTION</Link>
          </div>
        </div>
        <div className={styles.welcomePicture}>
          <img src={homePicture.file.url}/>
        </div>
      </div>
      <Sponsors sponsors={sponsors.edges}/>
      <TopWinners winners={getWinners()}/>
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>

    </div>
  )
};

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
        homepageLogo {
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
   sponsors: allContentfulSponsors(limit: 1000) {
    edges {
      node { 
        id
        name
        logo {
          file {
            url
          }
        }
    }
    }
    }
}
`
