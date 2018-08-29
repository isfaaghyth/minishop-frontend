import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { HomePage } from './components/home/index.js';
import { ProductPage } from './components/product/index.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigasi">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <Link to="/" className="navbar-brand">Minishop</Link>
              </div>
              <div className="collapse navbar-collapse" id="navigasi">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
