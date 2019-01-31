import React from 'react'
import AddItem from './AddItem'
import "../styles/card.css"

const Card = ({product, suppliers}) => {
  // console.log('this is it', suppliers);
  console.log('5555', suppliers.filter(supplier => product.supplierID === supplier.id)[0].supplierName)
  return (
    <div className="saucesText cardText">
      <img className="i-card-img" src={product.productPicture} alt="Card image cap" />
      <div className="i-card-body">
        <h3 className="i-card-title saucesText">{product.productName}</h3>
        <h4 className="i-supplier saucesText"> by {suppliers.filter(supplier => product.supplierID === supplier.id)[0].supplierName}
        </h4>
        <p className="i-card-text saucesText">{product.productDescription}</p>
        <h5 className="saucesText">${product.unitPrice}</h5>
        <AddItem product={product.productName}/>
      </div>
    </div>

  )
}

export default Card
