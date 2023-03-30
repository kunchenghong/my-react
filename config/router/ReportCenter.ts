/*
 * @Author: Sirius-kk
 * @Date: 2021-08-13 17:32:06
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-03-20 19:20:51
 * @FilePath: \sell-management-platform\config\router\ReportCenter.ts
 */
export default {
  // 报表中心
  name: 'report-center',
  code: 'report-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/report-center',
  redirect: '/report-center/finance-report/business-daily-report',
  routes: [
    // 财务报表 - 零售管理的内容
    {
      path: '/report-center/finance-report',
      code: 'finance-report',
      access: 'canAdmin',
      name: 'finance-report',
      routes: [
        // 外卖明细
        {
          path: '/report-center/finance-report/take-out-details',
          code: 'take-out-details',
          access: 'canAdmin',
          name: 'take-out-details',
          component: './ReportCenter/FinaceReportForm/TakeoutFoodDetails',
        },
        // 门店销售收入与成本
        {
          path: '/report-center/finance-report/store-sale-cost',
          code: 'store-sale-cost',
          access: 'canAdmin',
          name: 'store-sale-cost',
          component: './ReportCenter/FinaceReportForm/StoreSaleCost',
        },
        // 营业日报表
        {
          path: '/report-center/finance-report/business-daily-report',
          code: 'business-daily-report',
          access: 'canAdmin',
          name: 'business-daily-report',
          component: './ReportCenter/FinaceReportForm/BusinessDailyReport',
        },
        // 收银汇总表
        {
          path: '/report-center/finance-report/collect-summary',
          code: 'money-collect-summary',
          access: 'canAdmin',
          name: 'money-collect-summary',
          component: './ReportCenter/FinaceReportForm/CollectSummary/index1',
        },
        // 收银汇总表
        {
          path: '/report-center/finance-report/collect-summary-2',
          code: 'money-collect-summary-2',
          // access: 'canAdmin',
          name: 'money-collect-summary-2',
          component: './ReportCenter/FinaceReportForm/CollectSummary/index2',
        },
        // 收银汇总表 - 收款明细
        {
          path: '/report-center/finance-report/collect-summary/collect-summary-detail/:date/:storeCode/:type/:sectionCode',
          hideInMenu: true,
          name: 'collect-summary-detial',
          component: './ReportCenter/FinaceReportForm/CollectSummary/children',
        },
        // 外卖汇总表
        {
          path: '/report-center/finance-report/take-out-summary',
          code: 'take-out-collect-summary',
          access: 'canAdmin',
          name: 'take-out-collect-summary',
          component: './ReportCenter/FinaceReportForm/TakeoutFoodSummary',
        },
        // 卡券订单表
        {
          path: '/report-center/finance-report/card-coupon-summary',
          code: 'card-coupon-summary',
          access: 'canAdmin',
          name: 'card-coupon-summary',
          component: './ReportCenter/FinaceReportForm/CardCouponOrderSummary',
        },
        // 会员充值查询
        {
          path: '/report-center/finance-report/member-recharge',
          code: 'member-recharge',
          access: 'canAdmin',
          name: 'member-recharge',
          component: './ReportCenter/FinaceReportForm/MemberRechargeQuery',
        },
        // 门店预订报表
        {
          path: '/report-center/finance-report/store-book',
          code: 'store-book',
          access: 'canAdmin',
          name: 'store-book',
          component: './ReportCenter/FinaceReportForm/StoreBookList',
        },
        //充值统计报表
        {
          path: '/report-center/finance-report/recharge-statistics',
          code: 'recharge-statistics',
          access: 'canAdmin',
          name: 'recharge-statistics',
          component: './ReportCenter/FinaceReportForm/RechargeStatisticsReport',
        },
        //卡卷退单报表
        {
          path: '/report-center/finance-report/coupon-chargeBack',
          code: 'coupon-chargeBack',
          access: 'canAdmin',
          name: 'coupon-chargeBack',
          component: './ReportCenter/FinaceReportForm/CouponChargeBack',
        },
        // 商品销售明细报表
        {
          path: '/report-center/finance-report/commodity-sale-report',
          code: 'commodity-sale-report',
          access: 'canAdmin',
          name: 'commodity-sale-report',
          component: './ReportCenter/FinaceReportForm/CommoditySaleReport',
        },
        // 收银明细报表
        {
          path: '/report-center/finance-report/cashier-sale-report',
          code: 'cashier-sale-report',
          access: 'canAdmin',
          name: 'cashier-sale-report',
          component: './ReportCenter/FinaceReportForm/CashierSaleReport',
        },
      ],
    },
    //门店销量排行
    {
      path: '/report-center/store-sales-ranking',
      code: 'store-sales-ranking',
      access: 'canAdmin',
      name: 'store-sales-ranking',
      component: './ReportCenter/StoreSalesRanking',
    },
    // 门店库存管理
    {
      path: '/report-center/store-inventory-management',
      code: 'store-inventory-management',
      access: 'canAdmin',
      name: 'store-inventory-management',
      routes: [
        // 门店库存
        {
          path: '/report-center/store-inventory-management/report-store-inventory',
          code: 'report-store-inventory',
          access: 'canAdmin',
          name: 'report-store-inventory',
          component: './ReportCenter/StoreInventoryManagement/StoreInventory',
        },
        // 库存异动明细
        {
          path: '/report-center/store-inventory-management/store-change-details',
          code: 'store-change-details',
          access: 'canAdmin',
          name: 'store-change-details',
          component: './ReportCenter/StoreInventoryManagement/ChangeDetails',
        },
        // 要货汇总
        {
          path: '/report-center/store-inventory-management/import-summary',
          code: 'import-summary',
          access: 'canAdmin',
          name: 'import-summary',
          component: './ReportCenter/StoreInventoryManagement/ImportSummary',
        },
        // 要货记录汇总
        {
          path: '/report-center/store-inventory-management/import-record-summary',
          code: 'import-record-summary',
          access: 'canAdmin',
          name: 'import-record-summary',
          component: './ReportCenter/StoreInventoryManagement/ImportRecordSummary',
        },
        // 进销存汇总
        {
          path: '/report-center/store-inventory-management/invoicing-summary',
          code: 'invoicing-summary',
          access: 'canAdmin',
          name: 'invoicing-summary',
          component: './ReportCenter/StoreInventoryManagement/InvoicingSummary',
        },
        // 门店自采明细查询
        {
          path: '/report-center/store-inventory-management/store-salf-mining',
          code: 'store-salf-mining',
          access: 'canAdmin',
          name: 'store-salf-mining',
          component: './ReportCenter/StoreInventoryManagement/storeSalfMining',
        },
        // 门店调拨明细查询
        {
          path: '/report-center/store-inventory-management/store-transfer',
          code: 'store-transfer',
          access: 'canAdmin',
          name: 'store-transfer',
          component: './ReportCenter/StoreInventoryManagement/storeTransfer',
        },
        // 门店报损明细查询
        {
          path: '/report-center/store-inventory-management/store-damage',
          code: 'store-damage',
          access: 'canAdmin',
          name: 'store-damage',
          component: './ReportCenter/StoreInventoryManagement/storeDamage',
        },
        // 门店退货明细查询
        {
          path: '/report-center/store-inventory-management/store-return',
          code: 'store-return',
          access: 'canAdmin',
          name: 'store-return',
          component: './ReportCenter/StoreInventoryManagement/storeReturn',
        },
        // 门店盘点明细查询
        {
          path: '/report-center/store-inventory-management/store-check',
          code: 'store-check',
          access: 'canAdmin',
          name: 'store-check',
          component: './ReportCenter/StoreInventoryManagement/storeCheck',
        },
        // 门店生产明细查询
        {
          path: '/report-center/store-inventory-management/store-production',
          code: 'store-production',
          access: 'canAdmin',
          name: 'store-production',
          component: './ReportCenter/StoreInventoryManagement/storeProduction',
        },
        // 完工入库汇总
        {
          path: '/report-center/store-inventory-management/bop-finish-storage',
          code: 'bop-finish-storage',
          access: 'canAdmin',
          name: 'bop-finish-storage',
          component: './ReportCenter/StoreInventoryManagement/finishStoreage',
        },
        // 门店收货差异明细查询
        {
          path: '/report-center/store-inventory-management/store-receive',
          code: 'store-receive',
          access: 'canAdmin',
          name: 'store-receive',
          component: './ReportCenter/StoreInventoryManagement/storeReceive',
        },
        // 门店配送收货明细查询
        {
          path: '/report-center/store-inventory-management/store-delivery-receipt',
          code: 'store-delivery-receipt',
          access: 'canAdmin',
          name: 'store-delivery-receipt',
          component: './ReportCenter/StoreInventoryManagement/storeDeliveryReceipt',
        },
      ],
    },
    // 商品报表 finance
    {
      path: '/report-center/commodity-report',
      code: 'commodity-report',
      access: 'canAdmin',
      name: 'commodity-report',
      routes: [
        // 品类销售汇总
        {
          path: '/report-center/commodity-report/commodity-sales-category',
          code: 'commodity-sales-category',
          access: 'canAdmin',
          name: 'commodity-sales-category',
          component: './ReportCenter/CommodityReport/CommoditySalesCategory',
        },
        // 商品销售库存情况
        {
          path: '/report-center/commodity-report/commodity-sales-inventory',
          code: 'commodity-sales-inventory',
          access: 'canAdmin',
          name: 'commodity-sales-inventory',
          component: './ReportCenter/CommodityReport/CommoditySalesInventory',
        },
        {
          // 大客户赊销汇总
          path: '/report-center/commodity-report/big-customer-report',
          code: 'big-customer-report',
          access: 'canAdmin',
          name: 'big-customer-report',
          component: './ReportCenter/CommodityReport/CustomerReport',
        },
        {
          // 销售商品
          path: '/report-center/commodity-report/sales-commodity-report',
          code: 'sales-commodity-report',
          access: 'canAdmin',
          name: 'sales-commodity-report',
          component: './ReportCenter/CommodityReport/SalesCommodity',
        },
        // {
        //   // 大客户赊销汇总
        //   path: '/report-center/commodity-report/discountr-report',
        //   code: 'discountr-report',
        //   // access: 'canAdmin',
        //   name: 'discountr-report',
        //   component: './ReportCenter/CommodityReport/DiscountrReport',
        // },
      ],
    },
    // 订单管理
    {
      path: '/report-center/order-manage',
      code: 'report-order-manage',
      access: 'canAdmin',
      name: 'report-order-manage',
      routes: [
        // 订单列表
        {
          path: '/report-center/order-manage/order-list',
          code: 'report-order-list',
          access: 'canAdmin',
          name: 'report-order-list',
          component: './ReportCenter/OrderManage/OrderList',
        },
        // 预定列表
        {
          path: '/report-center/order-manage/book-list',
          code: 'report-book-list',
          access: 'canAdmin',
          name: 'report-book-list',
          component: './ReportCenter/OrderManage/BookList',
        },
        // 退单列表
        {
          path: '/report-center/order-manage/refund-list',
          code: 'report-refund-list',
          access: 'canAdmin',
          name: 'report-refund-list',
          component: './ReportCenter/OrderManage/RefundList',
        },
        // 订单付款
        // {
        //   path: '/report-center/order-manage/order-pay',
        //   code: 'order-pay',
        //   // access: 'canAdmin',
        //   name: 'order-pay',
        //   component: './ReportCenter/OrderManage/OrderPay',
        // },
      ],
    },
    // 会员拉新统计
    {
      path: '/report-center/member-pull',
      code: 'member-pull',
      access: 'canAdmin',
      name: 'member-pull',
      component: './ReportCenter/MemberAnalysis/MemberPullNew',
    },
    // 券报表
    {
      path: '/report-center/coupon-report',
      code: 'coupon-report',
      access: 'canAdmin',
      name: 'coupon-report',
      routes: [
        // 券核销明细
        {
          path: '/report-center/coupon-report/coupon-detail',
          code: 'coupon-detail',
          access: 'canAdmin',
          name: 'coupon-detail',
          component: './ReportCenter/CouponReport/CouponDetail',
        },
        // 券核销汇总
        {
          path: '/report-center/coupon-report/coupon-summary',
          code: 'coupon-summary',
          access: 'canAdmin',
          name: 'coupon-summary',
          component: './ReportCenter/CouponReport/CouponSummary',
        },
      ],
    },
    // 分账查询
    {
      path: '/report-center/sub-account-query',
      code: 'sub-account-query',
      access: 'canAdmin',
      name: 'sub-account-query',
      component: './ReportCenter/SubAccount',
      routes: [
        // {
        //   // 商品销售汇总
        //   path: '/report-center/sub-account-query/list',
        //   code: 'sub-account-query-list',
        //   // access: 'canAdmin',
        //   name: 'sub-account-query-list',
        //   component: './ReportCenter/SubAccount',
        // },
        {
          // 销售收入明细
          path: '/report-center/sub-account-query/sales/:storeCode/:params',
          hideInMenu: true,
          name: 'sub-account-query-sales',
          component: './ReportCenter/SubAccount/sales',
        },
        {
          // 调拨收入明细
          path: '/report-center/sub-account-query/transfer/:storeCode/:params',
          hideInMenu: true,
          name: 'sub-account-query-transfer',
          component: './ReportCenter/SubAccount/transfer',
        },
        {
          // 损耗明细
          path: '/report-center/sub-account-query/loss/:storeCode/:params',
          hideInMenu: true,
          name: 'sub-account-query-loss',
          component: './ReportCenter/SubAccount/loss',
        },
      ],
    },
    // 门店营业检测
    {
      path: '/report-center/store-bussiness-test',
      code: 'store-bussiness-test',
      access: 'canAdmin',
      name: 'store-bussiness-test',
      routes: [
        // 闭店记录查询
        {
          path: '/report-center/store-bussiness-test/close-record',
          code: 'close-record',
          access: 'canAdmin',
          name: 'close-record',
          component: './ReportCenter/StoreBussinessTest/CloseRecord',
        },
      ],
    },
    //会员汇总查询
    {
      path: '/report-center/member-summary-search',
      code: 'member-summary-search',
      access: 'canAdmin',
      name: 'member-summary-search',
      component: './ReportCenter/MemberSummarySearch',
    },
  ],
};
