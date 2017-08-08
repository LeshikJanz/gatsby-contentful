import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import styles from './styles/layout.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

import navigations from '../../src/assets/mock-data/navigation.json';

const propTypes = {
  children: PropTypes.func.isRequired,
};

const Navigation = () => (
  <nav>
    {
      navigations.map((nav, i) =>
        <Link key={i} to={ nav.link } activeStyle={{ color: '#0431ff', opacity: 1 }}
              className={styles.navTab}>{nav.label}</Link>)
    }
  </nav>
);

class DefaultLayout extends React.Component {

  render() {
    return (
      <div>
        <div className={cx([ 'header', 'containerFluid' ])}>
          <Link to="/"><h1>LOGO</h1></Link>
          <Navigation/>
        </div>
        {this.props.children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
