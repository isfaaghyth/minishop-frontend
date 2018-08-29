import React from 'react';

import { ProductItem } from './ProductItem';

export class Products extends React.Component {
  construct(props){
    this.state = {
      data: [
        {

        }
      ]
    }
  }

  // componentDidMount(){} todo

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProductItem
              name="Penggaris 30 cm"
              price="3000"
              desc="Harga murah meriah"
              imageUrl="http://4.bp.blogspot.com/-yRjI_xFdvIY/UasXJkfRe1I/AAAAAAAAACw/cCVY2xbbil8/s1600/718344_mistar.jpg"
            />
          </div>
        </div>
      </div>
    )
  }
}