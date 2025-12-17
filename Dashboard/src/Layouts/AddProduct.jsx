import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import slugify from 'react-slugify';
import { Bounce, toast, ToastContainer } from 'react-toastify';

function AddProduct() {
  const [slug,setSlug]=useState('')

  const onFinish =async (values) => {
  console.log(values);
  
  let data=await axios.post('http://localhost:8000/api/v1/product/addproduct',
    {
     name:values.productname,
     description:values.description,
     image:values.image,
     saleprice:values.saleprice,
     regularprice:values.regularprice,
     slug:slug,
    }
  )
   if(data.data.success=="Product has been Created"){
        toast.success(data.data.success)
      }else if(data.data.error=="Product Already Exist"){
        toast.error(data.data.error)
      }
  
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
    <div className='mt-10'>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <Form.Item
      label="Product Name"
      name="productname"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input onChange={(e)=>setSlug(e.target.value)}/>
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input type='file'/>
    </Form.Item>

    <Form.Item
      label="Regular Price"
      name="regularprice"
      rules={[{ required: true, message: 'Please input your Regular Price!' }]}
    >
      <Input />
    </Form.Item>

      <Form.Item
      label="Sale Price"
      name="saleprice"
      rules={[{ required: true, message: 'Please input your Sale Price!' }]}
    >
      <Input />
    </Form.Item>

    <label className='ml-30' htmlFor="slug">Slug : <span/>
      <input className='border border-gray-300 rounded-md px-4 w-[67%] py-1 ml-10 mb-5' id='slug' defaultValue={slugify(slug)} type='text' disabled/>
    </label>
      

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default AddProduct