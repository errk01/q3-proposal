import React from 'react';
import { Card, Button, CardTitle } from 'reactstrap';
import PartsItemsList from './PartItemsList';
import {connect} from 'react-redux';


const Cart = (props) => {
  
  let Cartpart = props.part
      .filter(part => part.inCart)

      let totalWithoutTax = Cartpart.reduce((acc, part) => {
          let changeToNum = parseFloat(part.price.replace(/,/g, "").slice(1))
          return acc + changeToNum
      },0)

  
  return(

    <Card body>
      <CardTitle>Cart</CardTitle>
      <CartItemsList cartItem={Cartpart} />
      <p>Subtitle: {totalWithoutTax} </p>
      <p>Tax: {(totalWithoutTax * .086).toFixed(2)}</p>
      <p>Total: {(totalWithoutTax * 1.086).toFixed(2)}</p>
      <Button>Check Out</Button>
    </Card>

)
}
const mapStateToProps = state =>({
  part: state.part.filter(part => part.inCart)
})
export default connect(mapStateToProps)(Cart);