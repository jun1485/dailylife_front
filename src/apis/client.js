import axios from 'axios';

const baseURL = process.env.REACT_APP_HOST;

const client = axios.create({
  baseURL,
});

export default client;
