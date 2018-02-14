import React, { Component , Fragment} from 'react';
class CartItems extends Component{
  removeHandler=(event,index)=>{
    this.props.removeItem(index);
  }
  render(){
    const cartItemList=this.props.cartItemList;
    const itemElementList=[];
    let itemDetailsObject={};
    let itemElement=null;
    for(let key in cartItemList){
      if(cartItemList.hasOwnProperty(key)){
        itemDetailsObject=JSON.parse(cartItemList[key]);
        itemElement=(<li key={itemDetailsObject.productId} className="cartitem" id={itemDetailsObject.productId}>
            <ItemDetails itemDetails={itemDetailsObject}/>
            <ItemQuantity index={key} removeHandler={this.removeHandler} handleItemChange={this.props.handleItemChange} quantity={itemDetailsObject.quantity}/>
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
  constructor(props){
    super(props);
    let increaseClass='disabled',decreaseClass='disabled'
    if(props.quantity<10){
      increaseClass='increase';
    }
    if(props.quantity>0){
      decreaseClass='decrease';
    }
    this.state={
      increaseClass: increaseClass,
      decreaseClass: decreaseClass
    }
}
  removeHandler=(event)=>{
    this.props.removeHandler(event,this.props.index);
}
  increaseHandler=(event)=> {
    this.setState({
      decreaseClass:'decrease'
    })
    const currentQuantity=Number(event.target.previousElementSibling.innerHTML);
    if(currentQuantity>=10){
      return;
    }
    const selectedProductId=event.target.closest('.cartitem').id;
    this.props.handleItemChange(selectedProductId,currentQuantity+1);
    if(currentQuantity>=9){
      this.setState({
        increaseClass:'disabled'
      });
    }
  }
  decreaseHandler=(event)=>{
    this.setState({
      increaseClass:'increase'
    })
    const currentQuantity=Number(event.target.nextElementSibling.innerHTML);
    if(currentQuantity<=0){
      return;
    }
    const selectedProductId=event.target.closest('.cartitem').id;
    this.props.handleItemChange(selectedProductId,currentQuantity-1);
    if(currentQuantity<=1){
      this.setState({
        decreaseClass:'disabled'
      });
    }
  }
  render(){
    return(
      <div className="quantity">
        <p className="quantityname">Quantity:</p>
        <button className={this.state.decreaseClass} onClick={this.decreaseHandler}>
          -
        </button>
        <div className="itemquantity">
          {this.props.quantity}
        </div>
        <button className={this.state.increaseClass} onClick={this.increaseHandler}>
          +
        </button>
        <button onClick={this.removeHandler} className="remove">
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