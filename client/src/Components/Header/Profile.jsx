import { Typography, Box,Menu,MenuItem,styled } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component=styled(Menu)`
    margin-top:5px
`;
const LogOut=styled(Typography)`
font-size:14px;
margin-left:20px;
`;

const Profile = ({ account ,setAccount}) => {

    const[open,setOpen]=useState(false);
    const handelClick=(event)=>{
        setOpen(event.currentTarget);
    };
    const handelClose=()=>{
        setOpen(false);
    }

    const LogOutUser=()=>{
        setAccount('');
    }
  return (
    <>
      <Box onClick={handelClick}>
        <Typography style={{ marginTop: 2,cursor:"pointer" }}>{account}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handelClose}
      >
        <MenuItem onClick={()=>{handelClose();LogOutUser();}}>
            <PowerSettingsNewIcon color="primary" fontSize='small'/>
            <LogOut>Logout</LogOut>
        </MenuItem>
              </Component>
    </>
  );
};

export default Profile;
