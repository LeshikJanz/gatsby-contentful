import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

import styles from './styles/layout.module.scss';

import navigationJson from '../../src/assets/mock-data/navigation.json';

const propTypes = {
  children: PropTypes.func.isRequired,
};

const Navigation = () => (
  <nav>
    {
      navigationJson.map((nav, i) =>
        <Link key={i} to={ nav.link } className={styles.navTab}>{nav.label}</Link>)
    }
  </nav>
);

class DefaultLayout extends React.Component {

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <h1>LOGO</h1>
          <Navigation/>
        </div>
        {this.props.children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
