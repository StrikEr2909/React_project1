import React, { Component } from 'react';
import {Arrows} from './Common.js';

const categoryData={
  1:{
    name: 'Electronics',
    src : 'images/ele.png',
    className: 'elelogo'
  },
  2:{
    name: 'Men',
    src : 'images/man.png',
    className: 'logoc'
  },
  3:{
    name: 'Women',
    src : 'images/woman.png',
    className: 'logoc'
  },
  4:{
    name: 'Home&Furniture',
    src : 'images/home.png',
    className: 'logoc'
  },
  5:{
    name: 'Sports,Books & More',
    src : 'images/sport.png',
    className: 'logoc'
  }
}; // where to put this data?
const categoryContentData={
  1:{
    1: {
      name: 'Television',
      src: 'images/tv-icon.png',
      className: 'logoc'
    },
    2: {
      name: 'Speaker',
      src: 'images/speaker-icon.png',
      className: 'logoc'
    },
    3: {
      name: 'Router',
      src: 'images/router-icon.png',
      className: 'logoc'
    },
    4: {
      name: 'Computer-Laptop',
      src: 'images/laptop-icon.png',
      className: 'logoc'
    },
    5: {
      name: 'Mobile',
      src: 'images/mobile-icon.png',
      className: 'logoc'
    },
    6: {
      name: 'Watch',
      src: 'images/watch-icon.png',
      className: 'logoc'
    }
  },
  2:{
    1: {
      name: 'TopWear',
      src: 'images/shirt.png',
      className: 'bedlogo'
    },
    2: {
      name: 'BottomWear',
      src: 'images/jeans.png',
      className: 'sareelogo'
    },
    3: {
      name: 'FootWear',
      src: 'images/shoes.png',
      className: 'shoeslogo'
    },
    4: {
      name: 'Men\'sGrooming',
      src: 'images/deo.png',
      className: 'shoeslogo'
    }
  },
  3:{
    1: {
      name: 'WesterWear',
      src: 'images/dress.png',
      className: 'bedlogo'
    },
    2: {
      name: 'EthnicWear',
      src: 'images/saree.png',
      className: 'sareelogo'
    },
    3: {
      name: 'heels',
      src: 'images/heels.png',
      className: 'shoeslogo'
    },
    4: {
      name: 'Beauty&Grooming',
      src: 'images/makeup.png',
      className: 'shoeslogo'
    }
  },
  4:{
    1: {
      name: 'Beds',
      src: 'images/beds.png',
      className: 'bedlogo'
    },
    2: {
      name: 'Sofas',
      src: 'images/sofas.png',
      className: 'logoc'
    },
    3: {
      name: 'Tables',
      src: 'images/table.png',
      className: 'logoc'
    }
  },
  5:{
    1:{
      name: 'Sports',
      src : 'images/Sports.png',
      className: 'logoc'
    },
    2:{
      name: 'Games',
      src : 'images/games.png',
      className: 'logoc'
    },
    3:{
      name: 'Books',
      src : 'images/books.png',
      className: 'logoc'
    }
  }
}; // where to put this data?

class Categorybar extends Component{
  constructor(props){
    super(props);



  }
  filterCategory=(event)=>{
    const clickedCategory=event.target.innerHTML.trim().split(' ')[0];
    this.props.filterCategory(clickedCategory);
  }
  render(){
    const allCategory=[];
    for(let key in categoryData){
      if(categoryData.hasOwnProperty(key)){
        const item=categoryData[key];
        allCategory.push(<Category categoryData={item} key={key} categoryContentData={categoryContentData[key]}/>)
      }
    }

    return (<div className="categorybar" onClick={this.filterCategory}>
      {allCategory}
    </div>)
  }
}
class Category extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const categoryData=this.props.categoryData;
    return(
        <div className="category">
          <button className="categorybar-btn"><img className={categoryData.className}
                      src={categoryData.src} alt="logo" />{categoryData.name}
            <Arrows icon='fa-angle-down'/>
            <Arrows icon='fa-angle-up'/>
          </button>
          <CategoryContent categoryContentData={this.props.categoryContentData}/>
        </div>
    )
  }
}
class CategoryContent extends Component{
  render(){
    const allCategoryContent=[];
    let item=null;
    for(let key in this.props.categoryContentData){
      if(this.props.categoryContentData.hasOwnProperty(key)){
        item=this.props.categoryContentData[key];
        allCategoryContent.push(<button key={key} className="category-btn"> {item.name} <img className={`${item.className}`} src={`${item.src}`} alt="logo"/> </button>)
      }
    }
    return (
      <div className="dropdown-content-cat">
        {allCategoryContent}
      </div>
    )
  }
}
export default Categorybar;