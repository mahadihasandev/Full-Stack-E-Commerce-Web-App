import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { authInfo } from '../Slices/AuthSlices';

function DashboardMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const userinfo = useSelector((state)=>(state.activeUser.value))
  const handleLogout = () => {
    localStorage.removeItem('userinfo');
    dispatch(authInfo(null));
    navigate('/login'); 
  };

  const onClick = (e) => {
    navigate(e.key);
  };

  
  const items = [
  
    userinfo?.role !== 'merchant' && {
      key: 'sub1',
      label: 'Admin',
      icon: <MailOutlined />,
      children: [
        { key: 'g1', label: 'Merchant' },
        { key: 'g2', label: 'User' },
      ],
    },
    { type: 'divider' },
    {
      key: 'sub2',
      label: 'Category',
      icon: <AppstoreOutlined />,
      children: [
        { key: '/dashboard/viewcategory', label: 'View Category' },
        { key: '/dashboard/addcategory', label: 'Add Category' },
      ],
    },
    { type: 'divider' },
    {
      key: 'sub4',
      label: 'Sub Category',
      icon: <SettingOutlined />,
      children: [
        { key: '/dashboard/viewsubcategory', label: 'View Subcategory' },
        { key: '/dashboard/addsubcategory', label: 'Add Subcategory' },
      ],
    },
    { type: 'divider' },
    {
      key: 'sub5',
      label: 'Products',
      icon: <SettingOutlined />,
      children: [
        { key: '/dashboard/viewproduct', label: 'View Products' },
        { key: '/dashboard/addproduct', label: 'Add Products' },
      ],
    },
    { type: 'divider' },
    userinfo?.role !== 'merchant' && {
      key: 'sub7',
      label: 'Discount',
      icon: <SettingOutlined />,
      children: [
        { key: '13', label: 'View Discount' },
        { key: '14', label: 'Add Discount' },
      ],
    },
  ].filter(Boolean); 

  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 356, fontSize: "27px", marginTop: "20px" }}
        mode="inline"
        items={items}
      />
      <button 
        className='border bg-blue-500 text-white 
        px-5 py-2 text-xl rounded-xl mx-30 my-5 font-bold' 
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardMenu;