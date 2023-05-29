import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import hero from '../../assests/icon5.jpg';
const { Title, Text } = Typography;

function Hero() {
  return (
    <Row
      id="home"
      justify="center"
      align="middle"
      style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Col xs={22} sm={20} md={16} lg={12} xl={20}>
        <Row gutter={[16, 16]} justify="space-between" align="middle">
          <Col xs={24} sm={12} md={12} lg={12}>
            <div>
              <Title level={1} style={{ marginBottom: '1rem' }}>
                Английские уроки для каждого!
              </Title>
              <Text style={{ fontSize: '16px' }}>
                Мы подготовили для вас все удобные способы изучения языка
                <br /> <br />
                <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
                - ОТ 5$ ЗА УРОК
                <br />
                <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />
                - 2 БЕСПЛАТНЫХ УРОКА ДЛЯ ВАС
                <br />
                <CheckCircleOutlined style={{ marginRight: '5px', color: '#000' }} />- УРОКИ ОТ 20
                ДО 50 МИНУТ
              </Text>
              <div style={{ marginTop: '2rem' }}>
                <Button type="primary" shape="round" size="large" className="button" href="/signup">
                  Начать уроки <ArrowRightOutlined />
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <img src={hero} alt="English Lessons" style={{ width: '100%' }} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Hero;
