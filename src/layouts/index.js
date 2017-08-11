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

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({mobileNavVisible: window.innerWidth < 700});
  }

  render() {

    return (
      <nav >
        {
          navigations.map((nav, i) =>
            <Link key={i} to={ nav.link } activeStyle={{color: '#0431ff', opacity: 1}}
                  className={styles.navTab}>{nav.label}</Link>)
        }
      </nav>
    )
  }
}

class DefaultLayout extends React.Component {

  render() {
    return (
      <div>
        <div className={cx(['header', 'containerFluid'])}>
          <Link to="/"><img className={ styles.logo } src={logo}/></Link>
          <Navigation/>
        </div>
        {this.props.children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
