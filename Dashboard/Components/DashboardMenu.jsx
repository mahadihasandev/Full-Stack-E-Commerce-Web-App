import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
 const items = [
  {
    key: 'sub1',
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
      { key: '5', label: 'View Category' },
      { key: '6', label: 'Add Category' },
    
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
      { key: '7', label: 'View Subcategory' },
      { key: '8', label: 'Add Subcategory' },
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
      { key: '9', label: 'View Products' },
      { key: '10', label: 'Add Products' },
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
  {
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

    const onClick = e => {
    console.log('click ', e);
  };

  return (
    <div>
        <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </div>
  )
}

export default DashboardMenu