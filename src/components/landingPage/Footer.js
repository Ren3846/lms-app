import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Divider } from 'antd';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

// const style = {
//   background: '#0092ff',
//   padding: '8px 0',
// };

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Row gutter={16} id="contact" justify="center" align="middle" className="footer-row">
          <Col span={4}>
            <Title level={4}>Strong Mind</Title>
            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>STRONG MIND, ACADEMY </li>
                <li>123 Street, Ukraine, Kyiv</li>
                <li>
                  <a href="tel:+380660514461">+380660514461</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <Title level={4}>Strong Mind</Title>
            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>STRONG MIND, ACADEMY </li>
                <li>123 Street, Ukraine, Kyiv</li>
                <li>
                  <a href="tel:+380660514461">+380660514461</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <Title level={4}>Контакты</Title>
            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>STRONG MIND, ACADEMY </li>
                <li>123 Street, Ukraine, Kyiv</li>
                <li>
                  <a href="tel:+380660514461">+380660514461</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={4}>
            <Title level={4}>Оплата</Title>
            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>STRONG MIND, ACADEMY </li>
                <li>123 Street, Ukraine, Kyiv</li>
                <li>
                  <a href="tel:+380660514461">+380660514461</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col span={4}>
            <Title level={4}>Социальные сети</Title>
            <br></br>
            <div className="social-footer">
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

        <Divider />

        <Row justify="center" align="middle" className="footer-row">
          <Col span={24}>
            <Text>© 2023 STRONG MIND ACADEMY. Все права защищены.</Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
