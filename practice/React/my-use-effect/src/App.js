import Cat from './Cat';
import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('https://thatcopy.pw/catapi/restId/1')

  const randomCat = () => {
    let randomNum = Math.floor(Math.random() * (58 - 1) + 1);
    setUrl(`https://thatcopy.pw/catapi/restId/${randomNum}`)
  }

  return (
    <>
      <Cat url={url} />
      <button onClick={randomCat}>Click for Random Cat</button>
    </>
  );
}

export default App;