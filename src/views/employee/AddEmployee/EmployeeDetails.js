import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { employeeOnboard } from '../../../services/api';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validatePhone
} from '../../../utility/validation'

const roles = [
  {
    value: 'Employee',
    label: 'Employee'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EmployeeDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
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
      setEmail(event.target.value)
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
      setMessage("Please Enter Valid First Name")
    } else {
      setOpen(false);
      setFirstname(event.target.value)
    }
  }

  const handleLastName = (event) => {
    if(!validateLastName(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Last Name")
    } else {
      setOpen(false);
      setLastname(event.target.value)
    }
  }

  const handlePhone = (event) => {
    if(!validatePhone(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Phone number")
    } else {
      setOpen(false);
      setPhone(event.target.value)
    }
  }
  const handleChange = (event) => {
    setRole(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    const organizationId = localStorage.getItem('organizationId')
    let data = {
      firstName : firstName,
      lastName : lastName,
      username : email,
      password : password,
      phone: phone,
      role : "Employee",
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
    <form
      noValidate
      onSubmit={onSubmitForm}
      autoComplete="off"
      className={clsx(classes.root, className)}
    >
      <Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
        <CardHeader
          subheader="The information can be edited"
          title="Employee details"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              variant="outlined"
              helperText="Please specify the first name"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"            
              autoFocus
              onBlur={event => handleFirstName(event)}
            />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              variant="outlined"
              helperText="Please specify the last name"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"              
              onBlur={event => handleLastName(event)}
            />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              variant="outlined"
              helperText="Please specify the Email"
              required
              fullWidth
              name="username"
              label="Email"
              id="username"              
              onBlur={event => handleEmail(event)}
            />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              variant="outlined"
              helperText="Please specify the password"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type="password"     
              onBlur={event => handlePassword(event)}
            />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the phone number"
                label="Phone Number"
                name="phone"
                type="number"
                variant="outlined"
                required
                onBlur={event => handlePhone(event)}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="role"
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
                value="Employee"
              >
                {roles.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

EmployeeDetails.propTypes = {
  className: PropTypes.string
};

export default EmployeeDetails;
