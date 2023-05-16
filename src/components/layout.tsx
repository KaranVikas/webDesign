/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import { Behance, Dribbble, Figma, Linkedin, Medium, Twitter, Youtube } from "../svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className="footerClass">
              MehediHas
              © {new Date().getFullYear()} &middot;
              {` `}
            </div>
            <div>
              <A href="https://www.gatsbyjs.com"><Linkedin/></A>
              <A href="https://www.gatsbyjs.com"><Twitter/></A>
              <A href="https://www.gatsbyjs.com"><Dribbble/></A>
              <A href="https://www.gatsbyjs.com"><Behance/></A>
              <A href="https://www.gatsbyjs.com"><Youtube/></A>
              <A href="https://www.gatsbyjs.com"><Medium/></A>
              <A href="https://www.gatsbyjs.com"><Figma/></A>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Layout

const A = styled.a`
  margin-left: 12px;
`
