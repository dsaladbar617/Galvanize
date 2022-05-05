import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data =>  data.filter((item) => item.userId === 2)
    )
  .then(userPosts => userPosts.map((item) => ({...item, title: 'Archived'})))
  .then(updatedPosts => fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify(updatedPosts),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }))
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));