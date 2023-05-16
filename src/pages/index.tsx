import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/HeroSection/HeroSection"
import WorkSection from "../components/WorkSection/WorkSection"
import KindSection from "../components/KindSection/KindSection"
import BlogSection from "../components/BlogSection/BlogSection"
import StorySection from "../components/StorySection/StorySection"

const IndexPage = () => (
  <Layout>
    <HeroSection/>
    <WorkSection/>
    <KindSection/>
    <BlogSection/>
    <StorySection/>
  </Layout>
  )
//   <Layout>
//     <div className="container">

//       {/* <HeroSection/> */}
//       <WorkSection/>
//       {/* <KindSection/> */}
//     </div>
//       {/* <div className={styles.textCenter}> */}
//     {/* </div> */}
    
//   </Layout>
// )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
