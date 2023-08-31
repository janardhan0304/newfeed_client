import {Box} from '@mui/material'
import { useEffect } from 'react'

import { getNews } from '../apis/getNews';
function FeedBox() {

  useEffect(()=>{
    dailyNews();
  },[]);

  let  dailyNews = async ()=> {
      return await getNews();
  }

  return (
    <Box bgcolor='red' width='70%' margin=' 3rem auto 0 auto'>
        Janardhan test
    </Box> 
  )
}

export default FeedBox