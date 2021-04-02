import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
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
          navigate('/details', { replace: true });
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
                <Card>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    {message}
                  </Alert>
                </Snackbar>
                <CardHeader
                  subheader="Check your E-Mail"
                  title="Verify your account"
                />
                <Divider />
                <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <TextField
                    fullWidth
                    label="Code"
                    name="code"
                    onBlur={handleBlur}
                    onChange={event => handleCode(event)}
                    variant="outlined"
                  />
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
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default VerifyAccountView
