import React from 'react';

export const ProductItem = (props) => (
  <div>
    <img src={props.imageUrl} />
    <h4>{props.name}</h4>
    <small>{`Rp ${props.price}`}</small>
    <p>{props.desc}</p>
  </div>
);