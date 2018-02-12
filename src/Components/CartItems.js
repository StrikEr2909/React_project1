import React, { Component , Fragment} from 'react';
class CartItems extends Component{
  handleItemChange=(event)=>{
    if(event.target.className==='increase'){
      const currentQuantity=Number(event.target.previousElementSibling.innerHTML);
      event.target.previousElementSibling.previousElementSibling.className='decrease';
      if(currentQuantity>=10){
        return;
      }
      const selectedProductId=event.target.closest('.cartitem').id;
      this.props.handleItemChange(selectedProductId,currentQuantity+1);
      if(currentQuantity>=9){
        event.target.className='disabled';
      }
    }
    else if(event.target.className==='decrease'){
      const currentQuantity=Number(event.target.nextElementSibling.innerHTML);
      event.target.nextElementSibling.nextElementSibling.className='increase';
      if(currentQuantity<=0){
        return;
      }
      const selectedProductId=event.target.closest('.cartitem').id;
      this.props.handleItemChange(selectedProductId,currentQuantity-1);
      if(currentQuantity<=1){
        event.target.className='disabled';
      }
    }
    else if(event.target.className==='remove' || event.target.id==='delete-icon'){
      const itemTobeRemoved=event.target.closest('.cartitem');
      const productId=itemTobeRemoved.id;
      this.props.removeItem(productId);
      }
    else{
      return;
    }
}
  render(){
    const cartItemList=this.props.cartItemList;
    let itemElementList=[];
    let itemDetailsObject={};
    let itemElement=null;
    for(let key in cartItemList){
      if(cartItemList.hasOwnProperty(key)){
        itemDetailsObject=JSON.parse(cartItemList[key]);
        itemElement=(<li key={itemDetailsObject.productId} className="cartitem" id={itemDetailsObject.productId}>
            <ItemDetails itemDetails={itemDetailsObject}/>
            <ItemQuantity quantity={itemDetailsObject.quantity}/>
            <DeliveryDetails />
        </li>)
        itemElementList.push(itemElement);
      }
    }
    return(
      <ul className="cartitems" onClick={this.handleItemChange}>
        {itemElementList}
      </ul>
    )
  }
}
class ItemDetails extends Component{
    render(){
      return(
        <Fragment>
          <img src={this.props.itemDetails.imgSrc} className="itempicture" width="150px" height="100px"/>
          <span className="productname">{this.props.itemDetails.productName}</span>
          <span className="brandname">{this.props.itemDetails.brandName}</span>
          <span className="review">Seller Info</span>
          <span className="pricetagcart">Price : {this.props.itemDetails.price} <i className="fa fa-rupee"></i> </span>
        </Fragment>
      )
    }
}
class ItemQuantity extends Component{
  render(){
    let increaseClass='disabled',decreaseClass='disabled';
    if(this.props.quantity<10){
      increaseClass='increase';
    }
    if(this.props.quantity>0){
      decreaseClass='decrease';
    }
    return(
      <div className="quantity">
        <p className="quantityname">Quantity:</p>
        <button className={decreaseClass}>
          -
        </button>
        <div className="itemquantity">
          {this.props.quantity}
        </div>
        <button className={increaseClass}>
          +
        </button>
        <button className="remove">
          <i className="material-icons" id="delete-icon">delete</i>
        </button>
      </div>
    )
  }
}

class DeliveryDetails extends Component{
  render(){
    return(
      <Fragment>
        <form className="pincode">
          <input type="text" placeholder="Enter Your Pincode" className="pincodeinput" name="pincode"/>
        </form>
        <ul className="deliverydetails"> Delivery Details
          <li>Average Delivery Time</li>
          <li>Delivery Charge</li>
        </ul>
      </Fragment>
    )
  }
}
export default CartItems;