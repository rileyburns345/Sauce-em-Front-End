import React from 'react'
import Menu from '../components/menu'
import MonthlySauces from '../components/monthlySauces'

import "../styles/sauces.css"
import { Link } from "gatsby"


const Sauces = () => {
  return (
    <div>
      <Menu />
      <h2>Pick 4 of your favorite sauces every month.</h2>
      <p>Subscribtion bottles are medium sized so you can dabble with different falvors without worry. If you fall in love with any of our sauces you can purchase full size bottles from the <Link className="link-text" to="/store">store</Link>.</p>
      <MonthlySauces />
    </div>
  )
}

export default Sauces
