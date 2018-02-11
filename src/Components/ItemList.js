import React, { Component } from 'react';
import {Button} from './Common.js';
class ItemList extends Component{
    render(){
      let itemList=[];
      for(let key in this.props.itemList){
        itemList.push(<Item key={key} itemDetails={this.props.itemList[key]} itemsInCart={this.props.itemsInCart} />)
      }
      return (
        <ul className="items" onClick={this.props.addToCart} >
          {itemList}
        </ul>
      )
    }
}

class Item extends Component{
  render(){
    let itemDetails=this.props['itemDetails'];
    let addicon=null;
    let addToCartName='ADDED TO CART';
    let buyicon=<i className="fa fa-bolt" id="icon-buynow"></i>;
    if(!this.props.itemsInCart.includes(String(itemDetails.productID))){
      addicon=<i className="material-icons" id="icon-cart-google">	add_shopping_cart</i>;
      addToCartName="ADD TO CART";
    }
    return (
      <li className="item" id={itemDetails.productID}>
        <img src={itemDetails.imgSrc} width="200px" height="150px" />
          <a href="mobile.html"><span className="productname">{itemDetails.productName}</span></a>
          <span className="brandname">{itemDetails.brandName}</span>
          <span className="review">Rating X <i className="fa fa-star"></i> </span>
          <ProductDiscription discriptionData={itemDetails.productDiscription} />
          <div className="buttons">
            <Button className='addbutton' name={addToCartName} icon={addicon} />
            <Button className='buybutton' name='BUY NOW' icon={buyicon} />
          </div>
          <span className="pricetag">Price : <i className="fa fa-rupee"></i> {itemDetails.price}</span>
      </li>
    )
  }
}
class ProductDiscription extends Component{
  render(){
    let productDiscription=[];
    for(let key in this.props.discriptionData){
      productDiscription.push(<li key={this.props.discriptionData[key]} >{this.props.discriptionData[key]}</li>)
    }
    return(
      <ul className="discription">
        {productDiscription}
      </ul>
    )
  }
}
export default ItemList;