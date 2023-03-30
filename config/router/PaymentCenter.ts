/*
 * @Author: Sirius-kk
 * @Date: 2021-08-13 17:32:06
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-02-16 15:54:07
 * @FilePath: \sell-management-platform\config\router\ReportCenter.ts
 */
export default {
  // 支付中心
  name: 'payment-center',
  code: 'payment-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/payment-center',
  redirect: '/payment-center/payment-detail-search',
  routes: [
    //支付明细查询
    {
      path: '/payment-center/payment-detail-search',
      code: 'payment-detail-search',
      access: 'canAdmin',
      name: 'payment-detail-search',
      component: './PaymentCenter/PaymentDetailSearch',
    },
  ],
};
