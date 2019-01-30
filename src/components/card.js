import React from 'react'
import "../styles/card.css"

const Card = ({product, suppliers}) => {
  // console.log('this is it', suppliers);
  console.log('5555', suppliers.filter(supplier => product.supplierID === supplier.id)[0].supplierName)
  return (
    <div>
      <img class="i-card-img" src={product.productPicture} alt="Card image cap" />
      <div class="i-card-body">
        <h3 class="i-card-title">{product.productName}</h3>
        <h4 className="i-supplier"> by {suppliers.filter(supplier => product.supplierID === supplier.id)[0].supplierName}
        </h4>
        <p className="i-card-text">{product.productDescription}</p>
        <h5>${product.unitPrice}</h5>
      </div>
    </div>

  )
}

export default Card
