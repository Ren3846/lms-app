import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assests/hero.svg';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

function Hero() {
  return (
    <div style={{ background: '#fff', color: 'white', height: '100vh' }}>
      <Row justify="center" align="middle" style={{ paddingLeft: '60px' }}>
        <Col xs={24} md={12}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}>
            <Title level={2} style={{ marginBottom: '20px' }}>
              Английские уроки для каждого!{' '}
            </Title>
            <Text className="subtitle" style={{ marginBottom: '20px' }}>
              Мы подготовили для вас все удобные способы изучения языка
            </Text>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
            <span style={{ fontSize: '16px', color: '#000' }}>ОТ 5$ ЗА УРОК</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
            <span style={{ fontSize: '16px', color: '#000' }}>2 БЕСПЛАТНЫХ УРОКА ДЛЯ ВАС</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
            <span style={{ fontSize: '16px', color: '#000' }}>УРОКИ ОТ 20 ДО 50 МИНУТ</span>
          </div>

          <Button
            type="primary"
            shape="round"
            size="large"
            className="button"
            style={{ marginTop: '20px' }}>
            <Link to="/signin" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', marginRight: '5px' }}>Попробуйте бесплатно</span>
              <ArrowRightOutlined />
            </Link>
          </Button>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: 'center', padding: '150px' }}>
          <img src={hero} alt="hero" height="450rem" />
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
