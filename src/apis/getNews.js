import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:8000', // Change this to your backend server's URL
  });
export const getNews=async()=>{
    try {
        const data= await api.get('/news')
        return data;
    }catch (error) {
        console.log("Error from get news : ",error);
    }
}

