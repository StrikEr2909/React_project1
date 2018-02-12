import React, { Component } from 'react';
import CartItems from './CartItems.js';
class MyCart extends Component{
  render(){
    return(
      <div className="cart-section">
        <CartHeader />
        <CartBody cartItemList={this.props.cartItemList} handleItemChange={this.props.handleItemChange}
          removeItem={this.props.removeItem}/>
        <CartFooter />
      </div>
    )
  }
}

class CartHeader extends Component{
  render(){
    return (
      <div className="cartheader">
        <p className="cartname">
          My cart
        </p>
      </div>);
  }
}

class CartBody extends Component{
  render(){
    return (
      <div className="cartbody">
        <CartItems cartItemList={this.props.cartItemList}  handleItemChange={this.props.handleItemChange}
          removeItem={this.props.removeItem}/>
      </div>
    );
  }
}

class CartFooter extends Component{
  render(){
    return (
      <div className="cartfooter">
        <button className="continueshopping"> <i className="fa fa-angle-left" ></i> Continue Shopping</button>
        <button className="placeorder">Place Order <i className="fa fa-bolt" ></i></button>
      </div>
    );
  }
}

export default MyCart;