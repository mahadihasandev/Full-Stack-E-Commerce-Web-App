import React from 'react'
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';

function Home() {
  return (
    <div>
      <Row>
      <Col span={6}>
      <DashboardMenu/>
      </Col>
      <Col span={18}>
      <Outlet/>
      </Col>
    </Row>
    </div>
  )
}

export default Home