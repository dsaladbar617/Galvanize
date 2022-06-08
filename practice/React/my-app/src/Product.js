import React, { useContext } from 'react';
import RegionContext from './RegionContext';

const Product = ( {product} ) => {
  const region = useContext(RegionContext);
  return (
    <li>
      {product.name} - {region.currency}{region.region === 'USA' ? product.price : (product.price*0.88).toFixed(2)}
    </li>
  )
}

export default Product;