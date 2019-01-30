import React from 'react'
import { Link } from "gatsby"

const MonthlySauce = ({id, product, suppliers, isInCart, name, jpg, btnClick}) => {
  console.log('wooow', {isInCart});
  return (
    <div class="card" id={id}>
    <Link key={id} to='/singleSauceView'
      state= {{
        product: product,
        suppliers: suppliers
      }}
      activeStyle={{
        color: "black",
      }}>
      <img class="card-img-top" src={jpg} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
      </div>
     </Link>
      <div class="card-footer" style={isInCart ? {backgroundColor: "lightgrey"} : {
        color: 'black'
      }}>
        <small class="text-muted">
          <button onClick={() => {btnClick(product.id)}}>{(isInCart ? "Delete" : "Add") }</button>
        </small>
      </div>
    </div>
  )
}

export default MonthlySauce
