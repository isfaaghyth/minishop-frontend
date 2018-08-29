import React from 'react';

import { Checkout } from './Checkout';
import { Name } from './Name';
import { CartItem } from './CartItem';
import { Address } from './Address';
import { PaymentMethod } from './PaymentMethod';

export class CheckoutWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        address: '',
        payment: ''
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
  }

  handleCheckout(){
    console.log(this.state);
  }

  handleName(e){
    this.setState({
      name: e.target.value
    });
    console.log(e.target.value);
  }

  handleAddress(e){
    this.setState({
      address: e.target.value
    });
  }

  handlePayment(e){
    this.setState({
      payment: e.target.value
    });
  }

  render(){
    return (
      <div className="container-fluid text-center">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">
              <div className="row">
                <div className="col-xs-12">
                  <h5><span className="glyphicon glyphicon-shopping-cart"></span> Minishop Cart</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <CartItem />
            <Name handleName={this.handleName} value={this.state.name} />
            <Address handleAddress={this.handleAddress} value={this.state.address} />
            <PaymentMethod handlePayment={this.handlePayment} value={this.state.payment} />
          </div>
          <div className="panel-footer">
            <div className="row text-center">
              <div className="col-xs-9">
                <h4 className="text-right">Total <strong>$50.00</strong></h4>
              </div>
              <div className="col-xs-3">
                <button type="button" className="btn btn-success btn-block" onClick={this.handleCheckout} >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}