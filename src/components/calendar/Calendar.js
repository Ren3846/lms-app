import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navigation from '../Navigation';
import { Container } from '@material-ui/core';
import CalendarView from './CalendarView';

export default function Calendar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} md={1} className={classes.sidebar}>
          <Navigation />
        </Grid>
        <Grid item xs={12} md={10} className={classes.grid}>
          <Container align="center">
            <CalendarView />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: '100%',

    background: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      height: '100vh',
      position: 'fixed',
    },
  },
  grid: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '10vh',
    },
  },
}));

// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import Navigation from '../Navigation';
// import CalendarView from './CalendarView';

// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import React from 'react';
// const { Header, Content, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
// const App = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <>
//       <Navigation />
//       <Layout
//         style={{
//           padding: '0 24px 24px',
//         }}>
//         <Content
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//             background: colorBgContainer,
//           }}>
//           <CalendarView />
//         </Content>
//       </Layout>
//     </>
//   );
// };
// export default App;
