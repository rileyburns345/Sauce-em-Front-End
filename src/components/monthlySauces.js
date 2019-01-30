import React, {Component} from 'react'
import MonthlySauce from './MonthlySauce'
import "../styles/gallary.css"


class MonthlySauces extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      suppliers: [],
      selected: []
    }
  }


async componentDidMount() {
    console.log('**********component mounted *********')
    //get data from the API
    const response = await fetch(`http://localhost:3000/products`)
    console.log('res', response);
    const json = await response.json()

    // console.log(json);
    this.setState({products: json})

    const response2 = await fetch(`http://localhost:3000/suppliers`)
    const json2 = await response2.json()
    this.setState({suppliers: json2})
  }

  onAddClick = (e) => {
    console.log('EEE', e);
    let alreadyChoosen = this.state.selected.filter(ids => e === ids)
    if (alreadyChoosen.length > 0) {
      // alert("you've already selected this sauce")
      let index = this.state.selected.indexOf(e)
      console.log('HHEYEYE', index);
      const newSelected1 = this.state.selected.slice(0, index)
      const newSelected2 = this.state.selected.slice(index+1)
      const newSelectedFinal = newSelected1.concat(newSelected2)
      this.setState({
        ...this.state,
        selected: newSelectedFinal
      })
    }
    else if (this.state.selected.length > 3) {
      alert("you've already selected 4 sauces")
    }
    else {
    this.setState({
      ...this.state,
      selected: [...this.state.selected, e]
    })
   }
  }

  // onSubmit = () => {
  //   this.state.products.selected
  // }


  createSelectedView = () => {
    return this.state.products.map((product, id) => {
      for (let i = 0; i < this.state.selected.length; i++) {
        if (product.id === this.state.selected[i]) {
          return <li className="cart-items">{product.productName}</li>
        }
      }
    })
  }

  createProductCards = () => {
    return this.state.products.map((product, id) => {
        if (product.id === 1 || product.id === 2 || product.id === 3 || product.id === 4 || product.id === 5 || product.id === 6 || product.id === 8 || product.id === 10 || product.id === 12 || product.id === 13 || product.id === 15 || product.id === 16) {
          return (
            <MonthlySauce id={product.id} suppliers={this.state.suppliers} product={product} isInCart={this.state.selected.includes(product.id)} name={product.productName} jpg={product.productPicture} btnClick={this.onAddClick}/>
          )
        }
    });
  }

  render() {
    console.log(this.state);
    return(
  <div>
    <div className="container">
      <div className="selectedCart" id="selectedCart">
        <h2 className="cartHeader">Cart</h2>
        <div>
          {this.createSelectedView()}
          <button className="subscribeButton">sauce-scribe</button>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div>
        {this.createProductCards()}
      </div>
    </div>
</div>



)
}
}

export default MonthlySauces
