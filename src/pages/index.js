import React from "react"
import * as PropTypes from "prop-types"
import TopWinners from "./homepage/TopWinners";
import LatestNews from "../components/LatestNews"
import Following from "../components/Following/Following";
import { connect } from "react-redux"

import styles from './homepage/styles/main.module.scss';
import setNews from "./homepage/actions";

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.setNews(this.props.data.latestNews.edges);
  }

  handleMeasure = () => console.log('handleMeasure');

  render() {
    console.log('this.props');
    console.log(this.props);
    
    const {
      title, description: { description }, homePicture
    } = this.props.data.main.edges[ 0 ].node;

    const winners = this.props.data.winners.edges;

    const latestNews = this.props.data.latestNews.edges;

    return (
      <div>
        <div className={styles.welcome}>
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

const mapDispatchToProps = dispatch => ({
  setNews: (news) => dispatch(setNews(news))
});

export default connect(null, mapDispatchToProps)(IndexPage)

export const pageQuery = graphql`
  query PageQuery {
    main: allContentfulMain(limit: 1000) {
      edges {
        node {
          id
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
    winners:   allContentfulWinners(limit: 1000) {
    edges {
      node {
        id
        award
        year
        awardType
        companyName
        logo {
          file {
            url
          }
        }
        companyDescription {
          companyDescription
        }
        webSite
      }
    }
  }
    latestNews: allContentfulNews(limit: 1000) {
    edges {
      node {
        id
        date
        headLine
        reporter
    }
  }
  }
}
`
