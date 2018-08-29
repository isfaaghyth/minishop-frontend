import React from 'react';

import { Header } from './Header';
import { Products } from './Products';

export default class HomePage extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Products />
      </div>
    )
  }
}