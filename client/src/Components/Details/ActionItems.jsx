import { Box,Button,styled } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../Redux/actions/cartAction';
import { payUsingPaytm } from '../../Service/api';
import { post } from '../../utils/paytm';
const LeftContainer=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
      padding:'20px 40px'
    }
  }))
const StyleButton=styled(Button)(({theme})=>({
width:'48%',
height:'50px',
borderRadius:'2px',
[theme.breakpoints.down('lg')]:{
  width:'100%'

},
[theme.breakpoints.down('sm')]:{
  width:'100%',
  marginTop:'10px'
}
}))
const Image=styled('img')({
  padding:'10px',
  height:'250px'

})
const ActionItems = ({product}) => {

const navigate = useNavigate();
const dispatch=useDispatch();
const [quantity,setQuantity]=useState(1);
const {id}=product;

const addItemToCart=()=>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }

  const buyNow=()=>{
    let response=payUsingPaytm({amount:500,email:'sourabhcoder@gamil.com'});
    let information={
    action:'https://securegw-stage.paytm.in/order/process',
    params:response
  }
  post(information);
  }
  return (
    <LeftContainer>
      <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',width:'90%'}}>
        <Image src={product.detailUrl} alt='product Images'/>
        </Box>
        <StyleButton variant='contained' onClick={()=>addItemToCart()} style={{marginRight:10,background:'#ff9f00'}}><AddShoppingCartIcon/>Add to Cart</StyleButton>
        <StyleButton variant='contained' onClick={()=>buyNow()} style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</StyleButton>
    </LeftContainer>

  )
}

export default ActionItems;