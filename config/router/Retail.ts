/*
 * @Author: Sirius-kk
 * @Date: 2021-06-25 10:38:00
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-03-23 14:49:52
 * @FilePath: \sell-management-platform\config\router\Retail.ts
 */
export default {
  // 零售管理
  name: 'retail-manage',
  code: 'retail-manage',
  icon: 'table',
  access: 'canAdmin',
  path: '/retail-manage',
  redirect: '/retail-manage/basic-settings/frequency',
  routes: [
    // 基础设置
    {
      path: '/retail-manage/basic-settings',
      name: 'basic-settings',
      access: 'canAdmin',
      code: 'basic-settings',
      routes: [
        // 班次设置
        {
          path: '/retail-manage/basic-settings/frequency',
          access: 'canAdmin',
          name: 'frequency',
          code: 'frequency',
          component: './RetailManage/BasicSetting/Frequency',
        },
        // 机台管理
        {
          path: '/retail-manage/basic-settings/machine-manage',
          access: 'canAdmin',
          name: 'machine-manage',
          code: 'machine-manage',
          component: './RetailManage/BasicSetting/MachineManage',
        },
        // 自动闭店
        {
          path: '/retail-manage/basic-settings/auto-close',
          access: 'canAdmin',
          name: 'auto-close',
          code: 'auto-close',
          component: './RetailManage/BasicSetting/AutoClose',
        },
        // 系统设置
        {
          path: '/retail-manage/basic-settings/system-setting',
          access: 'canAdmin',
          name: 'system-setting',
          code: 'system-setting',
          component: './RetailManage/BasicSetting/SystemSetting',
        },
        // 原因信息
        {
          path: '/retail-manage/basic-settings/reason-information',
          access: 'canAdmin',
          name: 'reason-information',
          code: 'reason-information',
          component: './RetailManage/BasicSetting/ReasonInformation',
        },
      ],
    },
    // 操作配置
    {
      path: '/retail-manage/operation-settings',
      code: 'operation-settings',
      access: 'canAdmin',
      name: 'operation-settings',
      routes: [
        // 客显设置
        {
          path: '/retail-manage/operation-settings/customer-setting',
          code: 'customer-setting',
          access: 'canAdmin',
          name: 'customer-setting',
          component: './RetailManage/OperationSetting/CustomerDispalySettings',
        },
        // 快捷键设置
        {
          path: '/retail-manage/operation-settings/shortcut-setting',
          code: 'shortcut-setting',
          access: 'canAdmin',
          name: 'shortcut-setting',
          component: './RetailManage/OperationSetting/ShortcutKeySettings',
        },
      ],
    },
    // 支付配置
    {
      path: '/retail-manage/payment-allocation',
      code: 'payment-allocation',
      access: 'canAdmin',
      name: 'payment-allocation',
      routes: [
        // 款别分类
        {
          path: '/retail-manage/payment-allocation/category-classification',
          code: 'category-classification',
          access: 'canAdmin',
          name: 'category-classification',
          component: './RetailManage/PaymentAllocation/CategoryClassification',
        },
        // 款别明细
        {
          path: '/retail-manage/payment-allocation/account-details',
          code: 'account-details',
          access: 'canAdmin',
          name: 'account-details',
          component: './RetailManage/PaymentAllocation/AccountDetails',
        },
        // 款别明细新增
        {
          path: '/retail-manage/payment-allocation/account-details/:mode',
          name: 'account-details-create',
          hideInMenu: true,
          component: './RetailManage/PaymentAllocation/AccountDetails/Operation',
        },
        // 款别明细编辑
        {
          path: '/retail-manage/payment-allocation/account-details/:id/:mode',
          hideInMenu: true,
          name: 'account-details-edit',
          component: './RetailManage/PaymentAllocation/AccountDetails/Operation',
        },
        // 款别明细查看
        {
          path: '/retail-manage/payment-allocation/account-details/:id/:mode',
          name: 'account-details-view',
          hideInMenu: true,
          component: './RetailManage/PaymentAllocation/AccountDetails/Operation',
        },
      ],
    },
    // 模板设置
    {
      path: '/retail-manage/template-setting',
      code: 'template-setting',
      access: 'canAdmin',
      name: 'template-setting',
      routes: [
        // 盘点模板
        {
          path: '/retail-manage/template-setting/inventory-template',
          code: 'inventory-template',
          access: 'canAdmin',
          name: 'inventory-template',
          component: './RetailManage/Template/Inventory',
        },
        // 盘点模板 - 新增
        {
          path: '/retail-manage/template-setting/inventory-template/:mode',
          hideInMenu: true,
          name: 'inventory-create',
          component: './RetailManage/Template/Inventory/children',
        },
        // 盘点模板 - 编辑
        {
          path: '/retail-manage/template-setting/inventory-template/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'inventory-edit',
          component: './RetailManage/Template/Inventory/children',
        },
        // 盘点模板 - 查看
        {
          path: '/retail-manage/template-setting/inventory-template/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'inventory-view',
          component: './RetailManage/Template/Inventory/children',
        },
        // 要货模板
        {
          path: '/retail-manage/template-setting/import-mould',
          code: 'import-mould',
          access: 'canAdmin',
          name: 'import-mould',
          component: './RetailManage/Template/ImportMouldList',
        },
        // 要货模板配置列表 - 新增
        {
          path: '/retail-manage/template-setting/import-mould/import-mould-list/:mode',
          hideInMenu: true,
          name: 'import-mould-create',
          component: './RetailManage/Template/ImportMouldList/children',
        },
        // 要货模板配置列表 - 查看
        {
          path: '/retail-manage/template-setting/import-mould/import-mould-list/:id/:templateCode/:mode',
          hideInMenu: true,
          name: 'import-mould-view',
          component: './RetailManage/Template/ImportMouldList/children',
        },
        // 要货模板配置列表 - 编辑
        {
          path: '/retail-manage/template-setting/import-mould/import-mould-list/:id/:templateCode/:mode',
          hideInMenu: true,
          name: 'import-mould-edit',
          component: './RetailManage/Template/ImportMouldList/children',
        },
        // 生产模板
        {
          path: '/retail-manage/template-setting/production-mould',
          code: 'production-mould',
          access: 'canAdmin',
          name: 'production-mould',
          component: './RetailManage/Template/ProductionMouldList',
        },
        // 生产模板配置列表 - 新增
        {
          path: '/retail-manage/template-setting/production-mould/production-mould-list/:mode',
          hideInMenu: true,
          name: 'production-mould-create',
          component: './RetailManage/Template/ProductionMouldList/children',
        },
        // 生产模板配置列表 - 查看
        {
          path: '/retail-manage/template-setting/production-mould/production-mould-list/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'production-mould-view',
          component: './RetailManage/Template/ProductionMouldList/edit',
        },
        // 生产模板配置列表 - 编辑
        {
          path: '/retail-manage/template-setting/production-mould/production-mould-list/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'production-mould-edit',
          component: './RetailManage/Template/ProductionMouldList/edit',
        },
        // 提报模板
        {
          path: '/retail-manage/template-setting/raise-report-module',
          code: 'raise-report-module',
          access: 'canAdmin',
          name: 'raise-report-module',
          component: './RetailManage/Template/RaiseReportModule',
        },
        // 提报模板 - 分类列表
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-classification/:templateCode',
          hideInMenu: true,
          name: 'raise-report-classification',
          component: './RetailManage/Template/RaiseReportModule/classification',
        },
        // 提报模板 - 分类列表 - 新建分类
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-classification-create/:mode/:templateCode',
          hideInMenu: true,
          name: 'raise-report-classification-create',
          component: './RetailManage/Template/RaiseReportModule/classificationChildren',
        },
        // 提报模板 - 分类列表 - 编辑分类
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-classification-edit/:mode/:templateCode/:id',
          hideInMenu: true,
          name: 'raise-report-classification-edit',
          component: './RetailManage/Template/RaiseReportModule/classificationChildren',
        },
        // 提报模板 - 分类列表 - 查看分类
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-classification-view/:mode/:templateCode/:id',
          hideInMenu: true,
          name: 'raise-report-classification-view',
          component: './RetailManage/Template/RaiseReportModule/classificationChildren',
        },
        // 提报模板 - 明细列表
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-detail/:templateCode',
          hideInMenu: true,
          name: 'raise-report-detail',
          component: './RetailManage/Template/RaiseReportModule/detail',
        },
        // 提报模板 - 明细列表 - 新增明细
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-detail-create/:mode/:templateCode',
          hideInMenu: true,
          name: 'raise-report-detail-create',
          component: './RetailManage/Template/RaiseReportModule/detailChildren',
        },
        // 提报模板 - 明细列表 - 编辑明细
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-detail-edit/:mode/:code/:templateCode',
          hideInMenu: true,
          name: 'raise-report-detail-edit',
          component: './RetailManage/Template/RaiseReportModule/detailChildren',
        },
        // 提报模板 - 明细列表 - 查看明细
        {
          path: '/retail-manage/template-setting/raise-report-module/raise-report-detail-view/:mode/:code/:templateCode',
          hideInMenu: true,
          name: 'raise-report-detail-view',
          component: './RetailManage/Template/RaiseReportModule/detailChildren',
        },
        // 自检模板
        {
          path: '/retail-manage/template-setting/self-inspect-module',
          code: 'self-inspect-module',
          access: 'canAdmin',
          name: 'self-inspect-module',
          component: './RetailManage/Template/SelfInspection',
        },
        // 自检模板 - 分类列表
        {
          path: '/retail-manage/template-setting/self-inspect-module/self-inspect-classification/:templateCode',
          hideInMenu: true,
          name: 'self-inspect-classification',
          component: './RetailManage/Template/SelfInspection/classification',
        },
        // 自检模板 - 分类列表 - 新建分类
        {
          path: '/retail-manage/template-setting/self-inspect-module/self-inspect-classification-create/:mode/:templateCode',
          hideInMenu: true,
          name: 'self-inspect-classification-create',
          component: './RetailManage/Template/SelfInspection/classificationChildren',
        },
        // 自检模板 - 分类列表 - 编辑分类
        {
          path: '/retail-manage/template-setting/self-inspect-module/self-inspect-classification-edit/:mode/:templateCode/:id',
          hideInMenu: true,
          name: 'self-inspect-classification-edit',
          component: './RetailManage/Template/SelfInspection/classificationChildren',
        },
        // 自检模板 - 分类列表 - 查看分类
        {
          path: '/retail-manage/template-setting/self-inspect-module/self-inspect-classification-view/:mode/:templateCode/:id',
          hideInMenu: true,
          name: 'self-inspect-classification-view',
          component: './RetailManage/Template/SelfInspection/classificationChildren',
        },
        // 自检模板 - 明细列表
        {
          path: '/retail-manage/template-setting/self-inspect-module/self-inspect-detail/:templateCode',
          hideInMenu: true,
          name: 'self-inspect-detail',
          component: './RetailManage/Template/SelfInspection/detail',
        },
        // 采购列表
        {
          path: '/retail-manage/template-setting/purchase-mould-list',
          code: 'purchase-mould-list',
          access: 'canAdmin',
          name: 'purchase-mould-list',
          component: './RetailManage/Template/PurchaseMouldList',
        },
        // 采购模板配置列表 - 新增
        {
          path: '/retail-manage/template-setting/purchase-mould-list/:mode',
          hideInMenu: true,
          name: 'purchase-mould-list-create',
          component: './RetailManage/Template/PurchaseMouldList/children',
        },
        // 采购模板配置列表 - 查看
        {
          path: '/retail-manage/template-setting/purchase-mould-list/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'purchase-mould-list-view',
          component: './RetailManage/Template/PurchaseMouldList/edit',
        },
        // 采购模板配置列表 - 编辑
        {
          path: '/retail-manage/template-setting/purchase-mould-list/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'purchase-mould-list-edit',
          component: './RetailManage/Template/PurchaseMouldList/edit',
        },
        // 申请模版列表
        {
          path: '/retail-manage/template-setting/transfer-application-list',
          code: 'transfer-application-list',
          // access: 'canAdmin',
          name: 'transfer-application-list',
          component: './RetailManage/Template/TransferApplication',
        },
        // 申请模板配置列表 - 新增
        {
          path: '/retail-manage/template-setting/transfer-application-add/:mode',
          hideInMenu: true,
          name: 'transfer-application-add',
          component: './RetailManage/Template/TransferApplication/children',
        },
        // 申请模板配置列表 - 查看
        {
          path: '/retail-manage/template-setting/transfer-application-view/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'transfer-application-view',
          component: './RetailManage/Template/TransferApplication/edit',
        },
        // 申请模板配置列表 - 编辑
        {
          path: '/retail-manage/template-setting/transfer-application-edit/:id/:recordCode/:mode',
          hideInMenu: true,
          name: 'transfer-application-edit',
          component: './RetailManage/Template/TransferApplication/edit',
        },
      ],
    },
    // 店群设置
    {
      path: '/retail-manage/store-group',
      code: 'store-group',
      access: 'canAdmin',
      name: 'store-group',
      routes: [
        // 店群列表
        {
          path: '/retail-manage/store-group/store-group-settings',
          code: 'store-group-settings',
          access: 'canAdmin',
          name: 'store-group-settings',
          component: './RetailManage/StoreGroup',
        },
        // 店群 - 新增
        {
          path: '/retail-manage/store-group/store-group-settings/store-group-list/:modeType',
          hideInMenu: true,
          name: 'store-group-create',
          component: './RetailManage/StoreGroup/edit',
        },
        // 店群 - 编辑
        {
          path: '/retail-manage/store-group/store-group-settings/store-group-list/:id/:orderCode/:modeType',
          hideInMenu: true,
          name: 'store-group-edit',
          component: './RetailManage/StoreGroup/edit',
        },
        // 店群 - 查看
        {
          path: '/retail-manage/store-group/store-group-settings/store-group-list/:orderCode/:modeType',
          hideInMenu: true,
          name: 'store-group-view',
          component: './RetailManage/StoreGroup/edit',
        },
      ],
    },
    // 要货菜单
    {
      path: '/retail-manage/order-menu',
      code: 'order-menu',
      access: 'canAdmin',
      name: 'order-menu',
      component: './RetailManage/OrderMenu',
      routes: [
        // 要货列表
        // {
        //   path: '/retail-manage/order-menu/order-menu-list',
        //   code: 'order-menu-list',
        //   // // // access: 'canAdmin',
        //   name: 'order-menu-list',
        //   component: './RetailManage/OrderMenu',
        // },
        // 要货 - 新增
        {
          path: '/retail-manage/order-menu/:mode',
          hideInMenu: true,
          name: 'order-menu-create',
          component: './RetailManage/OrderMenu/children',
        },
        // 店群 - 编辑
        {
          path: '/retail-manage/order-menu/edit',
          hideInMenu: true,
          name: 'order-menu-edit',
          component: './RetailManage/OrderMenu/children',
        },
        // 店群 - 查看
        {
          path: '/retail-manage/order-menu/view',
          hideInMenu: true,
          name: 'order-menu-view',
          component: './RetailManage/OrderMenu/children',
        },
      ],
    },
    // POS版本设置
    {
      path: '/retail-manage/edition-control',
      code: 'edition-control',
      access: 'canAdmin',
      name: 'edition-control',
      component: './RetailManage/POSEditionControl',
      routes: [
        // POS版本设置 - 新增
        {
          path: '/retail-manage/edition-control/:mode',
          hideInMenu: true,
          name: 'edition-control-create',
          component: './RetailManage/POSEditionControl/children',
        },
        // POS版本设置 - 编辑
        {
          path: '/retail-manage/edition-control/:id/:mode',
          hideInMenu: true,
          name: 'edition-control-edit',
          component: './RetailManage/POSEditionControl/children',
        },
        // POS版本设置 - 查看
        {
          path: '/retail-manage/edition-control/:id/:mode',
          hideInMenu: true,
          name: 'edition-control-view',
          component: './RetailManage/POSEditionControl/children',
        },
      ]
    },
    // 分账规则设置
    {
      path: '/retail-manage/splitting-rules-setting',
      code: 'splitting-rules-setting',
      access: 'canAdmin',
      name: 'splitting-rules-setting',
      component: './RetailManage/SplittingRules',
    },
    // 提报单据列表
    {
      path: '/retail-manage/raise-report-list',
      code: 'raise-report-list',
      access: 'canAdmin',
      name: 'raise-report-list',
      component: './RetailManage/RaiseReportList',
    },
    // 提报单据列表 - 详情
    {
      path: '/retail-manage/raise-report-list/detail/:orderNo',
      hideInMenu: true,
      name: 'raise-report-list-detail',
      component: './RetailManage/RaiseReportList/children',
    },
  ],
};
