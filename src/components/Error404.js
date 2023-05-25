import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
  },
  heading: {
    fontSize: '80px',
    background: 'linear-gradient(to right, #C33764 0%, #1D2671 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));
function Error404() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <Typography variant="h1" className={classes.heading}>
          Опаньки...
        </Typography>
        <Typography variant="h5">404 - Page not found</Typography>
        <Typography variant="subtitle2"></Typography>
        <Typography>Извините, страница, которую вы ищете, не существует. </Typography>
        <Typography> Или, может быть, у вас нет доступа к странице.</Typography>
        <Button variant="contained" color="primary" style={{ margin: '20px' }}>
          <Link to="/" className={classes.link}>
            Вернуться{' '}
          </Link>
        </Button>
        - ИЛИ -
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.href = '/sigin';
          }}>
          Войти
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Error404;
