import React, { Component, Fragment } from 'react';
import Header from './Components/Header.js';
import SubHeader from './Components/SubHeader.js';
import ItemList from './Components/ItemList.js';
// <============model===============>
  let model= {
    items: {
      1: {
        productID: 1,
        category: "Television",
        productName: "Sony Bravia Smart TV",
        brandName: "Sony",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/tv.jpeg",
        price: 70000
      },
      2: {
        productID: 2,
        category: "Mobile",
        productName: "Iphone 6s Silver",
        brandName: "Apple",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/mobile.jpeg",
        price: 24000
      },
      3: {
        productID: 3,
        category: "Router",
        productName: "Tp-Link Archer",
        brandName: "Tp Link",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/router.jpeg",
        price: 4000
      },
      4: {
        productID: 4,
        category: "Watch",
        productName: "Casio Smartwatch",
        brandName: "Casio",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/watch.jpeg",
        price: 30000
      },
      5: {
        productID: 5,
        category: "Speaker",
        productName: "JBL Charge3 Speaker",
        brandName: "JBL",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/speaker.jpeg",
        price: 44000
      },
      6: {
        productID: 6,
        category: "Computer-Laptop",
        productName: "The Legion Y520",
        brandName: "Lenovo",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/computer.jpeg",
        price: 94000
      },
      7: {
        productID: 7,
        category: "TopWear",
        productName: "Adidas blue t-shirt",
        brandName: "Adidas",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/topwear.jpeg",
        price: 3000
      },
      8: {
        productID: 8,
        category: "BottomWear",
        productName: "Spykar blue jeans",
        brandName: "Spykar",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/bottomwear.jpeg",
        price: 5000
      },
      9: {
        productID: 9,
        category: "FootWear",
        productName: "LALO Tactical",
        brandName: "LALO",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/footwear.jpeg",
        price: 10000
      },
      10: {
        productID: 10,
        category: "Men'sGrooming",
        productName: "Axe Provoke",
        brandName: "AXE",
        productDiscription: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
        imgSrc: "images/grooming.jpeg",
        price: 300
      }
    },
    allCategory:["Television","Men'sGrooming","FootWear","BottomWear","TopWear","Computer-Laptop","Speaker","Watch","Router","Mobile"],
    myLocalStorage: window.localStorage,
    itemsInCart:[]
}
// <============model===============>
class App extends Component{
  constructor(props){
    super(props);
    this.itemList=model.items;
    this.state={
      items:this.itemList,
      selectedCategory:[],
      searchBarText:''
    };
    this.allCategory=model.allCategory;
    this.myLocalStorage=model.myLocalStorage;
    this.itemsInCart=model.itemsInCart;
  }
  showFilteredItems=(clickedCategory)=>{
    if(clickedCategory!=null) {
        this.setState((prevState) => {
          if (this.allCategory.includes(clickedCategory) && !prevState.selectedCategory.includes((clickedCategory))) {
          prevState.selectedCategory.push(clickedCategory);
        }
      });
    }
    this.setState((prevState)=>{
          const filtedItems = {};
          for(let key in this.itemList) {
            if (this.itemList.hasOwnProperty(key)) {
              if ( (prevState.selectedCategory.length===0 || prevState.selectedCategory.includes(this.itemList[key].category) ) &&
                 ( (this.itemList[key].productName.toLowerCase()).includes(prevState.searchBarText.toLowerCase() ) ||
                  (this.itemList[key].brandName.toLowerCase()).includes(prevState.searchBarText.toLowerCase()) ) ) {
                console.log((this.itemList[key].productName.toLowerCase()).includes(prevState.searchBarText.toLowerCase() ));
                filtedItems[key] = this.itemList[key];
              }
            }
          }
          return { items: filtedItems };
      });

};
  removeCategory=(event)=>{
    if(event.target.innerHTML.trim()!=='X')
      return ;
    const elementTobeRemoved=event.target.closest('.filter-li');
      if(elementTobeRemoved!=null) {
        const filterNameTobeRemoved = elementTobeRemoved.getElementsByClassName('filter-name')[0].innerHTML;
        this.setState((prevState) => {
          if (prevState.selectedCategory.includes(filterNameTobeRemoved)) {
            const newSelectedCategory = prevState.selectedCategory;
            const indexTobeRemoved = newSelectedCategory.indexOf(filterNameTobeRemoved)
            newSelectedCategory.splice(indexTobeRemoved, 1);
            return { selectedCategory: newSelectedCategory };
          }
        });
      }
      this.showFilteredItems(null);
  };
  addToCart=(productIdTobeAdded)=>{
    if(this.myLocalStorage.getItem(productIdTobeAdded)!==null) {
      return ;
    }
    const itemDetails=this.itemList[productIdTobeAdded];
    const itemTobeAdded={
      productId: itemDetails.productID,
      brandName: itemDetails.brandName,
      productName: itemDetails.productName,
      category: itemDetails.category,
      imgSrc: itemDetails.imgSrc,
      price: itemDetails.price,
      quantity: 1
    }
    this.myLocalStorage.setItem(itemTobeAdded.productId,JSON.stringify(itemTobeAdded));
    this.showFilteredItems(null);
  };
  handleFilterTextChange=(event)=>{
    if(event.target.className!=='search-input'){
      return ;
    }
    const filteredText=event.target.value;
    this.setState({searchBarText:filteredText});
    this.showFilteredItems(null);
  }
    render(){
      for(let key in this.itemList) {
        if (this.itemList.hasOwnProperty(key)) {
          if(this.myLocalStorage.getItem(key)!==null){
            this.itemsInCart.push(key);
          }
        }
      }
      return (
        <Fragment>
          <Header handleFilterTextChange={this.handleFilterTextChange}/>
          <SubHeader showFilteredItems={this.showFilteredItems} selectedCategory={this.state.selectedCategory} removeCategory={this.removeCategory} />
          <ItemList itemList={this.state.items} addToCart={this.addToCart} itemsInCart={this.itemsInCart} />
        </Fragment>);
    }
}


export default App;
