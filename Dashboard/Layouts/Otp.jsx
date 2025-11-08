
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Otp = () => {

const data=useParams()
console.log(data);


 useEffect(()=>{
  let data=async ()=>{
    await axios.post('http://localhost:3000/api/v1/auth/otp',{
      email:data.email,
      otp:data.otpcode,
    })
  }
  data()
  console.log(data);
  
    
 },[])
  return (
    <div className='flex flex-col items-center pt-40 bg-[#0c3635] h-screen'>
     
      <h1 className='text-white font-extrabold text-5xl'>Please Wait</h1>


    {/* <Flex gap="middle" align="flex-center" justify='flex-center' vertical>
      <h1 className='text-white text-center font-extrabold'>OTP</h1>
      <Input.OTP
        separator={i => <span style={{ color: i & 1 ? 'red' : 'blue' }}>—</span>}
        {...sharedProps}
      />
    </Flex>
    <button onClick={handleOtp} className='bg-blue-500 px-6 text-white py-1 mt-6 rounded-lg'>Send</button> */}
    </div>
  );
};
export default Otp;