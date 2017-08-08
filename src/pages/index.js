import React from "react"
import * as PropTypes from "prop-types"
import { TopWinners } from "./homepage/TopWinners";

import styles from './homepage/styles/main.module.scss';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {

  handleMeasure = () => console.log('handleMeasure');

  handleSatisfaction = () => console.log('handleSatisfaction');

  render() {
    const {
      title, description: {description}
    } = this.props.data.main.edges[0].node;

    const winners = this.props.data.winners.edges;

    return (
      <div>
        <div className={styles.welcome}>
          <div className={styles.title}>{title}</div>
          <br/>
          <div className={styles.description}>{description}</div>
        </div>
        <br/><br/>
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
          buttons {
            title
            callback
          }
          description {
            id
            description
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
