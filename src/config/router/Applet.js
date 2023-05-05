/*
 * @Author: Sirius-kk
 * @Date: 2021-06-25 10:38:00
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-01-21 22:20:46
 * @FilePath: \sell-management-platform\config\router\Applet.ts
 */
export default {
  // 小程序
  name: 'app-let',
  code: 'app-let',
  icon: 'table',
  access: 'canAdmin',
  path: '/app-let',
  redirect: '/app-let/data-overview',
  routes: [
    //数据概览
    {
      path: '/app-let/data-overview',
      name: 'data-overview',
      access: 'canAdmin',
      code: 'data-overview',
      component: './Applet/DataOverView',
    },
    //运费模板
    {
      path: '/app-let/freight-template',
      name: 'freight-template',
      access: 'canAdmin',
      code: 'freight-template',
      component: './Applet/FreightTemplate',
    },
    //运费模板 - 新建
    {
      path: '/app-let/freight-template/create',
      name: 'freight-template-create',
      hideInMenu: true,
      component: './Applet/FreightTemplate/children',
    },
    //运费模板 - 编辑
    {
      path: '/app-let/freight-template/edit/:id',
      name: 'freight-template-edit',
      hideInMenu: true,
      component: './Applet/FreightTemplate/children',
    },
    //运费模板 - 查看
    {
      path: '/app-let/freight-template/view/:id',
      name: 'freight-template-view',
      hideInMenu: true,
      component: './Applet/FreightTemplate/children',
    },
    // 小程序设置
    {
      path: '/app-let/app-setting',
      name: 'app-setting',
      access: 'canAdmin',
      code: 'app-setting',
      component: './Applet/AppSetting',
    },
    // 小程序设置 - 新建
    {
      path: '/app-let/app-setting/:mode',
      name: 'app-setting-create',
      hideInMenu: true,
      component: './Applet/AppSetting/children',
    },
    // 小程序设置 - 编辑
    {
      path: '/app-let/app-setting/:id/:mode',
      name: 'app-setting-edit',
      hideInMenu: true,
      component: './Applet/AppSetting/children',
    },
    // 小程序设置 - 查看
    {
      path: '/app-let/app-setting/:id/:mode',
      name: 'app-setting-view',
      hideInMenu: true,
      component: './Applet/AppSetting/children',
    },
    // 商城设置
    {
      path: '/app-let/mall-setting',
      name: 'mall-setting',
      access: 'canAdmin',
      code: 'mall-setting',
      component: './Applet/MallSetting',
    },
    // 店铺装修
    {
      path: '/app-let/store-decoration',
      name: 'store-decoration',
      code: 'store-decoration',
      access: 'canAdmin',
      component: './ChannelCenter/HomePageDecoration',
    },
    // 店铺装修 - 详情
    {
      path: '/app-let/store-decoration/detail/:id/:type',
      hideInMenu: true,
      name: 'store-decoration-detail',
      component: './ChannelCenter/HomePageDecoration/detail',
    },
    // 商城商品属性
    {
      path: '/app-let/mall-product',
      name: 'mall-product',
      access: 'canAdmin',
      code: 'mall-product',
      component: './Applet/MallOfCommodityAttributes',
    },
    // 评价管理
    {
      path: '/app-let/evaluation-manage',
      name: 'evaluation-manage',
      access: 'canAdmin',
      code: 'evaluation-manage',
      component: './Applet/EvaluationManage',
    },
    // 商品管理
    {
      path: '/app-let/product-manage',
      name: 'app-product-manage',
      access: 'canAdmin',
      code: 'app-product-manage',
      component: './Applet/ProcuductManage',
    },
    // 商品管理 - 创建
    {
      path: '/app-let/product-manage/:mode',
      name: 'app-product-manage-create',
      hideInMenu: true,
      component: './Applet/ProcuductManage/children',
    },
    // 商品管理 - 查看
    {
      path: '/app-let/product-manage/:itemCode/:mode',
      name: 'app-product-manage-view',
      hideInMenu: true,
      component: './Applet/ProcuductManage/children',
    },
    // 商品管理 - 编辑
    {
      path: '/app-let/product-manage/:itemCode/:mode/:id',
      name: 'app-product-manage-edit',
      hideInMenu: true,
      component: './Applet/ProcuductManage/children',
    },
    // 上下架管理
    {
      path: '/app-let/up-low',
      name: 'up-low',
      access: 'canAdmin',
      code: 'up-low',
      component: './Applet/UpOrLowManage',
    },
    // 上下架管理 - 查看
    {
      path: '/app-let/up-low-view/:itemCode/:mode',
      name: 'up-low-view',
      hideInMenu: true,
      component: './Applet/ProcuductManage/children',
    },
    // 公众号人群设置
    {
      path: '/app-let/official-crowd',
      name: 'official-crowd',
      access: 'canAdmin',
      code: 'official-crowd',
      component: './Applet/OfficialAccountCrowd',
    },
    // 公众号人群设置 - 新建
    {
      path: '/app-let/official-crowd/:mode',
      name: 'official-crowd-create',
      hideInMenu: true,
      component: './Applet/OfficialAccountCrowd/children',
    },
    // 公众号人群设置 - 编辑
    {
      path: '/app-let/official-crowd/:id/:crowdSettingCode/:mode',
      name: 'official-crowd-edit',
      hideInMenu: true,
      component: './Applet/OfficialAccountCrowd/children',
    },
    // 公众号人群设置 - 查看
    {
      path: '/app-let/official-crowd/:id/:crowdSettingCode/:mode',
      name: 'official-crowd-view',
      hideInMenu: true,
      component: './Applet/OfficialAccountCrowd/children',
    },
    //订单管理
    {
      path: '/app-let/order-manage',
      name: 'order-manage',
      access: 'canAdmin',
      code: 'order-manage',
      component: './Applet/OrderManage',
    },
    //订单管理 - 查看
    {
      path: '/app-let/order-manage/view/:orderNo',
      name: 'order-manage-view',
      hideInMenu: true,
      component: './Applet/OrderManage/children',
    },
  ],
};
