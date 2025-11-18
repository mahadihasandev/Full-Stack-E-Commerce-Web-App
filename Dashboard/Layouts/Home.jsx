import React from 'react'
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Row>
      <Col span={6}>col-12</Col>
      <Col span={18}>
      <Outlet/>
      </Col>
    </Row>
    </div>
  )
}

export default Home