import React from 'react'
import { Link } from "gatsby"
/// SSTTOOPP HHEERREE

const MonthlySauce = ({id, product, suppliers, isInCart, name, jpg, btnClick}) => {
  console.log('wooow', {isInCart});
  return (
    <div className="card saucesText" id={id}>
    <Link key={id} to='/singleSauceView'
      state= {{
        product: product,
        suppliers: suppliers
      }}
      activeStyle={{
        color: "black",
      }}>
      <img className="card-img-top" src={jpg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title saucesText">{name}</h5>
      </div>
     </Link>
      <div className="card-footer" style={isInCart ? {backgroundColor: "lightgrey"} : {
        color: 'black'
      }}>
        <small className="text-muted">
          <button onClick={() => {btnClick(product.id)}}>{(isInCart ? "Delete" : "Add") }</button>
        </small>
      </div>
    </div>
  )
}

export default MonthlySauce
