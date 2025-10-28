import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios, { Axios } from 'axios';

function Registration() {
const onFinish =async values => {

    
  let data=await axios.post("http://localhost:3000/api/v1/auth/registration",{
    username:values.username,
    email:values.email,
    password:values.password
  },{
    headers:{auth:"123456780"}
  })
  console.log(data);
  
  
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

  return (
    <div className='flex flex-col items-center mt-28'> 
    <h1 className='mb-5'> Dashboard Registration</h1>
         <Form
    name="basic"
    labelCol={{ span: 9 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 400 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Registration