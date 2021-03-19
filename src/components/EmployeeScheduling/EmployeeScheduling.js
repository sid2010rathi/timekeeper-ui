import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  textField: {
      display: 'flex',
      padding: '5px'
  },
  Grid: {
      margin: '50px'
  }
}));

export default function EmployeeScheduling() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      
      <Typography component="h1" variant="h5">
        Employee Scheduling
      </Typography>

      <FormControl variant="outlined" className={classes.formControl} style={{width: '100px'}}>
        <InputLabel id="demo-simple-select-outlined-label">Employee</InputLabel>
        <Select
        //   labelId="demo-simple-select-outlined-label"
        //   id="demo-simple-select-outlined"
        //   value={age}
        //   onChange={handleChange}
          label="Employee"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <form className={classes.container} noValidate>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
      <Grid container className="input-grid" justify="space-around">
        <TextField
        className="date"
        label="Date"
        type="date"
        defaultValue="2021-03-19"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
      <TextField
        className="start-time"
        label="Start-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        className="End-time"
        label="End-time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </Grid>
    </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
  );
}
