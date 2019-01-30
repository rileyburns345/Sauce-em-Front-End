import React from 'react'
import { Link } from "gatsby"
import SEO from '../components/seo'
import Menu from '../components/menu'
import "../styles/homepage.css"

const IndexPage = () => (
  <div>
    <Menu />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="bg-img">
     <div className="home-text">
      <h1 className="brand-name">Sauce'em</h1>
      <h3>Mix & Match | Dip & Dabble</h3>
      <Link className="link-text" to="/sauces"><p>This months sauces</p></Link>
     </div>
    </div>
  </div>
)

export default IndexPage
