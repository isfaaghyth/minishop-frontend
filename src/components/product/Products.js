import React from 'react';

import { ProductWrapper } from './ProductWrapper';

export class Products extends React.Component {
  construct(props){
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    console.log(sessionStorage.getItem('MEME'));
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <ProductWrapper />
          <ProductWrapper />
          <ProductWrapper />
          <ProductWrapper />
          <ProductWrapper />
        </div>
      </div>
    )
  }
}