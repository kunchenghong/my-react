/*
 * @Author: your name
 * @Date: 2021-08-06 10:30:56
 * @LastEditTime: 2022-03-10 14:37:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sell-management-platform\config\router\FinancialReconciliation.ts
 */
export default {
  // 财务管理
  name: 'financial-reconciliation',
  code: 'financial-reconciliation',
  icon: 'table',
  access: 'canAdmin',
  path: '/financial-reconciliation',
  redirect: '/financial-reconciliationr/client-reconciliation/water-import',
  routes: [
    // 大客户对账
    {
      path: '/financial-reconciliationr/client-reconciliation',
      code: 'client-reconciliation',
      access: 'canAdmin',
      name: 'client-reconciliation',
      routes: [
        // 银行流水
        {
          path: '/financial-reconciliationr/client-reconciliation/water-import',
          code: 'water-import',
          access: 'canAdmin',
          name: 'water-import',
          component: './Finance/WaterImport',
        },
        // 回款核销-选择客户
        {
          path: '/financial-reconciliationr/client-reconciliation/select-customer',
          code: 'select-customer',
          access: 'canAdmin',
          name: 'select-customer',
          component: './Finance/SelectCustomer',
        },
        // 回款核销-选择客户-回款核销
        {
          path: '/financial-reconciliationr/client-reconciliation/select-customer/write-off/:recordCode/:mode',
          name: 'select-customer-write-off',
          hideInMenu: true,
          component: './Finance/SelectCustomer/writeOff',
        },
        // 大客户对账-核销记录
        {
          path: '/financial-reconciliationr/client-reconciliation/customer-recording',
          code: 'customer-recording',
          access: 'canAdmin',
          name: 'customer-recording',
          component: './Finance/Recording',
        },
      ],
    },
    // 库存价值查询
    {
      path: '/financial-reconciliationr/inventory-value',
      code: 'inventory-value',
      access: 'canAdmin',
      name: 'inventory-value',
      component: './Finance/Value',
    },
    // 折扣明细报表
    {
      path: '/financial-reconciliationr/discount-details',
      code: 'discount-details',
      access: 'canAdmin',
      name: 'discount-details',
      component: './ReportCenter/FinaceReportForm/DiscountDetails',
    },
    // 月末库存价值查询
    {
      path: '/financial-reconciliationr/month-inventory-value',
      code: 'month-inventory-value',
      access: 'canAdmin',
      name: 'month-inventory-value',
      component: './Finance/MonthValue',
    },
    // 成本核算
    {
      path: '/financial-reconciliationr/cost-account',
      code: 'cost-account',
      access: 'canAdmin',
      name: 'cost-account',
      routes: [
        // 计价方式配置
        {
          path: '/financial-reconciliationr/cost-account/pricing-method-configuration',
          code: 'pricing-method-configuration',
          access: 'canAdmin',
          name: 'pricing-method-configuration',
          component: './Finance/CostAccount/ComputeConfiguration',
        },
        // 自制品成本核算
        {
          path: '/financial-reconciliationr/cost-account/self-made-account',
          code: 'self-made-account',
          access: 'canAdmin',
          name: 'self-made-account',
          component: './Finance/CostAccount/SelfMadeAccount',
        },
        // 发起成本核算
        {
          path: '/financial-reconciliationr/cost-account/self-made-account/childer',
          name: 'self-made-account-childer',
          hideInMenu: true,
          component: './Finance/CostAccount/SelfMadeAccount/childer',
        },
        // 自制品成本核算-查看
        {
          path: '/financial-reconciliationr/cost-account/self-made-account/edit/:year/:month/:storeCode',
          name: 'self-made-account-edit',
          hideInMenu: true,
          component: './Finance/CostAccount/SelfMadeAccount/edit',
        },
        // 自制品成本查询
        {
          path: '/financial-reconciliationr/cost-account/cost-query',
          code: 'cost-query',
          access: 'canAdmin',
          name: 'cost-query',
          component: './Finance/CostAccount/CostQuery',
        },
        // 直接材料成本明细
        {
          path: '/financial-reconciliationr/cost-account/cost-query/childer/:year/:month/:storeCode/:skuCode',
          name: 'cost-query-childer',
          hideInMenu: true,
          component: './Finance/CostAccount/CostQuery/childer',
        },
      ],
    },
    // 核算中心
    {
      path: '/financial-reconciliationr/accounting-center',
      code: 'accounting-center',
      access: 'canAdmin',
      name: 'accounting-center',
      routes: [
        // 行类型定义
        {
          path: '/financial-reconciliationr/accounting-center/row-definition',
          code: 'row-definition',
          access: 'canAdmin',
          name: 'row-definition',
          component: './Finance/CostAccount/RowDefinition',
        },
        // 凭证模版
        {
          path: '/financial-reconciliationr/accounting-center/voucher-template',
          code: 'voucher-template',
          access: 'canAdmin',
          name: 'voucher-template',
          component: './Finance/CostAccount/PricingMethodConfiguration',
        },
        // 凭证模版-新增
        {
          path: '/financial-reconciliationr/accounting-center/voucher-template/add/:modeType',
          code: 'voucher-template-add',
          hideInMenu: true,
          name: 'voucher-template-add',
          component: './Finance/CostAccount/PricingMethodConfiguration/add',
        },
        // 凭证模版-查看
        {
          path: '/financial-reconciliationr/accounting-center/voucher-template/view/:modeType/:id/:tempCode',
          code: 'voucher-template-view',
          hideInMenu: true,
          name: 'voucher-template-view',
          component: './Finance/CostAccount/PricingMethodConfiguration/view',
        },
        // 凭证模版-编辑
        {
          path: '/financial-reconciliationr/accounting-center/voucher-template/edit/:modeType/:id/:tempCode',
          code: 'voucher-template-edit',
          hideInMenu: true,
          name: 'voucher-template-edit',
          component: './Finance/CostAccount/PricingMethodConfiguration/edit',
        },
        // 凭证预览列表
        {
          path: '/financial-reconciliationr/accounting-center/voucher-list',
          code: 'voucher-list',
          access: 'canAdmin',
          name: 'voucher-list',
          component: './Finance/CostAccount/Voucher',
        },
        // 凭证预览-查看
        {
          path: '/financial-reconciliationr/accounting-center/voucher-list/view/:credentialsCode/:id/:modeType',
          code: 'voucher-list-view',
          name: 'voucher-list-view',
          hideInMenu: true,
          component: './Finance/CostAccount/Voucher/view',
        },
        // 核算主数据
        {
          path: '/financial-reconciliationr/accounting-center/accounting-data',
          code: 'accounting-data',
          name: 'accounting-data',
          routes: [
            // 科目主数据
            {
              path: '/financial-reconciliationr/accounting-center/accounting-data/suject',
              code: 'accounting-data-suject',
              access: 'canAdmin',
              name: 'accounting-data-suject',
              component: './Finance/AccountingCenter/AccountingData/suject',
            },
            // 成本中心
            {
              path: '/financial-reconciliationr/accounting-center/accounting-data/cost',
              code: 'accounting-data-cost',
              access: 'canAdmin',
              name: 'accounting-data-cost',
              component: './Finance/AccountingCenter/AccountingData/cost',
            },
            // 利润中心
            {
              path: '/financial-reconciliationr/accounting-center/accounting-data/profit',
              name: 'accounting-data-profit',
              access: 'canAdmin',
              code: 'accounting-data-profit',
              component: './Finance/AccountingCenter/AccountingData/profit',
            },
            // 原因代码   
            {
              path: '/financial-reconciliationr/accounting-center/accounting-data/reason',
              name: 'accounting-data-reason',
              access: 'canAdmin',
              code: 'accounting-data-reason',
              component: './Finance/AccountingCenter/AccountingData/reason',
            },
          ],
        },
        // 映射关系
        {
          path: '/financial-reconciliationr/accounting-center/mapping-relation',
          code: 'mapping-relation',
          access: 'canAdmin',
          name: 'mapping-relation',
          routes: [
            // 款别-科目-客户映射
            {
              path: '/financial-reconciliationr/accounting-center/mapping-relation/customer',
              code: 'mapping-relation-customer',
              access: 'canAdmin',
              name: 'mapping-relation-customer', 
              component: './Finance/MappingRelation/customer',
            },
            // 门店-利润中心映射
            {
              path: '/financial-reconciliationr/accounting-center/mapping-relation/center',
              code: 'mapping-relation-center',
              access: 'canAdmin',
              name: 'mapping-relation-center',
              component: './Finance/MappingRelation/center',
            },
          ],
        },
        // 凭证手动生成
        {
          path: '/financial-reconciliationr/accounting-center/automatic-generated',
          code: 'automatic-generated',
          // access: 'canAdmin',
          name: 'automatic-generated',
          component: './Finance/AutomaticGenerated',
        },
        // 款别过滤
        {
          path: '/financial-reconciliationr/accounting-center/account-filter',
          code: 'accounting-account-filter',
          access: 'canAdmin',
          name: 'accounting-account-filter',
          component: './Finance/AutomaticFilter',
          // component: './Finance/AccountingCenter/AccountingData/cost',
        },
      ],
    },
    // 结算价格维护
    {
      path: '/financial-reconciliationr/settlement-price-maintain',
      code: 'settlement-price-maintain',
      access: 'canAdmin',
      name: 'settlement-price-maintain',
      component: './Finance/PriceMaintain',
    },
    // 结算价格维护 - 新增
    {
      path: '/financial-reconciliationr/settlement-price-maintain/:mode',
      name: 'settlement-price-maintain-create',
      hideInMenu: true,
      component: './Finance/PriceMaintain/children',
    },
    // 结算价格维护 - 编辑
    {
      path: '/financial-reconciliationr/settlement-price-maintain/:mode/:id',
      name: 'settlement-price-maintain-edit',
      hideInMenu: true,
      component: './Finance/PriceMaintain/children',
    },
    // 结算价格维护 - 查看
    {
      path: '/financial-reconciliationr/settlement-price-maintain/:mode/id',
      name: 'settlement-price-maintain-view',
      hideInMenu: true,
      component: './Finance/PriceMaintain/children',
    },
  ],
};
