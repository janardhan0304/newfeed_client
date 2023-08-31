import axios from 'axios';

export const getNews=async()=>{
    const URL='';
    try {
        // return axios.get(URL)
        return {
            'name':"janardhan",
            'age':20
        };
    } catch (error) {
        console.log("Error from get news : ",error);
    }
}