// import React from 'react';
// import { makeStyles, Grid, Hidden, Typography } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
// import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
// import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
// import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
// import SignoutButton from './SignoutButton';

// function Nav() {
//   const classes = useStyles();

//   return (
//     <div className={classes.nav}>
//       <NavLink to="/account" activeClassName={classes.navActive} className={classes.navlink}>
//         <Grid item className={classes.navItem}>
//           <Hidden smDown>
//             <AccountCircleOutlinedIcon fontSize="large" />
//           </Hidden>
//           <Typography>Account</Typography>
//         </Grid>
//       </NavLink>

//       <NavLink to="/dashboard" activeClassName={classes.navActive} className={classes.navlink}>
//         <Grid item className={classes.navItem}>
//           <Hidden smDown>
//             <DashboardRoundedIcon fontSize="large" />
//           </Hidden>
//           <Typography>Dashboard</Typography>
//         </Grid>
//       </NavLink>

//       <NavLink to="/courses" activeClassName={classes.navActive} className={classes.navlink}>
//         <Grid item className={classes.navItem}>
//           <Hidden smDown>
//             <LibraryBooksRoundedIcon fontSize="large" />
//           </Hidden>
//           <Typography>Courses</Typography>
//         </Grid>
//       </NavLink>

//       <NavLink to="/calendar" activeClassName={classes.navActive} className={classes.navlink}>
//         <Grid item className={classes.navItem}>
//           <Hidden smDown>
//             <DateRangeRoundedIcon fontSize="large" />
//           </Hidden>
//           <Typography>Calendar</Typography>
//         </Grid>
//       </NavLink>

//       <NavLink to="/connect" activeClassName={classes.navActive} className={classes.navlink}>
//         <Grid item className={classes.navItem}>
//           <Hidden smDown>
//             <LinkRoundedIcon fontSize="large" />
//           </Hidden>
//           <Typography>Connect</Typography>
//         </Grid>
//       </NavLink>
//       <SignoutButton />
//     </div>
//   );
// }

// export default Nav;

// const useStyles = makeStyles((theme) => ({
//   nav: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: 'white',
//   },
//   navItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '4px',
//     [theme.breakpoints.up('md')]: {
//       padding: '15px',
//     },
//   },
//   navlink: {
//     textDecoration: 'none',
//     color: 'white',

//     '&:hover': {
//       fontWeight: 'bold',
//       color: theme.palette.secondary.main,
//     },
//   },
//   navActive: {
//     fontWeight: 'bold',
//     color: theme.palette.secondary.main,
//   },
// }));

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import Auth from '@aws-amplify/auth';
import {
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
  CalendarOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
const { Sider } = Layout;

const Nav = () => {
  const location = useLocation();

  return (
    <Layout>
      <Sider trigger={null} style={{ height: '100vh' }}>
        <div className="demo-logo-vertical">
          {/* <img src="./favicon.png" alt="Logo" width={'50px'} /> */}
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/account" icon={<UserOutlined />}>
            <NavLink to="/account">Аккаунт</NavLink>
          </Menu.Item>
          <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
            <NavLink to="/dashboard">Дашборд</NavLink>
          </Menu.Item>
          <Menu.Item key="/courses" icon={<ReadOutlined />}>
            <NavLink to="/courses">Курсы</NavLink>
          </Menu.Item>
          <Menu.Item key="/calendar" icon={<CalendarOutlined />}>
            <NavLink to="/calendar">Календарь</NavLink>
          </Menu.Item>
          <Menu.Item key="/connect" icon={<QuestionCircleOutlined />}>
            <NavLink to="/connect">Помощь</NavLink>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              Auth.signOut();
              window.location.reload();
              localStorage.removeItem('auth');
              window.location.href = '/';
            }}
            key="/logout"
            icon={<LogoutOutlined />}>
            <NavLink to="/">Выйти</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Nav;
