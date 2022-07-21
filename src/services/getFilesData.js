import axios from 'axios';
import { API } from '../constants/index'

async function getFileData(){
  
  const data = await axios(API.Endpoints.files.getFileData(API.baseURL))
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  });

  return data;
}

export default getFileData;