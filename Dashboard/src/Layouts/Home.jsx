import React, { useEffect } from 'react'
import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

function Home() {
    const userData=useSelector((state)=>(state.activeUser.value))
  let navigate=useNavigate()
 useEffect(()=>{
 if(!userData){
    navigate('/login')
  }else{
    toast.success("Welcome to Dashboard")
  }
 },[])
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
    <ToastContainer/>
    </div>
  )
}

export default Home