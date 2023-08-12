import React from 'react'
import { useState } from 'react';
import Mylogo from '../../logo 2.jpg';
//component
import Search from './Search';
import CustomButton from './CustomButton';
import {Link} from 'react-router-dom';
import{AppBar,Toolbar,styled,Box,Drawer,List,ListItem, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const StyledHeader = styled(AppBar)`
background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
height:55px;

`;
const CustomButtonWrapper=styled(Box)(({theme})=>({
    margin:'0 0% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));
const Component=styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
    color:'inherit';
`;

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    color:'#BBC5D5',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Header = () => {
    
    const [open,setOpen]=useState(false);
const HandelOpen=()=>{
    setOpen(true);
}
const handelClose=()=>{
    setOpen(false);
}
const list=()=>(
    <Box style={{width:200}} onClick={handelClose}>
        <List>
            <ListItem>
                <CustomButton/>
            </ListItem>
        </List>
    </Box>
)
      return (
    <StyledHeader>
        <Toolbar style={{minHeight:50}}>
        <MenuButton onClick={HandelOpen}>
                    <MenuIcon/>
                </MenuButton>
                <Drawer open={open} onClose={handelClose}>
                {list()};

                </Drawer>
            <Component to='/'>
                <img src={Mylogo} alt='' style={{width:50}}/>
                
                
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButton/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header