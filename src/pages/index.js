import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Product = ({ node }) =>
  <div key={node.id}>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.image[0].responsiveResolution.src &&
            <img
              style={{ margin: 0 }}
              width={node.image[0].responsiveResolution.width}
              height={node.image[0].responsiveResolution.height}
              src={node.image[0].responsiveResolution.src}
              srcSet={node.image[0].responsiveResolution.srcSet}
            />}
        </div>
        <div style={{ flex: 1 }}>
          {node.productName.productName}
        </div>
      </div>
    </Link>
  </div>

class IndexPage extends React.Component {
  render() {
    console.log('this.props.data');
    console.log(this.props.data);

    return (
      <h1>App works</h1>
    // const usProductEdges = this.props.data.us.edges
    // const deProductEdges = this.props.data.german.edges
    // return (
    //   <div style={{ marginBottom: rhythm(2) }}>
    //     <h2>Gatsby's integration with the Contentful Image API</h2>
    //     <Link to="/image-api/">See examples</Link>
    //     <br />
    //     <br />
    //     <br />
    //     <h2>Localization</h2>
    //     <p>
    //       The <code>gatsby-source-contentful</code> plugin offers full support
    //       for Contentful's localization features. Our sample space includes
    //       products localized into both English and German.
    //     </p>
    //     <p>
    //       An entry and asset node are created for each locale following fallback
    //       rules for missing localization. In addition, each node has an
    //       additional field added, <code>node_locale</code> so you can select for
    //       nodes from a single locale
    //     </p>
    //     <h3>en-US</h3>
    //     {usProductEdges.map(({ node }, i) => <Product node={node} />)}
    //     <br />
    //     <br />
    //     <h3>de</h3>
    //     {deProductEdges.map(({ node }, i) => <Product node={node} />)}
    //   </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    main: allContentfulMain(limit: 1000) {
      edges {
        node {
          id
          mainNavigation {
            link
            label
          }
          mainTitle
          mainButtons {
            title
            callback
          }
          mainWinnersLabel
          mainWinnerBlock {
            logo
            label
            companyName
            companyDescription
          }
          mainWinnersButtons {
            label
            callback
          }
          mainDescription {
            id
          }
        }
      }
    }
}
`
