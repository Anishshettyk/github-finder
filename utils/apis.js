import axios from 'axios';

//headers
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

//api calls

//get limit for api request
export const getLimit = () => axios.get('https://api.github.com/rate_limit', { headers });

export const getUserData = (userName) => axios.get(`https://api.github.com/users/${userName}`, { headers });
