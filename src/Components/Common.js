import React, { Component } from 'react';

class Arrows extends Component{
  render(){
    return (<i className={`fa ${this.props.icon}`} id='arrow-updown' ></i>);
  }
}
class Button extends Component{
  render(){
    return(
      <button className={this.props.className}> {this.props.name} {this.props.icon}</button>
    )
  }
}
export {Arrows,Button};