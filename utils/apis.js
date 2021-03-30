import axios from 'axios';

//headers
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

//api calls
export const getLimit = () => axios.get('https://api.github.com/rate_limit', { headers });
