import React from 'react';
import Product from './Product';

const Products = ( {products} ) => (
  <ul>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </ul>
)

export default Products;