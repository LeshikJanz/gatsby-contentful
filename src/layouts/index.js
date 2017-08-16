import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import styles from './styles/layout.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import 'react-select/dist/react-select.min.css';
import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo-white.png';
import navigations from '../../src/assets/mock-data/navigation.json';

const propTypes = {
  children: PropTypes.func.isRequired,
};

const Navigation = ({ isMobileView }) => (
  <nav className={styles.navigation}>
    {
      navigations.map((nav, i) =>
        <Link key={i} to={ nav.link }
              activeClassName={styles.active}
              className={styles.navTab}>{nav.label}</Link>)
    }
  </nav>
);

const DefaultLayout = ({ children }) => (
  <div>
    <div className={cx(['header', 'containerFluid'])}>
      <Link to="/"><img className={ styles.logoBlue } src={logo}/></Link>
      <Link to="/"><img className={ styles.logoWhite } src={logoWhite}/></Link>
      <Navigation/>
    </div>
    {children()}
  </div>
);

DefaultLayout.propTypes = propTypes

export default DefaultLayout
