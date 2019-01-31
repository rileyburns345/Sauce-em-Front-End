import React, { Component } from 'react'
import { Link } from "gatsby"

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      product: ''
    }
  }

  onSubmit = (e) => {

  }


  onQuantityChange = (e) => {
    console.log(e.target.value);
    console.log('333', this.props.product)
    e.preventDefault()
    this.setState({
      ...this.state,
      quantity: e.target.value,
      product: this.props.product
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Quantity: </label>
            <input type='number' min='1' value={this.state.quantity} onChange={this.onQuantityChange} />
          </div>
          <div>

          </div>
          <Link className='l-link-text' to="/store"><input type='submit' value="add to cart"/></Link>
        </form>
      </div>
    )
  }
}

export default AddItem
