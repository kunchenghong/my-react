/*
 * @Author: Sirius-kk
 * @Date: 2021-06-30 21:53:15
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2021-12-13 20:59:12
 * @FilePath: \sell-management-platform\config\router\ImportDistributionReceive.ts
 */
export default {
  // 要货-分配-收货
  name: 'import-distribution-recive',
  code: 'import-distribution-recive',
  icon: 'table',
  // access: 'canAdmin',
  path: '/import-distribution-recive',
  redirect: '/import-distribution-recive/business-operation/import-approval',
  routes: [
    // 业务操作
    {
      path: '/import-distribution-recive/business-operation',
      code: 'business-operation',
      // access: 'canAdmin',
      name: 'business-operation',
      routes: [
        // 要货审核
        {
          path: '/import-distribution-recive/business-operation/import-approval',
          code: 'import-approval',
          // access: 'canAdmin',
          name: 'import-approval',
          component: './ImportDistributionReceive/BusinessOperation/ImportApproval',
        },
        // 要货审核 - 查看
        {
          path: '/import-distribution-recive/business-operation/import-approval/view/:mode/:id',
          hideInMenu: true,
          name: 'import-approval-view',
          component: './ImportDistributionReceive/BusinessOperation/ImportApproval/children',
        },
        // 要货审核 - 修改
        {
          path: '/import-distribution-recive/business-operation/import-approval/edit/:id/:mode',
          hideInMenu: true,
          name: 'import-approval-edit',
          component: './ImportDistributionReceive/BusinessOperation/ImportApproval/children',
        },
        // 订货单调整与确认
        {
          path: '/import-distribution-recive/business-operation/adjust-confirm',
          code: 'adjust-confirm',
          // access: 'canAdmin',
          name: 'adjust-confirm',
          component: './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist',
        },
        // 订货单 - 查看
        {
          path: '/import-distribution-recive/business-operation/adjust-confirm/oreder-list/view/:id/:orderNo',
          hideInMenu: true,
          name: 'oreder-list-view',
          component:
            './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist/children',
        },
        // 订货单 - 编辑
        {
          path: '/import-distribution-recive/business-operation/adjust-confirm/import-approval/edit/:id/:orderNo',
          hideInMenu: true,
          name: 'oreder-list-edit',
          component:
            './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist/children',
        },
        // 订货单- 新增
        {
          path: '/import-distribution-recive/business-operation/adjust-confirm/oreder-list/create',
          hideInMenu: true,
          name: 'oreder-list-create',
          component:
            './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist/children',
        },
        // 收货差异处理
        {
          path: '/import-distribution-recive/business-operation/receive-difference',
          code: 'receive-difference',
          // access: 'canAdmin',
          name: 'receive-difference',
          component: './ImportDistributionReceive/BusinessOperation/ReceiveDifference',
        },
        // 收货差异处理 - 查看
        {
          path: '/import-distribution-recive/business-operation/receive-difference/view/:recordCode',
          hideInMenu: true,
          name: 'receive-difference-view',
          component: './ImportDistributionReceive/BusinessOperation/ReceiveDifference/children',
        },
        // 收货差异处理 - 处理
        {
          path: '/import-distribution-recive/business-operation/receive-difference/approval/:recordCode',
          hideInMenu: true,
          name: 'receive-difference-handle',
          component: './ImportDistributionReceive/BusinessOperation/ReceiveDifference/children',
        },
      ],
    },
  ],
};
