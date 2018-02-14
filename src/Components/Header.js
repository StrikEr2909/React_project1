import React, { Component } from 'react';
import {Arrows} from './Common.js';
const profileData=[
  {
    name:"My Profile",
    className:"fa-address-card-o"
  },
  {
    name:"Orders",
    className:"fa-clipboard"
  },
  {
    name:"Wishlist",
    className:"fa-heart-o"
  },
  {
    name:"Rewards",
    className:"fa-credit-card"
  },
  {
    name:"Notifications",
    className:"fa-bell-o"
  }

];
class Searchbar extends Component{
  render(){
    return (
      <div className="search-bar">
        <form id="search-bar">
          <input type="text" id="input-box" className='search-input' placeholder="Search for products, brands and more.." name="search"
            onChange={this.props.handleFilterTextChange} />
          <button type="submit" id="submit-button" name="button"> <i id="search-btn"className="fa fa-search"></i> </button>
        </form>
      </div>
    );
  }
}
class ProfileContent extends Component{
  constructor(props){
    super(props);
    this.profileData=profileData;
  }
  render(){
    return (
      <div className="profile-dropdown-content">
        {
          this.profileData.map(function(object, index){
            return <a href="#" key={index}>{object.name} <i className={`fa ${object.className}`} id="icon-w3s" ></i> </a>;
          })}
      </div>
    )
  }
}
class UserProfile extends Component{
  render(){
    return (
      <div className="profile">
        <div className="profile-dropdown">
          <button className="dropdown-btn">Profile
            <Arrows icon='fa-angle-down'/>
            <Arrows icon='fa-angle-up'/>
          </button>
          <ProfileContent/>
        </div>
        <div className="user-icon">
          <img className="user-image " src="images/user.png" alt="user" width="100%" height="100%" />
        </div>
      </div>
    )
  };
}
class Cart extends Component{
  render(){
    return (
      <div className="cart">
        <a href="cart.html">Cart <i className="	fa fa-cart-plus" id='cart-icon'></i></a>
      </div>
    );
  }
}
class  Header extends Component{
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img className="logo-image" src="images/sprinklr.png" alt="logo" />
        </div>
        <div className="name">
          <a href="index.html" id="name" className="company-name">Spr!nklr</a>
        </div>
        <Searchbar handleFilterTextChange={this.props.handleFilterTextChange}/>
        <UserProfile/>
        <Cart/>
      </div>
    );
  }
}

export default Header;