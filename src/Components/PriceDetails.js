import React, { Component } from 'react';

class PriceDetails extends Component{
  render(){
    return(
      <div className="pricedetail-section">
        <PriceDetailsHeader />
        <PriceDetailsBody priceTotal={this.props.priceTotal}/>
        <PriceDetailsFooter priceTotalWithTax={this.props.priceTotal*1.121}/>
      </div>
    )
  }
}

class PriceDetailsHeader extends Component{
  render(){
    return(
      <div className="pricedetailheader">
        PRICE DETAILS
      </div>
    )
  }
}
class PriceDetailsBody extends Component{
  render(){
    console.log(this.props);
    return (
      <div className="pricebody">
        <div className="price-detail-tag">
          Price Total : <i className="fa fa-rupee"></i> <span id="total-price">{this.props.priceTotal}</span>
        </div>
        <div className="price-detail-tag">
          Discount : <i className="fa fa-rupee"></i>  <span id="discount">{this.props.priceTotal*0.05}</span>
        </div>
        <div className="price-detail-tag">
          GST : <i className="fa fa-rupee"></i>  <span id="gst">{this.props.priceTotal*0.95*0.18}</span>
        </div>
      </div>
    )
  }
}
class PriceDetailsFooter extends Component{
  render(){
    return (
      <div className="totalprice">
        <p className="totalpricep">Total Payable Price : <i className="fa fa-rupee"></i>  <span id="payable-price">
          {this.props.priceTotalWithTax}</span> </p>
      </div>
    )
  }
}

export default PriceDetails;