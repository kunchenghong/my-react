/*
 * @Author: Sirius-kk
 * @Date: 2021-05-21 18:38:03
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2021-10-16 15:09:43
 * @FilePath: \sell-management-platform\config\routes.ts
 */
import CommodityManage from './router/CommodityManage';
import MemberCenter from './router/MemberCenter';
import Retail from './router/Retail';
import UserCenter from './router/UserCenter';
import ChannelCenter from './router/ChannelCenter';
import MarketCenter from './router/MarketCenter';
import FinancialReconciliation from './router/FinancialReconciliation';
import ImportDistributionReceive from './router/ImportDistributionReceive';
import CardCouponManage from './router/CardCouponManage';
import OrderCenter from './router/OrderCenter';
import Applet from './router/Applet';
import ReportForm from './router/ReportForm';
import ReportCenter from './router/ReportCenter';
import InventoryCenter from './router/InventoryCenter';
import PaymentCenter from './router/PaymentCenter';

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './UserLogin/login',
      },
    ],
  },
  {
    path: '/',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  /* 路由 */
  UserCenter, // 用户中心
  CommodityManage, // 商品管理
  MemberCenter, // 会员中心
  Retail, // 零售管理
  ChannelCenter, // 渠道中心
  MarketCenter, // 营销中心
  // ImportDistributionReceive, // 要货-分配-收货
  OrderCenter, // 订单中心
  PaymentCenter, //支付中心
  InventoryCenter, // 库存中心
  FinancialReconciliation, // 财务对账
  CardCouponManage, // 卡券管理
  Applet, // 小程序
  ReportCenter, // 报表中心
  ReportForm, // 报表管理
  {
    component: './404',
  },
];
