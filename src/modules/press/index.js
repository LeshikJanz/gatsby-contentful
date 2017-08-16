import React from 'react';
import LatestNews from '../../components/LatestNews';
// import Following from '../../components/Following';
import styles from './styles/styles.module.scss';
// import { format } from 'date-fns';

// import twitterIcon from '../../assets/images/icons/twitter.svg';
// import linkedin from '../../assets/images/icons/linkedin.svg';
// import facebook from '../../assets/images/icons/facebook.svg';
// import googleIcon from '../../assets/images/icons/google-plus.svg';

const Press = ({ data: { press, latestNews } }) => (
  <div>
    <div>
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