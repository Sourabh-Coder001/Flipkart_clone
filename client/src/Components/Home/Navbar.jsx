import { Box,styled,Typography } from '@mui/material'
import React from 'react'
import  {navData}  from '../Constants/data'

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))
const TextNav=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`;
const Container =styled(Box)`
padding:12px 8px;
text-align:center;
`;
const Navbar = () => {
  return (
    <Box style={{background:'#fff'}}>
    <Component>
    {navData.map(data => (
        <Container key={data.url}>
            <img src={data.url} alt="nav" style={{width:64}} />
            <TextNav>{data.text}</TextNav>
        </Container>
    ))}
</Component>
</Box>

  )
}

export default Navbar