import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import org from '../../assests/org.svg';
import student from '../../assests/student.svg';
import teacher from '../../assests/teacher.svg';
import { Typography } from '@material-ui/core';

function Benefit() {
  const classes = useStyles();

  return (
    <Grid container align="center" className={classes.container}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3">Про нас </Typography>
      </Grid>
      <Grid item xs={12} md={4} aign="center" className={classes.grid}>
        <img src={student} alt="student" height="220px" />
        <Typography variant="h4">Student</Typography>
        <Typography variant="subtitle2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} align="center">
        <img src={teacher} alt="teacher" height="220px" />
        <Typography variant="h4">Teacher</Typography>
        <Typography variant="subtitle2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} align="center">
        <img src={org} alt="org" height="220px" />
        <Typography variant="h4">University/School</Typography>
        <Typography variant="subtitle2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Benefit;

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
    backgroundColor: theme.palette.primary.main,

    height: '120vh',
    color: 'white',

    padding: '50px',
  },
  grid: {},
}));
