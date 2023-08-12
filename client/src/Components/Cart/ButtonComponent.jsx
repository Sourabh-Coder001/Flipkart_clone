
import { ButtonGroup, Button,styled } from '@mui/material'
import React from 'react'


const Component=styled(ButtonGroup)`
margin-top:30px;
`;
const StyleButton=styled(Button)`
    border-radius:50%;
`;
const ButtonComponent = () => {
  return (
    <Component>
        <StyleButton>-</StyleButton>
        <Button disabled>1</Button>
        <StyleButton>+</StyleButton>
    </Component>
  )
}

export default ButtonComponent;