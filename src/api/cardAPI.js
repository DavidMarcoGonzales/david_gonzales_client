import axios from 'axios';

axios.get('https://david-gonzales-1.herokuapp.com/api/books')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });