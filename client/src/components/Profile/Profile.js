import React,{useState} from 'react';
import {connect} from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { useNavigate , Link} from 'react-router-dom';
import {Paper} from '@material-ui/core';


const Profile = ({userData}) => {
    const history=useNavigate();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    console.log(user);
   
  return (
      <Paper align="center" elevation={4} >
          <h1>My profile</h1>
     {/* {!userData?.auth?.authData?.result?.selectedFile  &&
    
} */}
        <Typography variant="h4">Name: {user.result.name}</Typography>
        <Typography variant="h4">Email Id: {user.result.email}</Typography>
        <Typography variant="h4">Phone No:  {user.result.phone}</Typography>
        <Typography variant="h4">Address: {user.result.address}</Typography>
        <Button component={Link} to="/" variant='contained' color="primary">Back to Home Page!!</Button>

        
      </Paper>
  );
};

const mapStateToProps = (state) => {
    return{
    userData : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
