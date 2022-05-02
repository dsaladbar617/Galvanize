import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data =>  data.filter((item) => item.userId === 2)
    )
  .then(userPosts => console.log(userPosts.map((item) => ({...item, title: 'Archived'}))))