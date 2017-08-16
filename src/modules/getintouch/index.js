import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/styles.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

const GetInTouch = ({ data: { latestNews } }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <div>
      <div className={cx(['getInTouchContainer', 'mainContainer', 'welcome'])}>
        <div className={styles.welcomeText}>
          <div className={styles.title}>Contact Us</div>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.formElement}>
              <label htmlFor="name">NAME</label>
              <input name="name" type="text" placeholder="YOUR NAME"/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="company">COMPANY</label>
              <input name="company" type="text" placeholder="YOUR COMPANY"/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="role">ROLE</label>
              <input name="role" type="text" placeholder="YOUR ROLE"/>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="message">MESSAGE</label>
              <textarea name="message" type="text" rows="4" placeholder="TYPE YOUR MESSAGE"/>
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.winnerButton}>Send message</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
}

export default GetInTouch;

export const pageQuery = graphql`
  query GetInTouch {
    latestNews: allContentfulNews(limit: 1000) {
    edges {
      node {
        date
        headLine
        reporter
    }
  }
  }
}
`