import {Space, Table} from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';


function ViewBanner() {
  const [productData,setProductData]=useState([])
  const [refresh, setRefresh] = useState('');

useEffect(()=>{


  let ProductData=async()=>{
    let data=await axios.get('http://localhost:8000/api/v1/product/viewbanner')
   let array=[]
    data.data.map((item)=>{
        
      array.push({
        key: item._id,
        id:item._id,
        name:item.name,
        description:item.description,
        image:item.image,
    })  
    })
   setProductData(array); 
  }
  ProductData()
}
,[refresh])

const handleDelete=async(item)=>{ 
 let deleteData=await axios.delete(`http://localhost:8000/api/v1/product/deletebanner${item}`)
  setRefresh(deleteData.data)
}


const columns = [
    {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
   
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
   
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
     render: (text) =><img width='100px' src={`http://localhost:8000${text}`} alt="Image" />,
  },
  
  
  {
    title: 'Action',
    key: 'action',
    render: (data) => (
      
      
      <Space size="middle">
        
        <a className='border rounded-2xl px-5 py-2 ' onClick={()=>(handleDelete(data.id))}>Delete</a>
      </Space>
    ),
  },
];


  return (
    <div className='mt-10 relative '>
       <Table columns={columns} dataSource={productData}/>

       
    </div>
  )
}

export default ViewBanner