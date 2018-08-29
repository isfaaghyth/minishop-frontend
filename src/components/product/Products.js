import React from 'react';

import { ProductWrapper } from './ProductWrapper';

export class Products extends React.Component {
  constructor(props){
    super(props);
    
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