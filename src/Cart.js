import React, { Component } from 'react';
import MyCart from './Components/MyCart.js';
import PriceDetails from './Components/PriceDetails.js';

class Cart extends Component{
  constructor(props){
    super(props);
    this.state={
      itemsInCart:window.localStorage,
      priceTotal: this.calculateTotal()
    }

  }
  calculateTotal=()=>{
    let itemObject=null;
    let totalValue=0;
    const localStorage=window.localStorage;
    for(let key in localStorage){
      if(localStorage.hasOwnProperty(key)){
        itemObject=JSON.parse(localStorage[key]);
        totalValue+=Number(itemObject.price)*Number(itemObject.quantity);
      }
    }
    return totalValue;
  }
  handleItemChange=(productId,newQuantity)=>{
    const localStorage=this.state.itemsInCart;
    let itemObject=JSON.parse(localStorage[productId]);
    itemObject.quantity=newQuantity;
    localStorage[productId]=JSON.stringify(itemObject);
    this.setState({
      priceTotal:this.calculateTotal()
    });
  }
  removeItem=(productId)=>{
    const localStorage=this.state.itemsInCart;
    localStorage.removeItem(productId);
    this.calculateTotal();
    this.setState({
      priceTotal:this.calculateTotal()
    })
  }
  render(){
    return (
      <div className="cart-background">
        <MyCart cartItemList={this.state.itemsInCart} handleItemChange={this.handleItemChange}
          removeItem={this.removeItem}/>
        <PriceDetails priceTotal={this.state.priceTotal}/>
      </div>
    )
  }
}

export default Cart;