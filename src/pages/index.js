import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"

import styles from './styles/main.module.scss';

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Navigation = ({mainNavigation}) => (
  <nav>
    {
      mainNavigation.map((nav, i) =>
        <Link key={i} to={ nav.link } className={styles.navTab}>{nav.label}</Link>)
    }
  </nav>
);

class IndexPage extends React.Component {

  handleMeasure = () => console.log('handleMeasure');

  handleSatisfaction = () => console.log('handleSatisfaction');

  render() {
    const {
      mainNavigation, mainTitle, mainDescription: {mainDescription}, mainButtons
    } = this.props.data.main.edges[0].node;

    return (
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <h1>LOGO</h1>
          <Navigation mainNavigation={mainNavigation}/>
        </div>
        <div className={styles.welcome}>
          <div className={styles.mainTitle}>{mainTitle}</div>
          <br/>
          <div className={styles.mainDescription}>{mainDescription}</div>
        </div>
        <br/><br/>

        {/* Main Buttons */}
        <div>
          {
            mainButtons.map((b, i) => <button key={i} onClick={this[b.callback]}>{b.title}</button>)
          }
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
          id
          mainNavigation {
            link
            label
          }
          mainTitle
          mainButtons {
            title
            callback
          }
          mainWinnersLabel
          mainWinnerBlock {
            logo
            label
            companyName
            companyDescription
          }
          mainWinnersButtons {
            label
            callback
          }
          mainDescription {
            id
            mainDescription
          }
        }
      }
    }
}
`
