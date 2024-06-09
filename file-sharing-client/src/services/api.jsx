import axios from 'axios';

const API_URL = "http://localhost:8000";

export const uplaodFile = async(data) => {
          try{
                    const response = await axios.post(`${API_URL}/upload`, data);
                    return response.data;
          }
          catch(err){
                    console.log(`Error while calling the API ${err.message}`);
          }
}