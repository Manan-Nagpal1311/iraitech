import React,{useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {signup} from '../../redux/actions/auth';
import {signin} from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
// import {useLocation} from "react-router-dom";

import Input from './Input';
import { connect } from 'react-redux';



const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '',address:'',phone:'' };
const Auth = ({userData,signup,signin}) => {

    const history=useNavigate();
    console.log(userData);
   
    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [isSignup,setIsSignup]=useState(false);
    const [formData,setFormData]=useState(initialState);
    const handleSubmit=(e)=>{
      e.preventDefault();
      
      if(isSignup)
      {
        // console.log(formData);
        signup(formData,history);
      }
      else
      {
        console.log(formData);
        signin(formData,history);
      }
    };
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
    };
    const switchMode=()=>{
        setIsSignup((prevIsSignup)=> !prevIsSignup);
        handleShowPassword(false);
        setShowPassword(false);
    };
    const handleShowPassword=()=> setShowPassword((prevShowPassword)=> !prevShowPassword);
  
  return (
    <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          { isSignup && (
          <>
            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
          </>
          )}
          <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
         
          { isSignup && <><Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
            <Input name="phone" label="phone" handleChange={handleChange} type="tel" />
            <Input name="address" label="address" handleChange={handleChange} type="text" />
            </>
          }
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          { isSignup ? 'Sign Up' : 'Sign In' }
        </Button>
       
        <Grid container justify="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </Container>

    );
};

const mapStateToProps = (state) => {
    return{
    userData : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signup : (formData,history)=>dispatch(signup(formData,history)),
        signin : (formData,history)=>dispatch(signin(formData,history))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
