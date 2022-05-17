import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
//import parse from "html-react-parser"
//import Menu from "./menu"
//import Img from "gatsby-image"

import { StaticImage } from "gatsby-plugin-image"

import * as sidebar from '../styles/sidebar.module.scss'

const Sidebar = () => {

  return (

    <div className={[sidebar.sidebar, "text-center"].join(" ")}>
      <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/garyjackson.jpg"
        width={200}
        height={200}
        quality={95}
        imgClassName="headshot"
        style={{
          borderRadius: '50%',
          marginBottom: '40px',
        }}
        alt="Gary Jackson"
      />
      <Link className={sidebar.customLogoLink} to="/"><h2>Gary Jackson</h2></Link>
      <p className={sidebar.subheading}>Web Developer</p>
      <nav className={sidebar.navigation}>
        <ul>
          <li>
            <a href="#masthead">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>          
    </div>



  )
}

export default Sidebar
