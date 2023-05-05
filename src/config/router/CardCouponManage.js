/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-07-06 20:29:35
 * @LastEditTime: 2022-03-14 15:56:14
 * @LastEditors: Please set LastEditors
 */
export default {
  // 卡券管理
  name: 'card-coupon-manage',
  code: 'card-coupon-manage',
  icon: 'table',
  access: 'canAdmin',
  path: '/card-coupon-manage',
  redirect: '/card-coupon-manage/basic-setting/number-rule',
  routes: [
    // 基本设置
    {
      path: '/card-coupon-manage/basic-setting',
      code: 'basic-setting',
      access: 'canAdmin',
      name: 'basic-setting',
      routes: [
        {
          path: '/card-coupon-manage/basic-setting/number-rule',
          code: 'number-rule',
          access: 'canAdmin',
          name: 'number-rule',
          component: './CardCouponManage/BasicSetting/NumberRule',
        },
      ],
    },
    // 卡管理
    {
      path: '/card-coupon-manage/card-manage',
      code: 'card-manage',
      access: 'canAdmin',
      name: 'card-manage',
      routes: [
        // 卡类型
        {
          path: '/card-coupon-manage/card-manage/card-type',
          code: 'card-type',
          access: 'canAdmin',
          name: 'card-type',
          component: './CardCouponManage/CardManage/CardType',
        },
        // 卡类型 - 新增
        {
          path: '/card-coupon-manage/card-manage/card-type/create',
          // code: 'card-type-create',
          hideInMenu: true,
          name: 'card-type-create',
          component: './CardCouponManage/CardManage/CardType/View',
        },
        // 卡类型 - 查看
        {
          path: '/card-coupon-manage/card-manage/card-type/view/:id',
          hideInMenu: true,
          name: 'card-type-view',
          component: './CardCouponManage/CardManage/CardType/View',
        },
        // 卡类型 - 编辑
        {
          path: '/card-coupon-manage/card-manage/card-type/edit/:id',
          hideInMenu: true,
          name: 'card-type-edit',
          component: './CardCouponManage/CardManage/CardType/View',
        },
        // 卡生成
        {
          path: '/card-coupon-manage/card-manage/card-create',
          code: 'card-create',
          access: 'canAdmin',
          name: 'card-create',
          component: './CardCouponManage/CardManage/CardCreate',
        },
        // 卡发行
        {
          path: '/card-coupon-manage/card-manage/card-publish',
          code: 'card-publish',
          access: 'canAdmin',
          name: 'card-publish',
          component: './CardCouponManage/CardManage/CardPublish',
        },
        // 卡激活
        {
          path: '/card-coupon-manage/card-manage/card-active',
          code: 'card-active',
          access: 'canAdmin',
          name: 'card-active',
          component: './CardCouponManage/CardManage/CardActive',
        },
        // 卡管理
        {
          path: '/card-coupon-manage/card-manage/card-manage-manage',
          code: 'card-manage-manage',
          access: 'canAdmin',
          name: 'card-manage-manage',
          component: './CardCouponManage/CardManage/Manage',
        },
        // 卡管理 - 查看
        {
          path: '/card-coupon-manage/card-manage/card-manage-manage/card-manage-view/:id/:cardCode/:mode',
          hideInMenu: true,
          name: 'card-manage-manage-view',
          component: './CardCouponManage/CardManage/Manage/children',
        },
        // // 卡管理 - 更多操作
        {
          path: '/card-coupon-manage/card-manage/card-manage-manage/card-manage-more/:id/:cardCode/:mode',
          hideInMenu: true,
          name: 'card-manage-manage-more',
          component: './CardCouponManage/CardManage/Manage/children',
        },
        // // 卡管理 - 卡操作单据查询
        {
          path: '/card-coupon-manage/card-manage/card-manage-manage/card-manage-more/card-operation-query/:id/:cardCode',
          hideInMenu: true,
          name: 'card-operation-query',
          component: './CardCouponManage/CardManage/Manage/cardOperationQuery',
        },
        // 卡类型变更
        {
          path: '/card-coupon-manage/card-manage/card-type-change',
          code: 'card-type-change',
          access: 'canAdmin',
          name: 'card-type-change',
          component: './CardCouponManage/CardManage/CardTypeChange',
        },
      ],
    },
    // 券管理
    {
      path: '/card-coupon-manage/coupon-manage',
      code: 'coupon-manage',
      access: 'canAdmin',
      name: 'coupon-manage',
      routes: [
        // 券类型
        {
          path: '/card-coupon-manage/coupon-manage/coupon-type',
          code: 'coupon-type',
          access: 'canAdmin',
          name: 'coupon-type',
          component: './CardCouponManage/CouponManage/CouponType',
        },
        // 券类型新增
        {
          path: '/card-coupon-manage/coupon-manage/coupon-type/:type',
          hideInMenu: true,
          name: 'coupon-type-create',
          component: './CardCouponManage/CouponManage/CouponType/View',
        },
        // 券类型编辑
        {
          path: '/card-coupon-manage/coupon-manage/coupon-type-edit/:type/:id',
          hideInMenu: true,
          name: 'coupon-type-edit',
          component: './CardCouponManage/CouponManage/CouponType/View',
        },
        // 券类型查看
        {
          path: '/card-coupon-manage/coupon-manage/coupon-type-view/:type/:id',
          hideInMenu: true,
          name: 'coupon-type-view',
          component: './CardCouponManage/CouponManage/CouponType/View',
        },
        // 券生成
        {
          path: '/card-coupon-manage/coupon-manage/coupon-create',
          code: 'coupon-create',
          access: 'canAdmin',
          name: 'coupon-create',
          component: './CardCouponManage/CouponManage/CouponCreate',
        },
        // 券发行
        {
          path: '/card-coupon-manage/coupon-manage/coupon-publish',
          code: 'coupon-publish',
          access: 'canAdmin',
          name: 'coupon-publish',
          component: './CardCouponManage/CouponManage/CouponPublish',
        },
        // 券激活
        {
          path: '/card-coupon-manage/coupon-manage/coupon-active',
          code: 'coupon-active',
          access: 'canAdmin',
          name: 'coupon-active',
          component: './CardCouponManage/CouponManage/CouponActive',
        },
        // 券管理
        {
          path: '/card-coupon-manage/coupon-manage/manage',
          code: 'coupon-manage-manage',
          access: 'canAdmin',
          name: 'coupon-manage-manage',
          component: './CardCouponManage/CouponManage/Manage',
        },
        // 券详情 - 查看
        {
          path: '/card-coupon-manage/coupon-manage/manage-view/:id/:ticketCode/:mode',
          hideInMenu: true,
          name: 'coupon-manage-manage-view',
          component: './CardCouponManage/CouponManage/Manage/children',
        },
        // 券详情 - 更多操作
        {
          path: '/card-coupon-manage/coupon-manage/manage-more/:id/:ticketCode/:mode',
          hideInMenu: true,
          name: 'coupon-manage-manage-more',
          component: './CardCouponManage/CouponManage/Manage/children',
        },
        // 券变更
        {
          path: '/card-coupon-manage/coupon-manage/change',
          code: 'coupon-change',
          access: 'canAdmin',
          name: 'coupon-change',
          component: './CardCouponManage/CouponManage/CouponTypeChange',
        },
        // 券包
        {
          path: '/card-coupon-manage/coupon-manage/coupon-bag',
          code: 'coupon-bag',
          access: 'canAdmin',
          name: 'coupon-bag',
          component: './CardCouponManage/CouponManage/CouponBag',
        },
      ],
    },
    // 卡券订单
    {
      path: '/card-coupon-manage/card-order',
      code: 'card-order',
      access: 'canAdmin',
      name: 'card-order',
      routes: [
        // 销售策略-列表
        {
          path: '/card-coupon-manage/card-order/sales-strategy',
          code: 'sales-strategy',
          access: 'canAdmin',
          name: 'sales-strategy',
          component: './CardCouponManage/SalesStrategy',
        },
        // 销售策略-新增
        {
          path: '/card-coupon-manage/card-order/sales-strategy/create/:modeType/:templateName/:templateType',
          name: 'sales-strategy-create',
          hideInMenu: true,
          component: './CardCouponManage/SalesStrategy/view',
        },
        {
          path: '/card-coupon-manage/card-order/sales-strategy/created/:modeType/:templateName/:templateType/:detailId/:activityStatus',
          name: 'sales-strategy-create',
          hideInMenu: true,
          component: './CardCouponManage/SalesStrategy/view',
        },
        // 销售策略-编辑
        {
          path: '/card-coupon-manage/card-order/sales-strategy/edit/:modeType/:templateName/:templateType/:detailId/:activityStatus',
          name: 'sales-strategy-edit',
          hideInMenu: true,
          component: './CardCouponManage/SalesStrategy/view',
        },
        // 销售策略-查看
        {
          path: '/card-coupon-manage/card-order/sales-strategy/view/:modeType/:templateName/:templateType/:detailId',
          name: 'sales-strategy-view',
          hideInMenu: true,
          component: './CardCouponManage/SalesStrategy/view',
        },

        // 卡券下单-列表
        {
          path: '/card-coupon-manage/card-order/card-sales',
          code: 'card-sales',
          access: 'canAdmin',
          name: 'card-sales',
          component: './CardCouponManage/CardOrder/CardSales',
        },
        // 卡券下单-新增
        {
          path: '/card-coupon-manage/card-order/card-sales/create/:mode/:orderType',
          name: 'card-sales-create',
          hideInMenu: true,
          component: './CardCouponManage/CardOrder/CardSales/View',
        },
        // 卡券下单-编辑
        {
          path: '/card-coupon-manage/card-order/card-sales/edit/:mode/:code/:tradeStatus/:orderType/:orderId',
          name: 'card-sales-edit',
          hideInMenu: true,
          component: './CardCouponManage/CardOrder/CardSales/View',
        },
        // 卡券下单-审核
        {
          path: '/card-coupon-manage/card-order/card-sales/audit/:mode/:code/:orderType',
          name: 'card-sales-audit',
          hideInMenu: true,
          component: './CardCouponManage/CardOrder/CardSales/View',
        },
        // 卡券下单-查看
        {
          path: '/card-coupon-manage/card-order/card-sales/view/:mode/:code/:tradeStatus/:orderType',
          name: 'card-sales-view',
          hideInMenu: true,
          component: './CardCouponManage/CardOrder/CardSales/View',
        },
        // 卡券下单-操作
        {
          path: '/card-coupon-manage/card-order/card-sales/operate/:mode/:code/:orderType',
          name: 'card-sales-operate',
          hideInMenu: true,
          component: './CardCouponManage/CardOrder/CardSales/operateView',
        },
        // 卡券销退-列表
        {
          path: '/card-coupon-manage/card-order/card-back',
          code: 'card-back',
          access: 'canAdmin',
          name: 'card-back',
          component: './CardCouponManage/CardBack',
        },
        // 卡券销退-新增
        {
          path: '/card-coupon-manage/card-order/card-back/create/:modeType/:relateOrderType',
          name: 'card-back-create',
          hideInMenu: true,
          component: './CardCouponManage/CardBack/view',
        },
        {
          path: '/card-coupon-manage/card-order/card-back/back/:mode/:modeType/:orderNo',
          name: 'card-back-back',
          hideInMenu: true,
          component: './CardCouponManage/CardBack/view',
        },
        // 卡券销退-审核
        {
          path: '/card-coupon-manage/card-order/card-back/audit/:modeType/:orderNo/:relateOrderType',
          name: 'card-back-audit',
          hideInMenu: true,
          component: './CardCouponManage/CardBack/view',
        },
        // 卡券销退-查看
        {
          path: '/card-coupon-manage/card-order/card-back/view/:modeType/:orderNo/:relateOrderType',
          name: 'card-back-view',
          hideInMenu: true,
          component: './CardCouponManage/CardBack/view',
        },
        // 卡券销退-编辑
        {
          path: '/card-coupon-manage/card-order/card-back/edit',
          name: 'card-back-edit',
          hideInMenu: true,
          component: './CardCouponManage/CardBack/view',
        },
      ],
    },
    // 卡券库存
    {
      path: '/card-coupon-manage/card-stock',
      code: 'card-stock',
      access: 'canAdmin',
      name: 'card-stock',
      routes: [
        // 库存入库
        {
          path: '/card-coupon-manage/card-stock/in-stock',
          code: 'in-stock',
          access: 'canAdmin',
          name: 'in-stock',
          component: './CardCouponManage/CardStock/InStock',
        },
        // 库存出库
        {
          path: '/card-coupon-manage/card-stock/out-stock',
          code: 'out-stock',
          access: 'canAdmin',
          name: 'out-stock',
          component: './CardCouponManage/CardStock/OutOfStock',
        },
        // 库存出库-新增
        {
          path: '/card-coupon-manage/card-stock/out-stock/create/:modeType/:type',
          name: 'out-stock-create',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OutOfStock/edit',
        },
        // 库存出库-查看
        {
          path: '/card-coupon-manage/card-stock/out-stock/view/:modeType/:modeCode/:modeReason/:orderNo/:type',
          name: 'out-stock-view',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OutOfStock/edit',
        },
        // 库存出库-编辑
        {
          path: '/card-coupon-manage/card-stock/out-stock/edit/:modeType/:modeCode/:modeReason/:orderNo/:type',
          name: 'out-stock-edit',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OutOfStock/edit',
        },
        // 订单发行
        {
          path: '/card-coupon-manage/card-stock/order-stock',
          code: 'order-stock',
          access: 'canAdmin',
          name: 'order-stock',
          component: './CardCouponManage/CardStock/OrderOfStock',
        },
        // 订单发行-新增
        {
          path: '/card-coupon-manage/card-stock/order-stock/create/:modeType/:type',
          name: 'order-stock-create',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OrderOfStock/create',
        },
        // 订单发行-查看
        {
          path: '/card-coupon-manage/card-stock/order-stock/view/:modeType/:modeCode/:modeReason/:codeNo',
          name: 'order-stock-view',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OrderOfStock/create',
        },
        // 订单发行-编辑
        {
          path: '/card-coupon-manage/card-stock/order-stock/edit/:modeType/:modeCode/:modeReason/:codeNo',
          name: 'order-stock-edit',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OrderOfStock/create',
        },
        // 订单发行-出库
        {
          path: '/card-coupon-manage/card-stock/out-stock/out/:modeType/:orderNo/:modeReason',
          name: 'out-stock-create',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/OutOfStock/edit',
        },
        // 库存查询
        {
          path: '/card-coupon-manage/card-stock/inquire-stock',
          code: 'inquire-stock',
          access: 'canAdmin',
          name: 'inquire-stock',
          component: './CardCouponManage/CardStock/InquireStock',
        },
        // 卡券库存盘点
        // {
        //   path: '/card-coupon-manage/card-stock/inventory-stock',
        //   code: 'inventory-stock',
        //   // access: 'canAdmin',
        //   name: 'inventory-stock',
        //   component: './CardCouponManage/CardStock/InventoryStock',
        // },
        // 卡券库存盘点-新增
        {
          path: '/card-coupon-manage/card-stock/inventory-stock/create/:mode',
          name: 'inventory-stock-create',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/InventoryStock/create',
        },
        // 卡券库存盘点-编辑
        {
          path: '/card-coupon-manage/card-stock/inventory-stock/edit/:mode',
          name: 'inventory-stock-edit',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/InventoryStock/create',
        },
        // 卡券库存盘点-查看
        {
          path: '/card-coupon-manage/card-stock/inventory-stock/view/:mode/:recordCode',
          name: 'inventory-stock-view',
          hideInMenu: true,
          component: './CardCouponManage/CardStock/InventoryStock/create',
        },
        // 卡券库存汇总
        // {
        //   path: '/card-coupon-manage/card-stock/summary-stock',
        //   code: 'summary-stock',
        //   access: 'canAdmin',
        //   name: 'summary-stock',
        //   component: './CardCouponManage/CardStock/SummaryStock',
        // },
        //卡券进销存汇总
        {
          path: '/card-coupon-manage/card-stock/coupon-invoicing-summary',
          code: 'coupon-invoicing-summary',
          access: 'canAdmin',
          name: 'coupon-invoicing-summary',
          component: './CardCouponManage/CardStock/CouponInvoicingSummary',
        },
      ],
    },
  ],
};
