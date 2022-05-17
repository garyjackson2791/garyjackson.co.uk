import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
//import parse from "html-react-parser"
//import Menu from "./menu"
//import Img from "gatsby-image"
import * as footerStyles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.siteFooter}>
      <div className="container mx-auto">
        Gary Jackson | Web Development Liverpool
      </div>
    </footer>
  )
}

export default Footer