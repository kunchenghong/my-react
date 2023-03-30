/*
 * @Author: Sirius-kk
 * @Date: 2021-06-22 16:45:40
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-01-21 20:31:05
 * @FilePath: \sell-management-platform\config\router\ChannelCenter.ts
 */
export default {
  // 渠道中心
  name: 'channel-center',
  code: 'channel-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/channel-center',
  redirect: '/channel-center/channel-manage/store-mapping',
  routes: [
    // 渠道管理
    {
      path: '/channel-center/channel-manage',
      code: 'channel-manage',
      access: 'canAdmin',
      name: 'channel-manage',
      routes: [
        // 平台应用-弃用
        // {
        //   path: '/channel-center/channel-manage/plat-application',
        //   code: 'plat-application',
        //   // // access: 'canAdmin',
        //   name: 'plat-application',
        //   component: './ChannelCenter/ChannelManage/PlatApplication',
        // },
        // 门店映射
        {
          path: '/channel-center/channel-manage/store-mapping',
          code: 'store-mapping',
          access: 'canAdmin',
          name: 'store-mapping',
          component: './ChannelCenter/ChannelManage/StoreMapping',
        },
        // 门店映射-绑定
        {
          path: '/channel-center/channel-manage/store-mapping/binding/:appType',
          name: 'binding',
          hideInMenu: true,
          component: './ChannelCenter/ChannelManage/StoreMapping/edit',
        },
        // 外卖商品映射
        {
          path: '/channel-center/channel-manage/take-away-merchandise',
          code: 'take-away-merchandise',
          access: 'canAdmin',
          name: 'take-away-merchandise',
          component: './ChannelCenter/ChannelManage/TakeAwayMerchandise',
        },
        // 外卖商品映射-列表
        {
          path: '/channel-center/channel-manage/take-away-merchandise/binding/:appType',
          name: 'take-away-merchandise-list',
          hideInMenu: true,
          component: './ChannelCenter/ChannelManage/TakeAwayMerchandise/view',
        },
        // 外卖商品映射-绑定
        {
          path: '/channel-center/channel-manage/take-away-merchandise/binding/create/:channel/:modeType',
          name: 'take-away-merchandise-bind',
          hideInMenu: true,
          component: './ChannelCenter/ChannelManage/TakeAwayMerchandise/edit',
        },
        {
          path: '/channel-center/channel-manage/take-away-merchandise/binding/edit/:channel/:modeType',
          name: 'take-away-merchandise-bind',
          hideInMenu: true,
          component: './ChannelCenter/ChannelManage/TakeAwayMerchandise/edit',
        },
        // 渠道设置
        {
          path: '/channel-center/channel-manage/channel-setting',
          code: 'channel-setting',
          access: 'canAdmin',
          name: 'channel-setting',
          component: './ChannelCenter/ChannelManage/ChannelSetting',
        },
        // 渠道设置新增
        {
          path: '/channel-center/channel-manage/channel-setting/:mode/:orgNodeCode',
          name: 'channel-setting-create',
          hideInMenu: true,
          component: './ChannelCenter/ChannelManage/ChannelSetting/Operation',
        },
        // 渠道设置编辑
        {
          path: '/channel-center/channel-manage/channel-setting/:mode/:id/:orgNodeCode',
          hideInMenu: true,
          name: 'channel-setting-edit',
          component: './ChannelCenter/ChannelManage/ChannelSetting/Operation',
        },
        // 渠道设置查看
        {
          path: '/channel-center/channel-manage/channel-setting/:mode/:id/:orgNodeCode',
          name: 'channel-setting-view',
          hideInMenu: true,
          component: './ChannelCenter/ChannelManage/ChannelSetting/Operation',
        },
      ],
    },
    // 大客户信息
    {
      path: '/channel-center/customer-info',
      code: 'customer-info',
      access: 'canAdmin',
      name: 'customer-info',
      component: './ChannelCenter/CustomerInfo',
    },
    // 门店信息
    {
      path: '/channel-center/store-info',
      code: 'store-info',
      access: 'canAdmin',
      name: 'store-info',
      component: './ChannelCenter/StoreInfo',
    },
    // 门店详情
    {
      path: '/channel-center/store-info/:id/:code/:mode',
      hideInMenu: true,
      name: 'store-info-view',
      component: './ChannelCenter/StoreInfo/children',
    },
    // 大客户信息 // 里面可以查看门店 code: big-customer-store
    // {
    //   path: '/channel-center/xxxx',
    //   code: 'big-customer',
    //   // // access: 'canAdmin',
    //   name: 'big-customer',
    //   component: './ChannelCenter/Xxxxx',
    // },
    // 美团门店绑定
    {
      path: '/channel-center/meituan-store',
      code: 'meituan-store',
      access: 'canAdmin',
      name: 'meituan-store',
      component: './ChannelCenter/MeituanStore',
    },
    // // 店铺装修
    // {
    //   path: '/channel-center/store-decoration',
    //   name: 'store-decoration',
    //   code: 'store-decoration',
    //   // access: 'canAdmin',
    //   component: './ChannelCenter/HomePageDecoration',
    // },
    // // 店铺装修 - 详情
    // {
    //   path: '/channel-center/store-decoration/detail/:id/:type',
    //   hideInMenu: true,
    //   name: 'store-decoration',
    //   component: './ChannelCenter/HomePageDecoration/detail',
    // },
  ],
};
