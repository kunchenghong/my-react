/*
 * @Author: Sirius-kk
 * @Date: 2021-07-16 15:07:28
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-01-21 20:46:24
 * @FilePath: \sell-management-platform\config\router\OrderCenter.ts
 */
export default {
  // 订单中心
  name: 'order-center',
  code: 'order-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/order-center',
  redirect: '/order-center/business-operation/import-approval',
  routes: [
    // 要货订单
    {
      path: '/order-center/business-operation',
      code: 'business-operation',
      access: 'canAdmin',
      name: 'business-operation',
      routes: [
        // 要货审核
        {
          path: '/order-center/business-operation/import-approval',
          code: 'import-approval',
          access: 'canAdmin',
          name: 'import-approval',
          component: './ImportDistributionReceive/BusinessOperation/ImportApproval',
        },
        // 要货审核 - 查看
        {
          path: '/order-center/business-operation/import-approval/:id/:orderNo/:mode',
          hideInMenu: true,
          name: 'import-approval-view',
          component: './ImportDistributionReceive/BusinessOperation/ImportApproval/children',
        },
        // 要货审核 - 修改
        {
          path: '/order-center/business-operation/import-approval/:id/:orderNo/:tradeStatus/:mode',
          hideInMenu: true,
          name: 'import-approval-edit',
          component: './ImportDistributionReceive/BusinessOperation/ImportApproval/children',
        },
        // 要货汇总
        {
          path: '/order-center/business-operation/adjust-confirm',
          code: 'adjust-confirm',
          access: 'canAdmin',
          name: 'adjust-confirm',
          component: './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist',
        },
        // 要货汇总 - 查看
        {
          path: '/order-center/business-operation/adjust-confirm/oreder-list/:id/:orderNo/:sortGoodsType/:mode',
          hideInMenu: true,
          name: 'oreder-list-view',
          component:
            './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist/children',
        },
        // 要货汇总 - 编辑
        {
          path: '/order-center/business-operation/adjust-confirm/import-approval/:id/:orderNo/:sortGoodsType/:mode',
          hideInMenu: true,
          name: 'oreder-list-edit',
          component:
            './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist/children',
        },
        // 要货汇总- 新增
        {
          path: '/order-center/business-operation/adjust-confirm/oreder-list/:mode',
          hideInMenu: true,
          name: 'oreder-list-create',
          component:
            './ImportDistributionReceive/BusinessOperation/OrderAdjustConfirm/Orderlist/children',
        },
        // 收货差异处理
        {
          path: '/order-center/business-operationreceive-difference',
          code: 'receive-difference',
          access: 'canAdmin',
          name: 'receive-difference',
          component: './ImportDistributionReceive/BusinessOperation/ReceiveDifference',
        },
        // 收货差异处理 - 查看
        {
          path: '/order-center/business-operationreceive-difference/:recordCode/:mode',
          hideInMenu: true,
          name: 'receive-difference-view',
          component: './ImportDistributionReceive/BusinessOperation/ReceiveDifference/children',
        },
        // 收货差异处理 - 处理
        {
          path: '/order-center/business-operationreceive-difference/:recordCode/:mode',
          hideInMenu: true,
          name: 'receive-difference-handle',
          component: './ImportDistributionReceive/BusinessOperation/ReceiveDifference/children',
        },
        // 接口日志
        {
          path: '/order-center/business-operation/interface-journal',
          code: 'interface-journal',
          access: 'canAdmin',
          name: 'interface-journal',
          component: './ImportDistributionReceive/BusinessOperation/InterfaceJournal',
        },
        // 接口日志 - 详情
        {
          path: '/order-center/business-operation/interface-journal/view/:id',
          hideInMenu: true,
          name: 'interface-journal-view',
          component: './ImportDistributionReceive/BusinessOperation/InterfaceJournal/children',
        },
        // 配送收货单导入
        {
          path: '/order-center/business-operation/importOfDeliveryReceipt',
          access: 'canAdmin',
          code: 'interface-delivery-receipt',
          name: 'importOfDeliveryReceipt',
          component: './ImportDistributionReceive/BusinessOperation/ImportOfDeliveryReceipt',
        },
        {
          path: '/order-center/business-operation/importOfDeliveryReceipt/view/:id/:mode',
          hideInMenu: true,
          name: 'importOfDeliveryReceipt-view',
          component:
            './ImportDistributionReceive/BusinessOperation/ImportOfDeliveryReceipt/children',
        },
        {
          path: '/order-center/business-operation/importOfDeliveryReceipt/edit/:id/:mode',
          hideInMenu: true,
          name: 'importOfDeliveryReceipt-edit',
          component:
            './ImportDistributionReceive/BusinessOperation/ImportOfDeliveryReceipt/children',
        },
      ],
    },

    // 智能分货
    {
      path: '/order-center/intelligent-distribute',
      code: 'intelligent-distribute',
      access: 'canAdmin',
      name: 'intelligent-distribute',
      routes: [
        // 分获配置
        {
          path: '/order-center/intelligent-distribute/distribute-config',
          code: 'distribute-config',
          access: 'canAdmin',
          name: 'distribute-config',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/DistributeConfig',
        },
        // 目标管理
        {
          path: '/order-center/intelligent-distribute/target-manage/:targetTypeCode/:targetTypeName/:targetChannel',
          hideInMenu: true,
          name: 'target-manage',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/DistributeConfig/TargetManage',
        },
        // 入库单列表
        {
          path: '/order-center/intelligent-distribute/enter-warehourse-list',
          code: 'enter-warehourse-list',
          access: 'canAdmin',
          name: 'enter-warehourse-list',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/EnterWarehouseOrderList',
        },
        // 入库单列表 - 详情
        {
          path: '/order-center/intelligent-distribute/enter-warehourse-list/view/:recordCode',
          hideInMenu: true,
          name: 'enter-warehourse-view',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/EnterWarehouseOrderList/children',
        },
        // 智能分货商品列表
        {
          path: '/order-center/intelligent-distribute/product-list',
          code: 'intelligent-product-list',
          access: 'canAdmin',
          name: 'intelligent-product-list',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/ProductList',
        },
        // 智能分货商品列表 - 商品库存明细
        {
          path: '/order-center/intelligent-distribute/product-list/product-list-stock/:itemCode/:shipperCode',
          hideInMenu: true,
          name: 'intelligent-product-list-stock',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/ProductList/childrenStock',
        },
        // 智能分货商品列表 - 商品要货明细
        {
          path: '/order-center/intelligent-distribute/product-list/product-list-ask/:orderNo/:type/:stock',
          hideInMenu: true,
          name: 'intelligent-product-list-ask',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/ProductList/childrenAsk',
        },
        // 智能分货商品列表 - 智能分货单-编辑
        {
          path: '/order-center/intelligent-distribute/product-list/product-list-distribute-edit/:orderNo/:mode/:availableStock',
          hideInMenu: true,
          canMoreOpen: true,
          name: 'intelligent-product-list-distribute-edit',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/ProductList/detail',
        },
        // 智能分货商品列表 - 智能分货单-详情
        {
          path: '/order-center/intelligent-distribute/product-list/product-list-distribute-view/:orderNo/:mode/:availableStock',
          hideInMenu: true,
          name: 'intelligent-product-list-distribute-view',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/ProductList/detail',
        },
        // 分货通知单
        {
          path: '/order-center/intelligent-distribute/distribute-notice-list',
          code: 'distribute-notice-list',
          access: 'canAdmin',
          name: 'distribute-notice-list',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/DistributeGoodsNotice',
        },
        // 分货通知单-详情
        {
          path: '/order-center/intelligent-distribute/distribute-notice-list/distribute-notice-view/:orderNo',
          hideInMenu: true,
          name: 'distribute-notice-view',
          component:
            './ImportDistributionReceive/BusinessOperation/IntelligentDistributation/DistributeGoodsNotice/children',
        },
      ],
    },
    // 订单列表
    {
      path: '/order-center/order-list',
      access: 'canAdmin',
      name: 'order-list',
      code: 'order-list',
      component: './OrderCenter/OrderList',
    },
    // 订单列表 - 查看
    {
      path: '/order-center/order-list/view/:orderNo',
      hideInMenu: true,
      name: 'order-list-view',
      component: './OrderCenter/OrderList/children',
    },
    // 预订列表
    {
      path: '/order-center/book-list',
      access: 'canAdmin',
      name: 'book-list',
      code: 'book-list',
      component: './OrderCenter/BookOrder',
    },
    // 预订列表 - 查看
    {
      path: '/order-center/book-list/view/:orderNo',
      hideInMenu: true,
      name: 'book-list-view',
      component: './OrderCenter/BookOrder/children',
    },
    // 退单列表
    {
      path: '/order-center/back-list',
      access: 'canAdmin',
      name: 'back-list',
      code: 'back-list',
      component: './OrderCenter/BackOrder',
    },
    // 退单列表 - 查看
    {
      path: '/order-center/back-list/view/:orderNo',
      hideInMenu: true,
      name: 'back-list-view',
      component: './OrderCenter/BackOrder/children',
    },
    // //to B列表
    {
      path: '/order-center/tob-order-list',
      code: 'tob-order-list',
      access: 'canAdmin',
      name: 'tob-order-list',
      component: './OrderCenter/ToBOrderList',
    },
  ],
};
