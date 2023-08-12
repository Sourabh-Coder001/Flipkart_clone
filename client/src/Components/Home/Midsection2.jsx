import React from 'react';
import { imageURL2 } from '../Constants/data'
import { Button, Grid,styled } from '@mui/material';
import { useNavigate} from 'react-router-dom';
const Wrapper=styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`;
const Image=styled('img')(({theme})=>({
    marginTop:'10px',
    width:'100%',
    height:300,
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:300
    }
}));

const WatchButton=styled(Button)(({theme})=>({
    marginLeft:'650px',
    marginTop:'2rem',
[theme.breakpoints.down('lg')]:{
    display:'none'
}
}))
const Midsection2 = () => {
    
    const navigate = useNavigate();
    const url = 'https://pumaflex.in/wp-content/uploads/2023/06/Screenshot-105.png';
    const watchNow=()=>{
        
        navigate('https://www.amazon.in/minitv/ct/web-series');
      }
    return (
    <>
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
    {
        imageURL2.map(image => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="imag" style={{ width: '100%'}} />
            </Grid>
        ))
    }
</Wrapper>

<Image src={url} alt="covid" />
<WatchButton variant='contained'onClick={()=>watchNow()} >Watch Now</WatchButton>

</>
  )
}

export default Midsection2