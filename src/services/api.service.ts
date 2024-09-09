import { HttpService } from '../types/Api';
import axios from 'axios';

const config: HttpService = {
  baseUrl: 'https://dummyjson.com',
  headers: {},
  method: 'get',
};

export const get = async (url: string): Promise<any> => {
  return await axios({
    ...config,
    url: `${config.baseUrl}/${url}`
  })
    .then(response => {
      console.log(response.data.products,"response.data.products");
      return {
        status: response.status,
        data: response.data.products,
      };
    })
    .catch(error => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
