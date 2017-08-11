import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import styles from './styles/layout.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import logo from '../assets/images/logo.png';
import { withState, lifecycle, compose } from 'recompose';
import navigations from '../../src/assets/mock-data/navigation.json';

const propTypes = {
  children: PropTypes.func.isRequired,
};

const Navigation = ({ mobileNavVisible }) => (
  <nav className={styles.navigation}>
    {
      navigations.map((nav, i) =>
        <Link key={i} to={ nav.link } activeStyle={{ color: '#0431ff', opacity: 1 }}
              className={styles.navTab}>{nav.label}</Link>)
    }
  </nav>
);

const DefaultLayout = compose(
  withState('isMobileView', 'handleResize'),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', (e) => this.props.handleResize(e.target.innerWidth < 870));
      this.props.handleResize( window.innerWidth < 870);
    }
  })
)(({ isMobileView, children }) => (
  <div>
    <div className={cx(['header', 'containerFluid', { [styles.mobileView]: isMobileView }])}>
      <Link to="/"><img className={ styles.logo } src={logo}/></Link>
      <Navigation/>
    </div>
    {children()}
  </div>
));

DefaultLayout.propTypes = propTypes

export default DefaultLayout
