import React, {useState} from 'react';
import {Menu, theme, Layout} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import routes from '../../config/routes';
import { Link } from 'react-router-dom';


const { Sider } = Layout;
const { SubMenu } = Menu;

export default (props) => {
  const {collapsed} = props;
  const SideBar = (routes) => {
    const renderMenuItems = (menuItems) => {
      return menuItems.map((item) => {
        const {routes=[], path, name=''} = item
        if(!routes.length){
          return (
            <Menu.Item key={item.path} >
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          )
        }else{
          return (
            <SubMenu key={item.path} title={item.name}>
                {renderMenuItems(item.routes)}
              </SubMenu>
          )
        }
      })
    };
    return renderMenuItems(routes);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      {SideBar(routes)}
    </Menu>
  </Sider>
  )
}
