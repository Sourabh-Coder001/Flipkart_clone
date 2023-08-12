import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Box, Table, TableBody, TableCell, TableRow, Typography,styled } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { getProducts } from '../../Redux/actions/productActions';
const date=new Date(new Date().getTime()+(5*24*60*60*1000));
const SmallText=styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
    font-size:14px;
    margin-top:10px;
}
`;
const StyleBadge=styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00CC00;
    font-size:15px;
`;
const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;



const ProductDetails = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const {products}=useSelector(state=>state.getProducts);
  
    console.log(products);
  
    const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
    <Typography>{product.title.longTitle}</Typography>
              <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
                8 Rating & 1 Review
                <Box component="span"><img src={fassured} alt="" style={{marginLeft:20,width:77}} />
                </Box>
                </Typography>
                <Typography>
                  <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                  <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                  <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
                </Typography>
                <Typography>Available Offers</Typography>
                <SmallText>
                    <Typography><StyleBadge/> Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C</Typography>
                    <Typography><StyleBadge/>Bank Offer10% Instant Discount on HDFC Bank Credit Cards, up to ₹1,000 on orders of ₹5,000 and aboveT&C</Typography>
                    <Typography><StyleBadge/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</Typography>
                    <Typography><StyleBadge/>Special PriceGet extra 27% off (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography><StyleBadge/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</Typography>
                    <Typography><StyleBadge/>Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of ₹50,000 and aboveT&C</Typography>
                </SmallText>
                <Table>
                    <TableBody>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Delivery:</TableCell>
                            <TableCell style={{fontWeight:600}}>Delivery Date: {date.toDateString()} |₹ 40</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Warrenty:</TableCell>
                            <TableCell style={{fontWeight:500,color:'#287F40'}}>2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Seller:</TableCell>
                            <TableCell >
                            <Box component="span" style={{color:'#0096FF'}}>Super ComNet </Box>
                            <Typography>14 Days Policy</Typography>
                            <Typography>GST Invoice Avaliable</Typography>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell colSpan={2}>
                                <img src={adURL} alt="ads" width={390} />
                            </TableCell>
                        </ColumnText>
                            <ColumnText>
                            <TableCell style={{color:'#878787'}}>Description:</TableCell>
                            <TableCell style={{fontWeight:500}}>{product.description}</TableCell>
                        </ColumnText>
                    </TableBody>
                </Table>
                
    </>
                
                            

  )
}

export default ProductDetails