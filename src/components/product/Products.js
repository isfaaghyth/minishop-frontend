import React from 'react';
import axios from 'axios';

import { ProductWrapper } from './ProductWrapper';

export class Products extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://35.240.133.163')
      .then(response => console.log(response));
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