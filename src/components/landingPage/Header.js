import React from 'react';
import { Layout, Menu, Button, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import {
  LoginOutlined,
  UserAddOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import Logo from './Logo';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header style={{ background: '#12355B', borderBottom: '1px solid white' }}>
      <Row>
        <Col span={6}>
          <Logo />
        </Col>

        <Col span={10}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '63px', background: '#12355B' }}>
            <Menu.Item key="home">
              <a href="#home">Главная</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="#about">Про нас</a>
            </Menu.Item>
            <Menu.Item key="tutor">
              <a href="#becometutor">Учителям</a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="#contact">Контакты</a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Space>
            <Link to="/signin">
              <Button type="primary" icon={<LoginOutlined />}>
                Войти
              </Button>
            </Link>
            <Link to="/signUp">
              <Button type="default" icon={<UserAddOutlined />}>
                Регистрация
              </Button>
            </Link>
          </Space>
        </Col>
        <Col span={4}>
          <div className="social-icons">
            <Link href="#" target="_blank">
              <InstagramOutlined />
            </Link>
            <Link href="#" target="_blank">
              <TwitterOutlined />
            </Link>
            <Link href="#" target="_blank">
              <FacebookOutlined />
            </Link>
          </div>
        </Col>
      </Row>
    </Header>
  );
}

export default AppHeader;
