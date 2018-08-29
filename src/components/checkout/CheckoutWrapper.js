import React from 'react';

import { Checkout } from './Checkout';
import { CartItem } from './CartItem';

export const CheckoutWrapper = () => (
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
      </div>
      <div className="panel-footer">
        <div className="row text-center">
          <div className="col-xs-9">
            <h4 className="text-right">Total <strong>$50.00</strong></h4>
          </div>
          <div className="col-xs-3">
            <button type="button" className="btn btn-success btn-block">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);