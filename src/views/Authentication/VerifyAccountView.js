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
import { validateNumber } from '../../utility/validation'
import { verifyCode } from '../../services/api';

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

const VerifyAccountView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [code, setCode] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleCode = (event) => {
    if(!validateNumber(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Code")
    } else {
      setOpen(false);
      setCode(event.target.value)
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    const username = localStorage.getItem("username");
    let data = {}
    if(username) {
        data = {
            username,
            code
        };
    }

    const result = Object.values(data).filter((element) => element === undefined)
    if(result.length > 0) {
      setOpen(true);
      setMessage("Please Verify all details")
    } else {
      setOpen(false);
      verifyCode(data).then((response)=>{
        if(response.status === "ok") {
          navigate('/app/dashboard', { replace: true });
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
      title="Verify Account"
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
              code: ''
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
                    Verify your Account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.organizationName && errors.organizationName)}
                  fullWidth
                  helperText={touched.organizationName && errors.organizationName}
                  label="Code"
                  margin="normal"
                  name="code"
                  onBlur={handleBlur}
                  onChange={event => handleCode(event)}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Verify
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

export default VerifyAccountView
