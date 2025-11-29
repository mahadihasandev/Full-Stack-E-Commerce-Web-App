import React from 'react'
import { Button, Form, Input } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AddCategory() {

  const userData = useSelector((state) => state.activeUser);
  console.log(userData.value.id);
  
  const onFinish = async (values) => {
    
    
    let data = await axios.post("http://localhost:8000/api/v1/product/addcategory", {
      name: values.category,
      ownerId:userData.value.id,
    });
    
    localStorage.setItem('userinfo',JSON.stringify(data.data))
    if (data.data.error == "user does not exist") {
      toast.error(data.data.error);
    } else if (!data.data.emailVerified) {
      toast.error("varify your email");
    }else if(data.data.role=='user'){
        toast.error('Please Upgrade to merchant to login')
    }else {
      
      toast.success("Login success");
    }
  };
  const onFinishFailed = (errorInfo) => {
     Navigate(`/error/${errorInfo}`);
  };
  return (
    <div className='mt-20'>

      <Form
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          style={{ maxWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={
              <span style={{ color: "#ffffff", paddingRight: "25px" }}>
               Add Category
              </span>
            }
            name="category"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input style={{ width: "180%", padding: "10px" }} />
          </Form.Item>


          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default AddCategory