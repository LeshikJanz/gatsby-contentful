import React from 'react';

const Press = ({ data: { press, latestNews } }) => (
  <div></div>
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