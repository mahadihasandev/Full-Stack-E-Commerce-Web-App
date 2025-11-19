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
      { key: '9', label: 'View' },
      { key: '10', label: 'Add' },
    ],
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