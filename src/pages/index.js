import React from "react"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"

import styles from './styles/main.module.scss';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {

  handleMeasure = () => console.log('handleMeasure');

  handleSatisfaction = () => console.log('handleSatisfaction');

  render() {
    const {
      title, description: {description}, buttons
    } = this.props.data.main.edges[0].node;

    return (
      <div>

        <div className={styles.welcome}>
          <div className={styles.title}>{title}</div>
          <br/>
          <div className={styles.description}>{description}</div>
        </div>
        <br/><br/>

        {/* Main Buttons */}
        {/*<div>*/}
          {/*{*/}
            {/*mainButtons.map((b, i) => <button key={i} onClick={this[b.callback]}>{b.title}</button>)*/}
          {/*}*/}
        {/*</div>*/}
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
}
`
