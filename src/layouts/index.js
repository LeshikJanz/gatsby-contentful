import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
