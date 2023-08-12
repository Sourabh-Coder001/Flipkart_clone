import styled from '@emotion/styled';
import { InputBase,Box, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { getProducts } from '../../Redux/actions/productActions';
import { Link } from 'react-router-dom';
const Serachcontainer=styled(Box)`
    background:#fff;
    width:38%;
    border-radius:3px;
    margin-left:10px;
    display:flex;
    `;
const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;
const SerachWrapper=styled(Box)`
    color:black;
    padding:5px
    display:flex;
`;
const ListWrapper=styled(List)`
position:absolute;
background:#000000;
margin-top:36px;
`;
const Search = () => {
  const[text,setText]=useState();
  const getText=(text)=>{
    setText(text);
  }
  const {products}=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
   
  
  return (
    <Serachcontainer>
    <InputSearchBase
    placeholder='Sirf Shopping ka Search kar'
    onChange={(e)=>getText(e.target.value)}
    />
    
    <SerachWrapper>
        <SearchIcon/>
    </SerachWrapper>
    {
      text &&
      <ListWrapper>
        {
          products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(

          <ListItem>
            <Link
            to={`/product/${product.id}`}
            onClick={()=>setText('')}
            style={{textDecoration:'none',color:"inherit"}}
            >
              {product.title.longTitle}
              </Link>
            </ListItem>
          ))
        }
          
        
      </ListWrapper>
}
    </Serachcontainer>
  )
}

export default Search;