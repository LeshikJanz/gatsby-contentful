import React from 'react';
import Link from "gatsby-link";
import styles from './styles/following.module.scss';
import urls from '../../urls';

import logo from '../../assets/images/logo.svg';
import plusIcon from '../../assets/images/icons/plus.svg';
import twitterIcon from '../../assets/images/icons/twitter.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import googleIcon from '../../assets/images/icons/google-plus.svg';

const Following = (props) => (
  <div className={ styles.followingContainer }>
    <Link to={urls.index}><img className={ styles.logo } src={logo}/></Link>
    <div>
      <h4>Want to get updates on the Developer Satisfaction Awards?</h4>
      <div className={ styles.subscription }>
        <form action="//slashdata.us1.list-manage.com/subscribe/post?u=f5cdd9d9e59e9c39c83d7b50f&amp;id=be91fbed43"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
              target="_blank" noValidate>
          <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="YOUR EMAIL ADDRESS"/>
          <button type="submit">
            <img src={plusIcon}/>
          </button>
        </form>
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