import React, { Component, Fragment } from 'react';
import Categorybar from './Categorybar.js';
import Filterbar from './Filterbar.js';
class SubHeader extends Component{
  render(){
    return (
      <Fragment>
        <Categorybar filterCategory={this.props.showFilteredItems} />
        <Filterbar selectedCategory={this.props.selectedCategory} removeCategory={this.props.removeCategory}/>
      </Fragment>
    );
  }
}
export default SubHeader;