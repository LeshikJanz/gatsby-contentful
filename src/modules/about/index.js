import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/style.module.scss';
const classNames = require('classnames/bind');
import Link from "gatsby-link";
import urls from "../../urls";
const cx = classNames.bind(styles);

const About = ({ data: { content, latestNews } }) => {

  const {
    title, description: { description }, companyDescription: {companyDescription},
    companyName, companyWebSite, picture
  } = content.edges[ 0 ].node;

  return (
    <div>
      <div className={cx(['mainContainer', 'welcome'])}>
        <div className={styles.welcomeText}>
          <div className={styles.title}>{title}</div>
          <br/>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}/>
          <h2>About {companyName}</h2>
          <div className={styles.description}>{companyDescription}</div>
          <a href={companyWebSite} />
        </div>
        <div className={styles.welcomePicture}>
          <img src={picture.file.url}/>
          <div className={styles.actions}>
            <Link to={urls.getintouch}><button className={styles.winnerButton}>GET IN TOUCH</button></Link>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <LatestNews latestNews={latestNews.edges}/>
        <Following />
      </div>
    </div>
  )
};

export default About;

export const pageQuery = graphql`
  query AboutQuery {
   content: allContentfulAbout(limit: 1000) {
    edges {
      node { 
        id
        title
        description {
          description
        }
        picture {
          id
          file {
            url
          }
        }
        companyName
        companyDescription {
          companyDescription
        }
        companyWebSite
    }
    }
    }
    latestNews: allContentfulNews(limit: 1000) {
    edges {
      node {
        date
        headLine
        reporter
        linkToFullArticle
    }
  }
  }
}
`