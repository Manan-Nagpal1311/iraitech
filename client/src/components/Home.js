import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Paper} from '@material-ui/core';

const Home = () => {
  const user=JSON.parse(localStorage.getItem('profile'));

  return <>
   {user && 
  <Paper align="center">
   <h2>Welcome!</h2>
   <Button component={Link} to="/myself" variant='contained' color="primary">My Profile</Button>
   </Paper>
}

{!user &&
  <Paper align="center">
  <h2>Welcome!</h2>
  <Button component={Link} to="/auth" variant='contained' color="primary">Please Signin To continue</Button>
  </Paper>
}
  </>;
};

export default Home;
