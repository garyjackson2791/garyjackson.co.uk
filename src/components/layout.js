import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <div class="container mx-auto">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
