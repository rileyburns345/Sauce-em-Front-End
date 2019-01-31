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

///// SSTTOOPP HHEERREE
///// SSTTOOPP HHEERREE
  createProductCards = () => {
    let theSauces = []
    let sauceArray = []
    if (this.state.category === '') {
      let arr = this.state.products
      for (let i = 0; i < arr.length; i++) {
        sauceArray.push(arr[i])
        if ((i+1)%4 === 0) {
          theSauces.push(sauceArray)
          sauceArray = []
        }else if (i === arr.length-1){
          theSauces.push(sauceArray)
        }
      }
    }
    else {
      let theSauce = this.state.products.filter(product => product.category === this.state.category)
      let arr = theSauce
      for (let i = 0; i < arr.length; i++) {
        sauceArray.push(arr[i])
        if ((i+1)%4 === 0) {
          theSauces.push(sauceArray)
          sauceArray = []
        }else if (i === arr.length-1){
          theSauces.push(sauceArray)
        }
      }
    }
    console.log(theSauces);
    return theSauces.map((array, id) => {
      return (
        <div className="row" key="id">
          {array.map((card) => {
            return (
            <div className="card">
            <Link key={card.id} to='/singleSauceView'
              state= {{
                product: card,
                suppliers: this.state.suppliers
              }}
              activeStyle={{
                color: "black",
              }}>
              <img className="card-img-top" src={card.productPicture} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title  saucesText">{card.productName}</h5>
                <p className="card-title">${card.unitPrice}</p>
              </div>
             </Link>
            </div>
           )
          })}
        </div>
      )
    });
  }
  //// SSSTTTOOOPPPP HHHEERRRRREEEE

  render() {
    return(
    <div className="saucesText">
      <div>
        <button type="button" class="btn cartButton" data-toggle="modal" data-target="#cartModal">
          Cart
        </button>
        <h1 className="my-4 saucesText">Shop</h1>
      </div>
        <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('')}>
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Aioli')}>
              Aioli
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Pesto')}>
              Pesto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Chutney')}>
              Chutney
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Ketchup')}>
              Ketchup
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Mustard')}>
              Mustard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Mayonnaise')}>
              Mayonnaise
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Hot Sauce')}>
              Hot Sauce
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>this.filterCategories('Others')}>
              Others
            </a>
          </li>
        </ul>

      </div>

  <div className="container-fluid saucesText">
    {this.createProductCards()}
  </div>
</div>



)
}
}

export default Gallary
