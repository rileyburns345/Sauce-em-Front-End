import React from 'react'
import Menu from '../components/menu'
import Card from'../components/Card'

const SingleSauceView = (props) => {
  console.log('HERE I AM', props.location.state);
  // console.log(this.props.location.state);
  return (
    <div>
      <Menu />
      <Card product={props.location.state.product}
      suppliers={props.location.state.suppliers}/>
    </div>
  )
}

export default SingleSauceView

// class SingleSauceView extends Component {
//
//   componentDidMount() {
//     const product = this.props.location.state.product
//     console.log('hello');
//   }
//
//
//
//   render() {
//   return (
//     <div>
//       <Header />
//       <Menu />
//       <Card />
//
//     </div>
//   )
//  }
// }
//
// export default SingleSauceView
