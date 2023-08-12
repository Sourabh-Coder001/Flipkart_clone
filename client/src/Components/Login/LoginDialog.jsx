/* eslint-disable no-unused-vars */
import React from "react";
import { useState,useContext } from "react";
import { authenticateLogin,authenticateSignup } from "../../Service/api";
import { DataContext } from "../../Context/Dataprovider";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #fff url(https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg)no-repeat center 90% ;
  height: 100%;
  width: 40%;
  padding:0px 0px
`;
const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div, & > button,& >p {
        margin-top:20px;
    }

`;

const LoginButton=styled(Button)`
    text-transform:none;
    background:#800080;
    font-family: 'Times New Roman', serif;
    color:#000;
    height:48px;
    text-weight:600;
    border-radius:2px;
`;
const RequestOTP=styled(Button)`
    text-transform:none;
    background:#fff;
    color:#15d6ff;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 80%);
`;
const Text1=styled(Typography)`
    font-size:14px;
    color:#878787;
`;

const Account=styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;

`;

const accountInitialvalues={
  login:{
    view:'login',
    heading:'Login'
  },
  Signup:{
    view:'singup',
    heading:"Signup",
    
  }
}
const signupInitialValues={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  phone:'',
  password:''
}
const Error=styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:none;
  margin-top:10px;
  font-weight:600;

`;
const loginInitialValues={
  username:'',
  password:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account,toggelaccount]=useState(accountInitialvalues.login);
  const[signup,setSignup]=useState(signupInitialValues);
  const[login,setlogin]=useState(loginInitialValues);
  const[error,setError]=useState(false);
  const {setAccount}=useContext(DataContext);
  const handelClose = () => {
    setOpen(false);
    toggelaccount(accountInitialvalues.login);
    setError(false);
  };
  const toggelsignup=()=>{
    toggelaccount(accountInitialvalues.Signup);
    }
    const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
       
    };
    const SignupUSer = async () => {
      try {
        
        let response = await authenticateLogin(signup);
        if (!response)return;
        handelClose();
        setAccount(signup.firstname);
      } catch (error) {
      
        console.error("Error occurred:", error);
        
      }
    };
    const onValueChange=(e)=>{
setlogin({...login,[e.target.name]:e.target.value})
    }
    const loginUser = async () => {
      try {
        
        let response = await authenticateSignup(login);
        console.log(response);
        if(response.status===200){
          handelClose();
          setAccount(response.data.data.firstname)
        }else{
          setError(true);
        }


      } catch (error) {
      
        console.error("Error occurred:", error);
        
      }
    };
  return (
    <Dialog open={open} onClose={handelClose} PaperProps={{sx:{maxWidth:'unset'}}}>
      <Component>
        <Box style={{display:"flex",height:'100%'}}>
          <Image>
          <Typography variant="h3" style={{marginTop:'30px',marginLeft:'50px'}}>{account.heading}</Typography>
          </Image>
          { account.view==='login' ?
          <Wrapper>
            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="username" label="Enter Username" />
            {error && <Error>Please enter valid username or passowrd</Error>}
            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />
            <Text1>
              By Continuing,you agree to Shopy's Terms and Conditions
            </Text1>
            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
            <Typography style={{textAlign:"center",fontSize:"14px"}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <Account onClick={()=>toggelsignup()}>New to Flipkart? Create an account</Account>
          </Wrapper>
          :
          <Wrapper>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="Enter FirstName" />
          <TextField variant="standard"onChange={(e)=>onInputChange(e)} name="lastname" label="Enter LastName" />
          <TextField variant="standard"onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
          <TextField variant="standard"onChange={(e)=>onInputChange(e)} name="email"label="Enter Email" />
          <TextField variant="standard"onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone" />
          <TextField variant="standard"onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
          <LoginButton onClick={()=>SignupUSer()}>SignUp</LoginButton>
        </Wrapper>
}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
