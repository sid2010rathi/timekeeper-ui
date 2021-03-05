import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import StickyFooter from '../components/footer/StickyFooter';
import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';
import './App.css';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '250px',
    width: '100%'
  }
})


function App() {

  const classes = useStyles();


  return (
    <Dashboard />
  );
}

export default App;
