import fetch from 'node-fetch'

fetch('https://api.kanye.rest').then(response => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('there was an error')
  }
})
.then(data => console.log(data.quote))
.catch(err => console.error(err));