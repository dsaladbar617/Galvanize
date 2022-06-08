import React, { useState, useEffect } from 'react';

const Cat = ({ url }) => {
  const [cat, setCat] = useState({url: ''})
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCat(data))
  }, [url])
  return (
    <img src={cat.url} alt={cat.id}/>
  )
}

export default Cat;