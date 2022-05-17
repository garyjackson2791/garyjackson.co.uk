import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
//import parse from "html-react-parser"
//import Menu from "./menu"
//import Img from "gatsby-image"

import * as headerStyles from '../styles/header.module.scss'

const Header = () => {

  return (

    <header className={headerStyles.siteHeader}>
      <div className="container flex mx-auto">
        <Link className="flex-none grow-0 w-auto custom-logo-link" to="/">Gary Jackson<span className="full-stop">.</span></Link>
        <div className="flex flex-1 justify-end align-center">
          <nav className={headerStyles.navigation}>
            <ul>
              <li>
                <Link className="navbar-item" to='/about' key='/about'>About</Link>
              </li>
              <li>
                <Link className="navbar-item" to='/work' key='/work'>Work</Link>
              </li>
              <li>
                <Link className="navbar-item" to='/blog' key='/blog'>Blog</Link>
              </li>
              <li>
                <Link className="navbar-item" to='/contact' key='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>          
        </div>
      </div>
    </header>



  )
}

export default Header
