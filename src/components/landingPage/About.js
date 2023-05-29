import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import org from '../../assests/org.svg';
import student from '../../assests/student.svg';
import teacher from '../../assests/teacher.svg';
const { Title, Text } = Typography;

function About() {
  return (
    <Row id="about" justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={22} sm={20} md={16} lg={12} xl={20}>
        <Title level={1} style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Про нас
        </Title>
        <Title level={5} style={{ marginBottom: '5rem', textAlign: 'center' }}>
          Увлекательные обучающие материалы как для студентов так и для преподавателей
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
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
          <Col xs={24} sm={12} md={8}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={student}
                alt="student"
                height="220px"
                style={{ fontSize: '4rem', marginBottom: '3rem' }}
              />{' '}
              <Title level={4}>Strong Mind</Title>
              <Text>
                Купив уроки на нашей платформе «Strong Mind» вам предоставляются увлекательные
                занятия с нашими преподавателями со всего мира, видеоролики, учебные материалы,
                интерактивные игры самого разного содержания для учащихся с любым уровнем
                подготовки.
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
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
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button type="primary" shape="round" size="large" className="button" href="/signup">
            Регистрация
          </Button>
        </div>{' '}
      </Col>
    </Row>
  );
}

export default About;
