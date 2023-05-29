import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import org from '../../assests/org.svg';
import teacher from '../../assests/teacher.svg';
const { Title, Text } = Typography;

function BecomeTutor() {
  return (
    <Row
      id="becometutor"
      justify="center"
      align="middle"
      style={{ height: '100vh', backgroundColor: '#fff' }}>
      <Col xs={22} sm={20} md={16} lg={12} xl={20}>
        <Title level={1} style={{ marginBottom: '5rem', textAlign: 'center' }}>
          Стать репетитором{' '}
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={12}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={org}
                alt="student"
                height="220px"
                style={{ fontSize: '4rem', marginBottom: '3rem' }}
              />
              <Title level={4}>Компания</Title>
              <Text>
                С момента основания наша компания приложила много усилий, чтобы подготовить самые
                удобные виды обучений и подстроиться под гибкий график каждого.
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12} md={12}>
            <div style={{ textAlign: 'center' }}>
              {/* <TeamOutlined style={{ fontSize: '4rem', marginBottom: '1rem' }} /> */}
              <img
                src={teacher}
                alt="student"
                height="220px"
                style={{ fontSize: '4rem', marginBottom: '3rem' }}
              />{' '}
              <Title level={4}>Цель</Title>
              <Text>
                Наша цель предоставление ученикам и преподавателям беспрепятственного доступа к
                видеоматериалам и книгам высокого качества для удобного преподавания и изучения
                языка.
              </Text>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Button type="primary" shape="round" size="large" className="button" href="/signup">
            Регистрация
          </Button>
        </div>{' '}
      </Col>
    </Row>
  );
}

export default BecomeTutor;
