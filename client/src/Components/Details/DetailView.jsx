import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDeatails } from '../../Redux/actions/productActions';
import { Box,Grid,styled } from '@mui/material';
import ActionItems from './ActionItems';
import ProductDetails from './ProductDetails';

const Component=styled(Box)(({theme})=>({
  background:'#f2f2f2',
  marginTop:'55px',
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}));
const Container=styled(Grid)`
  background:#FFFFFF;
  display:'flex';
`;
const RightContainer=styled(Grid)`
margin-top:50px;
`;
const DetailView = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const {loading,product}=useSelector(state=>state.getProductDeatails);
  useEffect(() => {
    if(product && id !== product.id)   
        dispatch(getProductDeatails(id))
}, [dispatch, product,id ,loading]);
console.log(product);
  return (
    <Component>
      { 
        product && Object.keys(product).length &&
       
        <Container container>
            <Grid item lg={4} md={4} sm={8} xs={8}>
              <ActionItems product={product}/>
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              
                <ProductDetails product={product}/>
            </RightContainer>
          </Container>
      }
    </Component>
  )
}

export default DetailView