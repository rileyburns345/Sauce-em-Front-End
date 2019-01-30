import React, {Component} from 'react'
import { Link } from "gatsby"
import "../styles/gallary.css"


class Gallary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      suppliers: [],
      category: ''
    }
  }


async componentDidMount() {
    console.log('**********component mounted *********')
    //get data from the API
    const response = await fetch(`http://localhost:3000/products`)
    const json = await response.json()
    this.setState({products: json})

    const response2 = await fetch(`http://localhost:3000/suppliers`)
    const json2 = await response2.json()
    this.setState({suppliers: json2})



  }

  filterCategories = (cat) => {
    this.setState({category: cat})
    }

  createProductCards = () => {
    let theSauces = []
    if (this.state.category === '') {
      theSauces = this.state.products
    }
    else {
      theSauces = this.state.products.filter(product => product.category === this.state.category)
    }
    return theSauces.map((product, id) => {
      return (
      <div class="card">
      <Link key={id} to='/singleSauceView'
        state= {{
          product: product,
          suppliers: this.state.suppliers
        }}
        activeStyle={{
          color: "black",
        }}>
        <img class="card-img-top" src={product.productPicture} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{product.productName}</h5>
          <p class="card-title">${product.unitPrice}</p>
        </div>
       </Link>
      </div>
      )
    });
  }
  //// SSSTTTOOOPPPP HHHEERRRRREEEE
  render() {
    return(
    <div>
      <h1 className="my-4">Shop</h1>
        <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('')}>
              All
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Pesto')}>
              Pesto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Hot Sauce')}>
              Hot Sauce
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Ketchup')}>
              Ketchup
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Mustard')}>
              Mustard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Mayonnaise')}>
              Mayonnaise
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Aioli')}>
              Aioli
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Chutney')}>
              Chutney
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={()=>this.filterCategories('Others')}>
              Others
            </a>
          </li>
        </ul>

      </div>

  <div className="container-fluid">
    {this.createProductCards()}
  </div>
</div>



)
}
}

export default Gallary
