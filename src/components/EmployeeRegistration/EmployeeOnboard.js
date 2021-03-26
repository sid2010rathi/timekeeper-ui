import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";


import { employeeOnboard } from '../../services/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        TimeKeeper
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

    const [userFirstname, setFirstname] = useState();
    const [userLastname, setLastname] = useState();
    const [userUsername, setUsername] = useState();
    const [userPassword, setPassword] = useState();
    const [userRole, setRole] = useState();

  const classes = useStyles();

  const onSubmitForm = (event) => {
    event.preventDefault();
    let data = {};
    data.userFirstname = userFirstname;
    data.userLastname = userLastname;
    data.userUsername = userUsername;
    data.userPassword = userPassword;
    data.userRole = userRole;
    
    console.log(data);
    
    if(Object.keys(data).length > 1) {
      employeeOnboard(data);
    }

    
}

const handleChange = (event) => {
  setRole(event.target.value);
};


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Employee Details
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userFirstName"
            label="First Name"
            name="userFirstName"            
            autoFocus
            onChange={event => setFirstname(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userLastName"
            label="Last Name"
            id="userLastName"
            
            onChange={event => setLastname(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userUsername"
            label="User Name"
            id="userUsername"
            
            onChange={event => setUsername(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            id="userPassword"
            
            onChange={event => setPassword(event.target.value)}
          />
          
          <FormControl variant="outlined" className={classes.form}>
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={userRole}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value={"Employee"}>Employee</MenuItem>
              <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
              
            </Select>
      </FormControl>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Create
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}