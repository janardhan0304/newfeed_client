import {AppBar,Toolbar,styled,Box} from '@mui/material';
import {Feed, Menu} from '@mui/icons-material';
import image from '../images/logo.jpg'

//components
import FeedBox from './FeedBox'




const StyledHeader=styled(AppBar)`
    background: #fff;
    height: 70px;
    elevation : 500;
`;


const StyledMenu=styled(Menu)`
    color:black;
`;

const Styledlogo=styled('img')({
    height:50,
})


function Header() {
  return (
    <Box >
        <StyledHeader position='static'>
            <Toolbar>
                <StyledMenu/>
                <Styledlogo src={image} alt='NewsFeed'/>
            </Toolbar>
        </StyledHeader>
        <FeedBox></FeedBox>
    </Box>
  )
}

export default Header