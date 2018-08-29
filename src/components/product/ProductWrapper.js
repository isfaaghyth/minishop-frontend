import React from 'react';

import { ProductItem } from './ProductItem';

export class ProductWrapper extends React.Component {
  addToCart(){
    alert("Terclique");
  }

  render(){
    return (
      <div className="col-md-3">
        <ProductItem
          name="Penggaris 30 cm"
          price="3000"
          desc="Harga murah meriah"
          imageUrl="http://4.bp.blogspot.com/-yRjI_xFdvIY/UasXJkfRe1I/AAAAAAAAACw/cCVY2xbbil8/s1600/718344_mistar.jpg"
        />
        <div className="text-center">
          <button className="btn btn-warning" onClick={this.addToCart}>Add to Cart</button>
        </div>
      </div>
    );
  }
}
