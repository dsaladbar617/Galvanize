import React, {  useState } from 'react';
import Products from './Products';
import RegionContext from './RegionContext';

const App = () => {

  const products = [
    {
      id: '1',
      name: 'Mechanical Keyboard',
      price: 100.00
    },
    {
      id: '2',
      name: 'Curved Monitor',
      price: 250.00
    }
  ]
  const [region, setRegion] = useState({region:'USA', currency: '$'})
  return  (
    <RegionContext.Provider value= {region}>
      <Products products={products}/>
      Set Region -
      <button onClick={() => {setRegion({region:'USA', currency: '$'})}}>USA</button>
      <button onClick={() => {setRegion({region:'Europe', currency: '€'})}}>Europe</button>
    </RegionContext.Provider>
  )
}
export default App;
