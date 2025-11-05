
import { ToastContainer, toast } from 'react-toastify';
import { Flex, Input, Typography } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const { Title } = Typography;

const Otp = () => {

  let [otpData,setOtpData]=useState('')
const {email}=useParams()

  const onChange = text => {
    setOtpData(text)
  };

  let handleOtp=async()=>{
      let otpDataDb=await axios.post('http://localhost:3000/api/v1/auth/otp',{
      email:email,
      otp:otpData,
    })
    
    
    if(otpDataDb){
      toast.success(otpDataDb.data.success)
    }else{
      toast.error(otpDataDb.data.error)
    }
  }

  const sharedProps = {
    onChange,
   
  };
  return (
    <div className='flex flex-col items-center pt-40 bg-[#0c3635] h-screen'>
      <ToastContainer />
    <Flex gap="middle" align="flex-center" justify='flex-center' vertical>
      <h1 className='text-white text-center font-extrabold'>OTP</h1>
      <Input.OTP
        separator={i => <span style={{ color: i & 1 ? 'red' : 'blue' }}>—</span>}
        {...sharedProps}
      />
    </Flex>
    <button onClick={handleOtp} className='bg-blue-500 px-6 text-white py-1 mt-6 rounded-lg'>Send</button>
    </div>
  );
};
export default Otp;