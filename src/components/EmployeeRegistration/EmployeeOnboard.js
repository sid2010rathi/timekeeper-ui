import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";


import { employeeOnboard } from '../../services/api';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { validateEmail, validatePassword, validateFirstName, validateLastName, validateString } from '../../utility/validation'

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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

    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const handleEmail = (event) => {
      if(!validateEmail(event.target.value)) {
        setOpen(true);
        setMessage("Please Enter Valid Email Address")
      } else {
        setOpen(false);
        setUsername(event.target.value)
      }
    }

    const handlePassword = (event) => {
      if(!validatePassword(event.target.value)) {
        setOpen(true);
        setMessage("Please Enter Valid Password")
      } else {
        setOpen(false);
        setPassword(event.target.value)
      }
    }

    const handleFirstName = (event) => {
      if(!validateFirstName(event.target.value)) {
        setOpen(true);
        setMessage("Please Enter Valid Password")
      } else {
        setOpen(false);
        setFirstname(event.target.value)
      }
    }

    const handleLastName = (event) => {
      if(!validateLastName(event.target.value)) {
        setOpen(true);
        setMessage("Please Enter Valid Password")
      } else {
        setOpen(false);
        setLastname(event.target.value)
      }
    }
    const handleChange = (event) => {
      setRole(event.target.value);
    }
  
    const classes = useStyles();

    const onSubmitForm = (event) => {
      event.preventDefault();
      const organizationId = localStorage.getItem('organizationId')
      let data = {
        firstName : firstName,
        lastName : lastName,
        username : username,
        password : password,
        role : role,
        organizationId : organizationId
      };

      const result = Object.values(data).filter((element) => element === undefined)
      if(result.length > 0) {
        setOpen(true);
        setMessage("Please Verify all details")
      } else {
        setOpen(false);
        employeeOnboard(data);
      }
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5">
            Employee Details
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmitForm} autoComplete="off">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"            
              autoFocus
              onChange={event => handleFirstName(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              
              onChange={event => handleLastName(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              label="User Name"
              id="username"
              
              onChange={event => handleEmail(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type="password"     
              onChange={event => handlePassword(event)}
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