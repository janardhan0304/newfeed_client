import React from 'react'


import {Box,Card, CardContent,Grid,Typography,styled} from '@mui/material'
function Article({data}) {

   let StyledImage=styled('img')({
        height:268,
        width:'88%',
        objectFit:'cover',
        borderRadius:10
   }) ;

   let Component=styled(Card)`
        margin-bottom:20px;
        box-shadow: 0 2px 5px 0 rgb(0,0,0), 0 2px 10px 0 rgb(0,0,0)
   `

   let Container=styled(CardContent)`
        padding:8px;
        padding-bottom :  4px !important; 
   `

   let Text=styled(Typography)`
    font-weight:300;
    font-size:22;
    color:#000000;
    line-height:27px;
   `
    let RightContainer=styled(Grid)`
    margin:5px 0 0 -25px;
    display:flex;
    flex-direction:column;
    `

    let Author =styled(Typography)`
    color:#808290;
    font:size:12px;
    line-height:22px;
    `

    let Description=styled(Typography)`
       line-height:22px;
       color : #44444d;
       margin-top :5px;
       font-weight:300; 
    `

    let Publisher=styled(Typography)`
        font-size:12px;
        margin-top:auto;
        margin-bottom:10px;
    `
  return (
    <Box> 
        <Component>
            <Container>
                <Grid container>
                    <Grid xs={12} lg={5} s={5}>
                        <StyledImage src={data.url} alt='img'/>
                    </Grid>
                    <RightContainer xs={12} lg={7} s={7}>
                        <Text variant='h5'>
                            {data.title}
                        </Text >
                        <Author>
                            <b>Feed</b> by  {data.author} / {new Date(data.timestamp).toDateString()}
                        </Author>
                        <Description variant='h8' marginTop={100}>
                            {data.description}
                        </Description>
                        <Publisher>
                            read more @ <a href={data.link} target="_blank">{data.publisher}</a>
                        </Publisher>
                    </RightContainer>
                </Grid>
            </Container>
        </Component>
    </Box>
  )
}

export default Article