import React from 'react';
import LatestNews from '../../components/LatestNews';
import Following from '../../components/Following';
import styles from './styles/styles.module.scss';
// import { format } from 'date-fns';

import twitterIcon from '../../assets/images/icons/twitter.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import googleIcon from '../../assets/images/icons/google-plus.svg';

const Press = ({ data: { press, latestNews } }) => (
  <div>
    <div className={styles.mainContainer}>
      <div className={styles.categoryLabel}>
        <h2>Press Releases</h2>
        <hr/>
      </div>
      <div className={styles.pressItems}>
        {
          press.edges.map(({ node }, i) => (
            <div key={i}>
              <div className={styles.pressContainer}>
                <div>
                  {/*<div className={styles.date}>{format(new Date(node.date), 'MM DD,YYYY')}</div>*/}
                  <div className={styles.title}>{node.title}</div>
                  <div className={styles.description}>{node.description.description}</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.pdfDownload}>
                    <h4>Download</h4>
                    <a target="_blank" href={node.pdf.document.file.url}>{node.pdf.document.file.fileName}</a>
                  </div>
                  <div className={styles.shareActions}>
                    <h4>Share</h4>
                    <div className={styles.followIcons}>
                      <img src={twitterIcon} alt="Twitter"/>
                      <img src={linkedin} alt="LinkedIn"/>
                      <img src={facebook} alt="Facebook"/>
                      <img src={googleIcon} alt="Google"/>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
            </div>
          ))
        }
      </div>
    </div>
    <div className={styles.info}>
      <LatestNews latestNews={latestNews.edges}/>
      <Following />
    </div>
  </div>
);

export default Press;

export const pageQuery = graphql`
  query PressQuery {
   press: allContentfulPress(limit: 1000) {
    edges {
      node { 
        id
        date
        title
        description {
          description
        }
        pdf {
          id
          document {
            id
            file {
              url
              fileName
              contentType
            }
          }
        }
    }
    }
    }
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