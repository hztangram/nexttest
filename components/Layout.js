import Head from "next/head"
import Link from "next/link"
import HeaderInfo from "./HeadInfo"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Nav></Nav>
      <HeaderInfo />
      <div>{children}</div>
    </div>
  )
}

export default Layout
