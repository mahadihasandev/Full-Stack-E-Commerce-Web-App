import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

let userinfo=JSON.parse(localStorage.getItem('userinfo'))

 const items = [
  userinfo&&userinfo.role!='merchant'&&{key: 'sub1',
    label: 'Admin',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Merchant',       
      },
      {
        key: 'g2',
        label: 'User',
      },
    ],
  },
   {
    type: 'divider',
  },
  {
    key: 'sub2',
    label: 'Category',
    icon: <AppstoreOutlined />,
    children: [
      { key: '/dashboard/viewcategory', label: 'View Category' },
      { key: '/dashboard/addcategory', label: 'Add Category' },
    
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Sub Category',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/viewsubcategory', label: 'View Subcategory' },
      { key: '/dashboard/addsubcategory', label: 'Add Subcategory' },
    ],
  },
   {
    type: 'divider',
  },
  {
    key: 'sub5',
    label: 'Products',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/viewproduct', label: 'View Products' },
      { key: '/dashboard/addproduct', label: 'Add Products' },
    ],
  },
   {
    type: 'divider',
  },
   {
    key: 'sub6',
    label: 'Variant',
    icon: <SettingOutlined />,
    children: [
      { key: '11', label: 'View Variant' },
      { key: '12', label: 'Add Variant' },
    ],
  },
   {
    type: 'divider',
  },
  userinfo&&userinfo.role!='merchant'&&{
    key: 'sub7',
    label: 'Discount',
    icon: <SettingOutlined />,
    children: [
      { key: '13', label: 'View Discount' },
      { key: '14', label: 'Add Discount' },
    ],
  },
   {
    type: 'divider',
  },
];

function DashboardMenu() {
  let navigate=useNavigate()
    const onClick = e => {
    navigate(e.key);
  };
  return (
    <div>
        <Menu
      onClick={onClick}
      style={{ width: 356,fontSize:"27px",marginTop:"20px",}}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items} 
    />   
    </div>
  )
}

export default DashboardMenu