/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query for all shopify products
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              localFile {
                childImageSharp {
                  resolutions(width: 100, height: 100) {
                    tracedSVG
                    width
                    height
                    src
                    srcSet
                  }
                  sizes(maxWidth: 1240) {
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
            shopifyId
            handle
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)

  // iterate over products and create a new page using a template
  // product "handle" is generated automatically by shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: { product: node },
    })
  })
}
