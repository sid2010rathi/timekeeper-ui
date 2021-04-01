import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from '../../componenets/Page';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { validateEmail, validatePassword, validateString, validateWebsite, matchPassword } from '../../utility/validation'
import { register } from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [organizationName, setOrganizationName] = useState();
  const [organizationWebsite, setOrganizationWebsite] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleOrganizationName = (event) => {
    if(!validateString(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Name")
    } else {
      setOpen(false);
      setOrganizationName(event.target.value)
    }
  }

  const handleOrganizationWebsite = (event) => {
    if(!validateWebsite(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Website URL")
    } else {
      setOpen(false);
      setOrganizationWebsite(event.target.value)
    }
  }

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

  const handleConfirmPassword = (event) => {
    if(!validatePassword(event.target.value) && !matchPassword(password, event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Password")
    } else {
      setOpen(false);
      setConfirmPassword(event.target.value)
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    let data = {
      organizationName,
      organizationWebsite,
      email,
      confirmPassword
    };

    const result = Object.values(data).filter((element) => element === undefined)
    if(result.length > 0) {
      setOpen(true);
      setMessage("Please Verify all details")
    } else {
      setOpen(false);
      register(data).then((response)=>{
        if(response.status === "ok") {
          localStorage.setItem("username", response.data.username);
          navigate('/verify', { replace: true });
        } else {
          setOpen(true);
          setMessage("Please Try Again!!")
        }
      });
    }
  }

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
          <Formik
            initialValues={{
              email: '',
              organizationName: '',
              organizationWebsite: '',
              password: '',
              confirmPassword: '',
              policy: false
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form noValidate onSubmit={onSubmitForm} autoComplete="off">
                <Box mb={-2}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Register Your Organization
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.organizationName && errors.organizationName)}
                  fullWidth
                  helperText={touched.organizationName && errors.organizationName}
                  label="Organization name"
                  margin="normal"
                  name="organizationName"
                  onBlur={handleBlur}
                  onChange={event => handleOrganizationName(event)}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.organizationWebsite && errors.organizationWebsite)}
                  fullWidth
                  helperText={touched.organizationWebsite && errors.organizationWebsite}
                  label="Organization website"
                  margin="normal"
                  name="organizationWebsite"
                  onBlur={handleBlur}
                  onChange={event => handleOrganizationWebsite(event)}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={event => handleEmail(event)}
                  type="email"
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={event => handlePassword(event)}
                  type="password"
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  fullWidth
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  label="Confirm Password"
                  margin="normal"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={event => handleConfirmPassword(event)}
                  type="password"
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
