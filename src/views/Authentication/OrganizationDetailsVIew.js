import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@material-ui/core';
import Page from '../../componenets/Page';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  validateString, 
  validateNumber,
  validatePhone,
  validateSize
} from '../../utility/validation'
import { organizationDetail } from '../../services/api';

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

const OrganizationDetailsVIew = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [organizationType, setOrganizationType] = useState();
  const [organizationSize, setOrganizationSize] = useState();
  const [organizationStreet, setOrganizationStreet] = useState();
  const [organizationCity, setOrganizationCity] = useState();
  const [organizationZipcode, setOrganizationZipcode] = useState();
  const [organizationProvince, setOrganizationProvince] = useState();
  const [organizationCountry, setOrganizationCountry] = useState();
  const [organizationPhone, setOrganizationPhone] = useState();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleOrganizationType = (event) => {
    if(!validateString(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Organizatiion Type")
    } else {
      setOpen(false);
      setOrganizationType(event.target.value)
    }
  }

  const handleOrganizationSize = (event) => {
    if(!validateSize(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Size")
    } else {
      setOpen(false);
      setOrganizationSize(event.target.value)
    }
  }

  const handleStreet = (event) => {
    if(!validateString(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Street Name")
    } else {
      setOpen(false);
      setOrganizationStreet(event.target.value)
    }
  }

  const handleCity = (event) => {
    if(!validateString(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid City Name")
    } else {
      setOpen(false);
      setOrganizationCity(event.target.value)
    }
  }

  const handleZipcode = (event) => {
    if(!validateNumber(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Zipcode")
    } else {
      setOpen(false);
      setOrganizationZipcode(event.target.value)
    }
  }

  const handleProvince = (event) => {
    if(!validateString(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Province")
    } else {
      setOpen(false);
      setOrganizationProvince(event.target.value)
    }
  }

  const handleCountry = (event) => {
    if(!validateString(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Country")
    } else {
      setOpen(false);
      setOrganizationCountry(event.target.value)
    }
  }

  const handlePhone = (event) => {
    if(!validatePhone(event.target.value)) {
      setOpen(true);
      setMessage("Please Enter Valid Phone number")
    } else {
      setOpen(false);
      setOrganizationPhone(event.target.value)
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    let data = {
      organizationType,
      organizationSize,
      organizationStreet,
      organizationCity,
      organizationZipcode,
      organizationProvince,
      organizationCountry,
      organizationPhone
    };

    const result = Object.values(data).filter((element) => element === undefined)
    if(result.length > 0) {
      setOpen(true);
      setMessage("Please Verify all details")
    } else {
      setOpen(false);
      organizationDetail(data).then((response)=>{
        if(response.status === "ok") {
          navigate('/login', { replace: true });
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
                <Card>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    {message}
                  </Alert>
                </Snackbar>
                <CardHeader
                  subheader="The information can be edited"
                  title="Organization details"
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Organization Type"
                      name="organizationType"
                      onBlur={handleBlur}
                      onChange={event => handleOrganizationType(event)}
                      variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Organization Size"
                      name="organizationSize"
                      onBlur={handleBlur}
                      onChange={event => handleOrganizationSize(event)}
                      variant="outlined"
                      type="number"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="organizationPhone"
                      onBlur={handleBlur}
                      onChange={event => handlePhone(event)}
                      variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Street"
                      name="organizationStreet"
                      onBlur={handleBlur}
                      onChange={event => handleStreet(event)}
                      variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="City"
                      name="organizationCity"
                      onBlur={handleBlur}
                      onChange={event => handleCity(event)}
                      variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Zipcode"
                      name="organizationZipcode"
                      onBlur={handleBlur}
                      onChange={event => handleZipcode(event)}
                      variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Province"
                      name="organizationProvince"
                      onBlur={handleBlur}
                      onChange={event => handleProvince(event)}
                      variant="outlined"
                    />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="organizationCountry"
                      onBlur={handleBlur}
                      onChange={event => handleCountry(event)}
                      variant="outlined"
                    />
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
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default OrganizationDetailsVIew;
