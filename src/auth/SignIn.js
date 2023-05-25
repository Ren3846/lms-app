// import React, { useState } from 'react';
// import Amplify, { Auth } from 'aws-amplify';
// // import awsconfig from "../aws-exports";
// import { Link, useHistory } from 'react-router-dom';
// import {
//   makeStyles,
//   Grid,
//   Typography,
//   Container,
//   TextField,
//   Button,
//   Box,
//   Hidden,
// } from '@material-ui/core';
// import login from '../assests/login.svg';

// // Auth.configure(awsconfig); //For NoUserPool Found error
// // Amplify.configure(awsconfig);
// const useStyles = makeStyles((theme) => ({
//   right: {
//     backgroundColor: theme.palette.primary.main,
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   textField: {
//     width: '70%',
//     marginBottom: '20px',
//   },
// }));
// const initialFormState = {
//   username: '',
//   password: '',
//   formType: 'signIn',
// };

// function SignIn() {
//   const classes = useStyles();
//   let history = useHistory();
//   const [formState, updateFormState] = useState(initialFormState);

//   const onChange = (e) => {
//     e.persist();
//     updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
//   };
//   const { formType } = formState;

//   async function signIn() {
//     const { username, password } = formState;
//     try {
//       if (username === 'fakeuser' && password === 'fakepassword') {
//         // Фейковый логин - установка фейкового пользователя в localStorage
//         localStorage.setItem('auth', username);
//         history.push('/');
//         window.location.reload();
//       } else {
//         // Настоящий логин
//         await Auth.signIn(username, password);
//         updateFormState(() => ({ ...formState }));
//         localStorage.setItem('auth', username);
//         history.push('/');
//         window.location.reload();
//       }
//     } catch (err) {
//       alert(err.message);
//       console.log('error signing in user...', err.message);
//     }
//   }

//   // async function signIn() {
//   //   const { username, password } = formState;
//   //   try {
//   //     await Auth.signIn(username, password);
//   //     updateFormState(() => ({ ...formState }));
//   //     localStorage.setItem('auth', username);
//   //     history.push('/');
//   //     window.location.reload();
//   //   } catch (err) {
//   //     alert(err.message);
//   //     console.log('error signing in user...', err.message);
//   //   }
//   // }

//   return (
//     <React.Fragment>
//       <Grid container>
//         <Hidden xsDown>
//           <Grid item xs={12} sm={5} xl={4} className={classes.right}>
//             <img src={login} alt="login" height="300px" width="300px" />
//           </Grid>
//         </Hidden>

//         <Grid item xs={12} sm={7} xl={8}>
//           {formType === 'signIn' && (
//             <Container maxWidth="sm" className={classes.container}>
//               <Typography variant="h4" gutterBottom>
//                 Sign In Now!
//               </Typography>

//               <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                 Username
//               </Box>
//               <TextField
//                 name="username"
//                 required
//                 variant="outlined"
//                 size="small"
//                 className={classes.textField}
//                 onChange={onChange}
//               />
//               <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                 Password
//               </Box>
//               <TextField
//                 name="password"
//                 type="password"
//                 required
//                 variant="outlined"
//                 size="small"
//                 className={classes.textField}
//                 onChange={onChange}
//               />
//               <Button onClick={signIn} variant="contained" color="primary">
//                 Sign In
//               </Button>
//               <div style={{ margin: '20px 0px' }}>
//                 Not a member? <Link to="/signUp">Sign up now</Link>
//               </div>
//               <div>
//                 Demo credentials:
//                 <p> username: fakeuser</p>
//                 <p> password: fakepassword</p>
//               </div>
//             </Container>
//           )}
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }
// export default SignIn;

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Typography, Col, Row, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import login from '../assests/login.svg';

const { Title } = Typography;

const SignIn = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    if (username === 'fakeuser' && password === 'fakepassword') {
      localStorage.setItem('auth', username);
      history.push('/');
      window.location.reload();
    } else {
      // Настоящий логин
    }
  };

  return (
    <Row style={{ display: 'flex', height: '100vh' }}>
      <Col
        span={10}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#12365b',
        }}>
        <img src={login} alt="login" height="300px" width="300px" />
      </Col>
      <Col
        span={12}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '40vh' }}>
          <Title level={3}>Вход</Title>
          <div style={{ marginBottom: '20px' }}>
            <Input
              prefix={<UserOutlined />}
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="primary" block onClick={signIn}>
            Войти
          </Button>
          <div style={{ marginTop: '20px' }}>
            Нет аккаунта? <Link to="/signUp">Регистрация</Link>
          </div>
          <div>
            <br></br>
            Demo credentials:
            <p>username: fakeuser</p>
            <p>password: fakepassword</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
