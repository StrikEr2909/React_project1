import React, { Component } from 'react';

class Arrows extends Component{
  render(){
    return (<i className={`fa ${this.props.icon}`} id='arrow-updown' ></i>);
  }
}
class Button extends Component{
  addToCart=()=>{
    if(this.props.id!==undefined){
      this.props.addToCart(this.props.id);
    }
  }
  render(){
    return(
      <button className={this.props.className} onClick={this.addToCart}> {this.props.name} {this.props.icon}</button>
    )
  }
}
export {Arrows,Button};