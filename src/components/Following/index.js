import React from 'react';
import Link from "gatsby-link";
import styles from './styles/following.module.scss';

import logo from '../../assets/images/logo.png';
import plusIcon from '../../assets/images/icons/plus.svg';
import twitterIcon from '../../assets/images/icons/twitter.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import googleIcon from '../../assets/images/icons/google-plus.svg';

const Following = (props) => (
  <div className={ styles.followingContainer }>
    <Link to="/"><img className={ styles.logo } src={logo}/></Link>
    <div>
      <h4>Want to get updates on the Developer Satisfaction Awards?</h4>
      <div className={ styles.subscription }>
        <input type="text" placeholder="YOUR EMAIL ADDRESS"/>
        <button onClick={ props.handleSubscription }>
          <img src={plusIcon}/>
        </button>
      </div>
    </div>
    <div>
      <h4>Follow</h4>
      <div className={styles.followIcons}>
        <img onClick={ props.handleFollowing } src={twitterIcon} alt="Twitter"/>
        <img onClick={ props.handleFollowing } src={linkedin} alt="LinkedIn"/>
        <img onClick={ props.handleFollowing } src={facebook} alt="Facebook"/>
        <img onClick={ props.handleFollowing } src={googleIcon} alt="Google"/>
      </div>
    </div>
    <h4>© 2017 SlashData.co</h4>
  </div>
)

export default Following;