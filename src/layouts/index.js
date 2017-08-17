import React from "react"
import Link from "gatsby-link"
import urls from '../urls';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import * as PropTypes from "prop-types"
import styles from './styles/layout.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import 'react-select/dist/react-select.min.css';

import logo from '../assets/images/logo.svg';
import logoWhite from '../assets/images/logo-white.svg';
import menuBurgerOpen from '../assets/images/icons/burger_menu_icon.svg';
import menuBurgerClose from '../assets/images/icons/burger_menu_icon_close.svg';

import navigations from '../../src/assets/mock-data/navigation.json';

const propTypes = {
  children: PropTypes.func.isRequired,
};

const TABLET_WIDTH = 1024;

const Navigation = ({ handleMenu }) => (
  <nav className={styles.navigation}>
    {
      navigations.map((nav, i) =>
        <Link key={i} to={ nav.link }
              activeClassName={styles.active}
              onClick={handleMenu}
              className={styles.navTab}>{nav.label}</Link>)
    }
  </nav>
);

const DefaultLayout = ({ children, handleMenu, isMenuOpen, windowWidth }) => (
  <div>
    <div className={cx(['header', 'menuContainer', { [styles.menuContainerOpen]: isMenuOpen },
    ])}>
      <div className={styles.logoBar}>
        <div>
          <Link to={urls.index}><img onClick={() => handleMenu(true)}
                                     className={ styles.logoWhite }
                                     src={isMenuOpen ? logo : logoWhite}/></Link>
          <Link to={urls.index}><img className={ styles.logoBlue } src={logo}/></Link>
        </div>
        <img src={isMenuOpen ? menuBurgerOpen : menuBurgerClose}
             onClick={() => handleMenu(!isMenuOpen)}
             className={styles.menuBurger}/>
      </div>
      {
        (!isMenuOpen || windowWidth > TABLET_WIDTH) &&
        <Navigation handleMenu={handleMenu}/>
      }
    </div>
    {children()}
  </div>
)

DefaultLayout.propTypes = propTypes;

export default compose(
  withState('isMenuOpen', 'handleMenu', true),
  withState('windowWidth', 'handleWindowWidth'),
  withHandlers({
    updateDimensions: (props) => (event) => {
      if (typeof window !== 'undefined') {
        const w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
        props.handleWindowWidth(width);
      }
    }
  }),
  lifecycle({
    componentWillMount() {
      this.props.updateDimensions();
    },
    componentDidMount() {
      window.addEventListener("resize", this.props.updateDimensions);
    },
    componentWillUnmount() {
      window.removeEventListener("resize", this.props.updateDimensions);
    }
  })
)(DefaultLayout)
