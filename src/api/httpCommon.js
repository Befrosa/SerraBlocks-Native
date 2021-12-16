import axios from 'axios';

export default axios.create({
  baseURL: 'https://ecommerce-residencia.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
