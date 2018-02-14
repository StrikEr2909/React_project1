import React, { Component } from 'react';

class Filterbar extends Component{
  render(){
    const selectedCategory=[];
    this.props.selectedCategory.forEach((element)=>{
      selectedCategory.push(
        <li className="filter-li" key={element}>
          <span className="filter-name">{element}</span>
          <button className="remove-filter"> X </button>
        </li>
      )
    })
    return(
      <div className="filterbar" onClick={this.props.removeCategory}>
        <ul className="filter-ul">
          {selectedCategory}
        </ul>
      </div>
    )
  }
}

export default Filterbar;