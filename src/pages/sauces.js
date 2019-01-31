import React from 'react'
import Menu from '../components/menu'
import MonthlySauces from '../components/monthlySauces'

import "../styles/sauces.css"
import { Link } from "gatsby"


const Sauces = () => {
  return (
    <div saucesText>
      <Menu />
      <h2 className="saucesHeader">Choose 4 of this month's sauces.</h2>
      <p className="sauceText">Subscribtion bottles are medium sized so you can dabble with different falvors without worry. If you fall in love with any of our sauces you can purchase full size bottles from the <Link className="link-text" to="/store">store</Link>.</p>
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered saucesText" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Join Sauce'em Today</h5>
          </div>

          <div className="modal-body">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Join Our Mailing List</label>
            </div>
            <button type="submit" className="btn submitSaucesButton">Submit</button>
            </form>
          </div>

          <div className="modal-footer">

          </div>
        </div>
      </div>
    </div>
      <MonthlySauces />
    </div>
  )
}

export default Sauces
