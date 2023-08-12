import {React,useEffect} from 'react'

import { Box,styled } from '@mui/material'
import Navbar from './Navbar'
import Banner from './Banner'
import { Fragment } from 'react'
import { getProducts } from '../../Redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';
import MidSlider from './MidSlider'
import Slider from './Slide'
import Midsection from './Midsection'
import Midsection2 from './Midsection2';
import Footer from '../Footer/Footer'
const Component=styled(Box)`
padding:10px 10px;
background:#f2f2f2;
`;
const Home = () => {
  const {products}=useSelector(state=>state.getProducts);
  
  console.log(products);

  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getProducts());
},[dispatch])

  return (
    <>
    <Navbar/>
    <Component>
    <Banner/>
    <MidSlider products={products} title="Deal of the Day" timer={true}/>
    <Midsection/>
    <Slider products={products} title="Discounts for you" timer={false}/>
    <Slider products={products} title="Suggested Items" timer={false}/>
    <Slider products={products}title="Recommended Items" timer={false}/>
    <Midsection2/>
    <Slider products={products} title="Top Selections" timer={false}/>
    <Slider products={products}title="Recommended Items"timer={false}/>
    <Slider products={products}title="Trending Offers" timer={false}/>
    <Slider products={products}title="Season Top Picks" timer={false}/>
    <Slider products={products}title="Top Accessories" timer={false}/>
    <Footer/>
    </Component>
    </>
  )
}

export default Home