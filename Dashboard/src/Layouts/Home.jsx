
import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardMenu from '../Components/DashboardMenu';
import { useSelector } from 'react-redux';



function Home() {
    const userData=useSelector((state)=>(state.activeUser.value))
  let navigate=useNavigate()
 
 if(!userData){
    navigate('/login')
    
  }

  return (
    <div className='w-[1504px] mx-auto'>
      <Row >
      <Col span={6}>
      <DashboardMenu />
      </Col>
      <Col span={18}>
      <Outlet/>
      </Col>
    </Row>
     
   
    </div>
  )
}

export default Home