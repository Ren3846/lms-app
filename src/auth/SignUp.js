// import React, { useState } from 'react';
// import Amplify, { Auth } from 'aws-amplify';
// // import awsconfig from "../aws-exports";
// import { Redirect } from 'react-router';
// import { DataStore } from '@aws-amplify/datastore';
// import { User } from '../models';

// import {
//   makeStyles,
//   Grid,
//   Typography,
//   Container,
//   TextField,
//   Button,
//   Box,
//   FormControl,
//   Hidden,
// } from '@material-ui/core';

// import signUpLogo from '../assests/signUpLogo.svg';
// import { Link } from 'react-router-dom';

// // Auth.configure(awsconfig); // For NoUserPoolFound error
// // Amplify.configure(awsconfig); // For DataStore sync error

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
//   name: '',
//   username: '',
//   password: '',
//   email: '',
//   authCode: '',
//   error: '',
//   formType: 'signUp',
// };

// function SignUp() {
//   const classes = useStyles();
//   const [formState, updateFormState] = useState(initialFormState);

//   const onChange = (e) => {
//     e.persist();
//     updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
//   };

//   const { formType } = formState;
//   async function signUp() {
//     const { name, username, password, email } = formState;
//     try {
//       await Auth.signUp({ username, password, attributes: { email, name } });
//       updateFormState(() => ({ ...formState, formType: 'confirmSignUp' }));
//     } catch (err) {
//       alert(err);
//       console.log('error signing up user...', err);
//     }
//   }
//   async function confirmSignUp() {
//     const { name, email, username, authCode } = formState;
//     try {
//       await Auth.confirmSignUp(username, authCode);
//       //To store User data on SignUp in DataStore model - USER
//       await DataStore.save(
//         new User({
//           name: name,
//           email: email,
//           username: username,
//           isEducator: false,
//         }),
//       );

//       updateFormState(() => ({ ...formState, formType: 'signIn' }));
//     } catch (err) {
//       alert(err);
//       console.log('error confirming up user...', err);
//     }
//   }
//   return (
//     <React.Fragment>
//       <Grid container>
//         <Hidden xsDown>
//           <Grid item xs={12} sm={5} xl={4} className={classes.right}>
//             <img src={signUpLogo} alt="login" height="300px" width="300px" />
//           </Grid>
//         </Hidden>
//         <Grid item xs={12} sm={7} xl={8}>
//           {formType === 'signUp' && (
//             <div>
//               <Container maxWidth="sm" className={classes.container}>
//                 <Typography variant="h4" gutterBottom>
//                   Sign Up Now!
//                 </Typography>
//                 <div style={{ display: 'flex' }}>
//                   <FormControl>
//                     <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                       Name
//                     </Box>
//                     <TextField
//                       name="name"
//                       required
//                       variant="outlined"
//                       size="small"
//                       className={classes.textField}
//                       onChange={onChange}
//                     />
//                   </FormControl>
//                   <FormControl>
//                     <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                       Username
//                     </Box>
//                     <TextField
//                       name="username"
//                       required
//                       variant="outlined"
//                       size="small"
//                       className={classes.textField}
//                       onChange={onChange}
//                     />
//                   </FormControl>
//                 </div>
//                 <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                   Email
//                 </Box>
//                 <TextField
//                   name="email"
//                   required
//                   variant="outlined"
//                   size="small"
//                   className={classes.textField}
//                   onChange={onChange}
//                 />
//                 <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                   Password
//                 </Box>
//                 <TextField
//                   name="password"
//                   type="password"
//                   required
//                   variant="outlined"
//                   size="small"
//                   className={classes.textField}
//                   onChange={onChange}
//                 />
//                 <Button onClick={signUp} variant="contained" color="primary">
//                   Create Account
//                 </Button>
//                 <div style={{ margin: '20px 0px' }}>
//                   Already signed up? <Link to="/signIn">Sign In instead</Link>
//                 </div>
//               </Container>
//             </div>
//           )}

//           {formType === 'confirmSignUp' && (
//             <Container maxWidth="sm" className={classes.container}>
//               <Typography variant="h4" gutterBottom>
//                 Confirm Sign Up
//               </Typography>
//               <form>
//                 <Box fontWeight={700} style={{ margin: '5px 0px' }}>
//                   Confirmation Code
//                 </Box>
//                 <TextField
//                   name="authCode"
//                   type="number"
//                   placeholder="Enter your code"
//                   required
//                   variant="outlined"
//                   size="small"
//                   className={classes.textField}
//                   onChange={onChange}
//                 />
//                 <div>
//                   <Button
//                     onClick={confirmSignUp}
//                     variant="contained"
//                     color="primary"
//                     style={{ marginRight: '10px' }}>
//                     Confirm Sign up
//                   </Button>
//                   <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
//                     <Button variant="contained" color="secondary">
//                       Cancel
//                     </Button>
//                   </Link>
//                 </div>
//               </form>
//             </Container>
//           )}
//           {formType === 'signIn' && (
//             <div>
//               <Redirect to="/signIn" />
//             </div>
//           )}
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }
// export default SignUp;

import { Button, Checkbox, Form, Input, Col, Row, Typography } from 'antd';
import signUpLogo from '../assests/signUpLogo.svg';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = () => (
  <>
    <Row>
      <Col
        span={10}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#12365b',
          height: '100vh',
        }}>
        {' '}
        <img src={signUpLogo} alt="login" height="300px" width="300px" />
      </Col>

      <Col
        span={14}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form
          {...formItemLayout}
          name="register"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            width: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item>
            <Title
              level={3}
              style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Регистрация
            </Title>
          </Form.Item>
          <Form.Item
            label="Имя"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Фамилия"
            name="surname"
            rules={[
              {
                required: true,
                message: 'Please input your surname!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Логин"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Подтвердите пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Пароли не совпадают!'));
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}>
            <Checkbox>
              Я согласен с <a href="/">условиями</a>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Регистрация
            </Button>

            <div style={{ margin: '20px 0px' }}>
              Есть аккаунт? <Link to="/signIn">Вход</Link>{' '}
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>
);
export default SignUp;
