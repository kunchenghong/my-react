import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './index.less';
import SiderMenu from './SiderMenu';
import LayoutContent from './LayoutContent';
import routes from '../config/routes';
import {useNavigate} from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [flatRoutes, setFlatRoutes] = useState([])

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const {history, location} = window;
  const params = {
    routes,
    history,
    location,
    collapsed,
    useNavigate,
    flatRoutes,
  }
  const mapArr = (arr, list) => {
    const arrList = [...arr]
    arrList.forEach((item) => {
      const {routes=[]} = item;
      if(routes.length){
        let temp = {
          ...item
        }
        mapArr(routes, list);
        delete temp["routes"]
        list.push(temp)
      }else{
        list.push({...item})
      }
    })
  }
  useEffect(() => {
    let tempArr = []
    mapArr(routes, tempArr);
    setFlatRoutes([...tempArr])
  }, [])
  return (
    <div className='app_home'>
      <Layout className='app_home_layout'>
        <SiderMenu {...params}></SiderMenu>
        <Layout className="site-layout">
          <Header {...params} style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          {/* <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content> */}
          <LayoutContent {...params}></LayoutContent>
        </Layout>
      </Layout>
    </div>
  )
}
