import axios from 'axios';
import { APP_ID, BASE_URL, APP_KEY } from './constant.js';

export const getRecipies = (dishName) => {
  return axios.get(
    `${BASE_URL}search?q=${dishName}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
};
