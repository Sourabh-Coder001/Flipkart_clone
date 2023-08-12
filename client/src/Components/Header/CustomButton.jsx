import { Badge, Box,Button, Typography,styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { useState,useContext } from 'react';
import { DataContext } from '../../Context/Dataprovider';
import { Link } from 'react-router-dom';
import React from 'react'
import Profile from './Profile';
import { useSelector } from 'react-redux';
const Container=styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
const LoginButton=styled(Button)`
    color:'#2874f0';
    background:orange;
    text-transform:None;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:None;
    font-weight:bold;
    font-color:blue;
    height:32px;
`;
const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    margin:'0 3% 0 auto',
    '& >* ':{
        marginRight:'40px !important',
        fontSize:'16px',
        alignItem:'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
const CustomButton = () => {
    const[open,setOpen]=useState(false);
    const{account,setAccount}=useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart);
    console.log(account);
    const openDialog=()=>{
        setOpen(true);
    }
  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount}/>: 
        <LoginButton variant='container' onClick={()=>openDialog()}>Login</LoginButton>
        }
        <Typography style={{marginTop:'3px',width:135}}>Become a seller</Typography>
        <Typography>More</Typography>
        <Container to="/cart">
            <Badge badgeContent={cartItems.length} color='secondary'>
            <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButton