import React, { useEffect, useState, Suspense } from 'react';
import { Switch, Route, useLocation, useRoutes } from 'react-router-dom';
import { Layout } from 'antd';
import OrganizationAndGroup from '@pages/UserCenter/Account/OrganizationAndGroup/index';

const { Content } = Layout;

export default ({ routes, useNavigate, flatRoutes }) => {
  const [Component, setComponent] = useState(null);
  const location = useLocation();
  // const route = useRoutes(routers);
  const findRouters = () => {
    let item = '';
    item = flatRoutes.flat(Infinity).find(route => route.path === location.pathname)
    return item
  }
  console.log('OrganizationAndGroup', OrganizationAndGroup);

  const resolvePath = (path) => import(path);

  useEffect(() => {
    const route = findRouters();
    // console.log('route', route)
    if(route){
      const url = `${route.component.replace("./", "@pages/")+'/index'}`
      const llll ='@pages/UserCenter/Account/OrganizationAndGroup/index';
      try {
        const component = React.lazy(() => import(/* webpackIgnore: true  */ `@pages/${"UserCenter/Account/OrganizationAndGroup"}/index`)) 
          console.log('component', component);
            setComponent(component);
        // import(`${llll}`).then((component) => {
        //   console.log('component', component);
        // })
      } catch (error) {
        // import(route.component.replace("./", "@pages/")+'/index').then((component) => {
        //   console.log('component', component);
        // })
      }
      
    }
  }, [location, flatRoutes])

  // useEffect(() => {
  //   // 监听路由变化事件
  //   const unlisten = useNavigate.listen((location, action) => {
  //     // 根据当前路由 path 查找对应的路由配置
  //     const route = routers.find(route => route.path === location.pathname);
  //     if (route) {
  //       // 使用动态 import 方法异步加载对应的组件
  //       import(`../${route.component}`).then(component => {
  //         // 组件加载成功后，更新 state 中的 component
  //         setComponent(component.default);
  //       });
  //     }
  //   });
  //   return () => {
  //     // 组件卸载时，停止监听路由变化事件
  //     unlisten();
  //   };
  // }, [route]);

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, minHeight: 360 }}>
        {Component ? (
          // 渲染加载成功的组件
          <Suspense>
            <Component></Component>
          </Suspense>
          
          // <Switch>
          //   <Route path="/" exact>
          //     {component}
          //   </Route>
          // </Switch>
        ) : (
          // 组件加载中，显示 Loading
          <div>Loading...</div>
        )}
      </div>
    </Content>
  );
};