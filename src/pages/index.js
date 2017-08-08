import React from "react"
import * as PropTypes from "prop-types"
import { TopWinners } from "./homepage/TopWinners";

import styles from './homepage/styles/main.module.scss';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {

  handleMeasure = () => console.log('handleMeasure');

  render() {
    const {
      title, description: { description }, homePicture
    } = this.props.data.main.edges[ 0 ].node;

    const winners = this.props.data.winners.edges;

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
          id
          title
          description {
            id
            description
          }
          homePicture {
          id
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
          id
          file {
            url
          }
        }
        companyDescription {
          id
          companyDescription
        }
        webSite
      }
    }
  }
}
`
