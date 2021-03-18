import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getEmployee, employeeUpdate } from '../services/api';

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

const EmployeeUpdate = (props) => {

    const [userFirstname, setFirstname] = useState();
    const [userLastname, setLastname] = useState();
    const [userUsername, setUsername] = useState();
    const [userPassword, setPassword] = useState();
    const [userRole, setRole] = useState();

    const classes = useStyles();
    
    useEffect(() => {
      //get employee data
      getEmployee().then((res) => {
        setFirstname(res.data.firstName)
        setLastname(res.data.lastName)
        setUsername(res.data.username)
        setPassword(res.data.password)
        setRole(res.data.role)
      })
    }, [])

    const onSubmitForm = (event) => {
      event.preventDefault();
      let data = {};
      data.firstName = userFirstname;
      data.lastName = userLastname;
      data.username = userUsername;
      data.password = userPassword;
      data.role = userRole;
      const organizationId = localStorage.getItem('organizationId')
      data.organizationId = organizationId;
      
      console.log(data);
      employeeUpdate(data);
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Employee Details
        </Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userFirstName"
            name="userFirstName"            
            autoFocus
            onChange={event => setFirstname(event.target.value)}
            value={userFirstname || ''}
            placeholder="First Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userLastName"
            id="userLastName"
            onChange={event => setLastname(event.target.value)}
            value={userLastname || ''}
            placeholder="Last Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userUsername"
            id="userUsername"
            onChange={event => setUsername(event.target.value)}
            value={userUsername || ''}
            InputProps={{
              readOnly: true,
            }}
            placeholder="Username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPassword"
            id="userPassword" 
            type="password"           
            onChange={event => setPassword(event.target.value)}
            value={userPassword || ''}
            placeholder="Password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userRole"
            id="userRole"            
            onChange={event => setRole(event.target.value)}
            value={userRole || ''}
            InputProps={{
              readOnly: true,
            }}
            placeholder="Role"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default EmployeeUpdate;