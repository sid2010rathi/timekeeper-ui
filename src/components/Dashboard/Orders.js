import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '1 Mar, 2021', 'John Doe', 'jhon@doe.com', 'Cashier', 9874561230),
  createData(1, '1 Mar, 2021', 'John Doe', 'jhon@doe.com', 'Cashier', 9874561230),
  createData(2, '1 Mar, 2021', 'John Doe', 'jhon@doe.com', 'Cashier', 9874561230),
  createData(3, '1 Mar, 2021', 'John Doe', 'jhon@doe.com', 'Cashier', 9874561230),
  createData(4, '1 Mar, 2021', 'John Doe', 'jhon@doe.com', 'Cashier', 9874561230),
  createData(5, '1 Mar, 2021', 'John Doe', 'jhon@doe.com', 'Cashier', 9874561230),

];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Employees</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Team</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more employees
        </Link>
      </div>
    </React.Fragment>
  );
}
