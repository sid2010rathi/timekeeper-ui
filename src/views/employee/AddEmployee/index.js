import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../../componenets/Page';
import Profile from './Profile';
import EmployeeDetails from './EmployeeDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddEmployee = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Add employee"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          {/* <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <EmployeeDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AddEmployee;
