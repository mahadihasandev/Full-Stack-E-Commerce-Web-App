import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import slugify from 'react-slugify';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from 'axios';

function AddProduct() {
  const [slug,setSlug]=useState('')
   const [des,setDes]=useState('')
console.log(des);


   const { quill, quillRef } = useQuill();

  useEffect(()=>{
    if(quill){
      quill.on('text-change',function(){
        setDes(quill.root.innerHTML);
        
    })
    }
    
  },[quill])

  const onFinish =async (values) => {
  
  
  
  let data=await axios.post('http://localhost:8000/api/v1/product/addproduct',
    {
     name:values.productname,
     description:des,
     image:values.image,
     saleprice:values.saleprice,
     regularprice:values.regularprice,
     slug:slug,
    }
  )
   if(data.data.success=="Product has been Created"){
        toast.success("Product has been Created")
        values={}
        console.log(values);
      }else if(data.data.error=="Product Already Exist"){
        toast.error(data.data.error)
      }
  
}

const onFinishFailed = errorInfo => {
  console.log('frontend failed', errorInfo);
};
  return (
    <div className='mt-10'>
      
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

      <label className='ml-28' htmlFor="description">Description : 
      <div style={{ width: 400, height: 100, marginLeft:200,marginBottom:120 }}>
      <div ref={quillRef} />
    </div>
      </label>
     

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

  <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
    </div>
  )
}

export default AddProduct