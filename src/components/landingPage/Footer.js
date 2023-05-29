import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Divider } from 'antd';
import { InstagramFilled, FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';

const { Text, Title } = Typography;

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Row id="contact" justify="center" align="middle" className="footer-row">
          <Col span={8}>
            <Title level={4}>Социальные сети</Title>
            <br></br>
            <Link href="#" target="_blank">
              <InstagramFilled
                type="message"
                style={{ padding: '10px', fontSize: '26px', color: '#000' }}
              />
            </Link>
            <Link href="#" target="_blank">
              <FacebookFilled
                type="message"
                style={{ padding: '10px', fontSize: '26px', color: '#000' }}
              />
            </Link>
            <Link href="#" target="_blank">
              <TwitterCircleFilled
                type="message"
                style={{ padding: '10px', fontSize: '26px', color: '#000' }}
              />
            </Link>
          </Col>
          <Col span={8}>
            <Title level={4}>Оплата</Title>
          </Col>
          <Col span={8}>
            <Title level={4}>Помощь</Title>
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
