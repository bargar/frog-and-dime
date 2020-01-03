import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      {/*<pre>{JSON.stringify(product.images, null, " ")}</pre>*/}
      {product.images.length > 0 && (
        <>
          {/*img:*/}
          {/*<br />*/}
          {/*<img*/}
          {/*  src={product.images[0].localFile.childImageSharp.resolutions.src}*/}
          {/*  alt="Original Src"*/}
          {/*/>*/}
          {/*<hr />*/}
          {/*Img:*/}
          {/*<br />*/}
          {/*<Img*/}
          {/*  fixed={product.images[0].localFile.childImageSharp.resolutions}*/}
          {/*  alt="Original Src"*/}
          {/*/>*/}
          {/*<hr />*/}
          {/*Img Fluid:*/}
          {/*<br />*/}
          <Img
            sizes={product.images[0].localFile.childImageSharp.sizes}
            alt="Original Src"
          />
        </>
      )}
    </Layout>
  )
}
export default ProductTemplate
