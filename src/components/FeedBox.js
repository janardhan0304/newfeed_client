import {Box} from '@mui/material'
import { useEffect,useState } from 'react'

import { getNews } from '../apis/getNews';
import Article from './Article.js';
function FeedBox() {
  const [data,setData]=useState([])
  useEffect(()=>{
    dailyNews()
  },[]);

  let  dailyNews = async ()=> {
      let response=await getNews();
      setData(response.data);
  }

  return (
    <Box width='70%' margin=' 3rem auto 0 auto' >
        {
          data.map(d =>
             <Article data={d}/>
          )
        }
    </Box> 
  )
}

export default FeedBox