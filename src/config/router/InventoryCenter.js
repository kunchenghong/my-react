/*
 * @Author: Sirius-kk
 * @Date: 2021-06-25 10:38:00
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-01-21 21:22:29
 * @FilePath: \sell-management-platform\config\router\InventoryCenter.ts
 */
export default {
  // 库存中心
  name: 'inventory-center',
  code: 'inventory-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/inventory-center',
  redirect: '/inventory-center/warehouse-manage/logic-warehouse',
  routes: [
    // 仓库管理
    {
      path: '/inventory-center/warehouse-manage',
      name: 'warehouse-manage',
      code: 'warehouse-manage',
      routes: [
        // 逻辑仓管理
        {
          path: '/inventory-center/warehouse-manage/logic-warehouse',
          access: 'canAdmin',
          name: 'logic-warehouse',
          code: 'logic-warehouse',
          component: './InventoryCenter/WarehouseManage/LogicWarehouse',
        },
        // 逻辑仓管理 - 查看
        {
          path: '/inventory-center/warehouse-manage/logic-warehouse/view/:brandFactory/:mode',
          name: 'logic-warehouse-view',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/LogicWarehouse/view',
        },
        // 逻辑仓管理 - 详情
        {
          path: '/inventory-center/warehouse-manage/logic-warehouse/detail/:realWarehouseCode/:mode',
          name: 'logic-warehouse-detail',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/LogicWarehouse/detail',
        },
        // 虚拟仓管理
        {
          path: '/inventory-center/warehouse-manage/virtual-warehouse',
          access: 'canAdmin',
          name: 'virtual-warehouse',
          code: 'virtual-warehouse',
          component: './InventoryCenter/WarehouseManage/VirtualWarehouse',
        },
        // 虚拟仓管理 - 详情
        {
          path: '/inventory-center/warehouse-manage/virtual-warehouse/detail/:virtualWarehouseCode/:mode',
          name: 'virtual-warehouse-detail',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/VirtualWarehouse/detail',
        },
        // 渠道仓管理
        {
          path: '/inventory-center/warehouse-manage/channel-warehouse',
          access: 'canAdmin',
          name: 'channel-warehouse',
          code: 'channel-warehouse',
          component: './InventoryCenter/WarehouseManage/ChannelWarehouse',
        },
        // 门店关联渠道仓
        {
          path: '/inventory-center/warehouse-manage/store-relate-channel',
          access: 'canAdmin',
          name: 'store-relate-channel',
          code: 'store-relate-channel',
          component: './InventoryCenter/WarehouseManage/StoreRelateChannel',
        },
        // 库存分配策略
        {
          path: '/inventory-center/warehouse-manage/stock-distribution',
          access: 'canAdmin',
          name: 'stock-distribution',
          code: 'stock-distribution',
          component: './InventoryCenter/WarehouseManage/StockDistribution',
        },
        // 库存分配策略 - 新建
        {
          path: '/inventory-center/warehouse-manage/stock-distribution/:mode',
          name: 'stock-distribution-create',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/StockDistribution/detail',
        },
        // 库存分配策略 - 查看
        {
          path: '/inventory-center/warehouse-manage/stock-distribution/view/:policyCode',
          name: 'stock-distribution-view',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/StockDistribution/detail',
        },
        // 库存分配策略 - 编辑
        {
          path: '/inventory-center/warehouse-manage/stock-distribution/:policyCode/:id/:mode',
          name: 'stock-distribution-edit',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/StockDistribution/detail',
        },
        // 库存分配策略 - 关联
        {
          path: '/inventory-center/warehouse-manage/stock-distribution/relation/:policyCode',
          name: 'stock-distribution-relation',
          hideInMenu: true,
          component: './InventoryCenter/WarehouseManage/StockDistribution/relation',
        },
        // 渠道仓库存校正 
        {
          path: '/inventory-center/warehouse-manage/inventory-management',
          access: 'canAdmin',
          name: 'warehouse-manage-inventory-management',
          code: 'warehouse-manage-inventory-management',
          component: './InventoryCenter/WarehouseManage/InventoryManagement',
        },
      ],
    },
    // 标准库存单查询
    {
      path: '/inventory-center/standard-stock',
      name: 'standard-stock',
      access: 'canAdmin',
      code: 'standard-stock',
      routes: [
        // 发货通知单
        {
          path: '/inventory-center/standard-stock/shipping-notice',
          access: 'canAdmin',
          name: 'shipping-notice',
          code: 'shipping-notice',
          component: './InventoryCenter/StandardStock/ShippingNotice',
        },
        // 收货通知单
        {
          path: '/inventory-center/delivery-notice',
          name: 'delivery-notice',
          access: 'canAdmin',
          code: 'delivery-notice',
          component: './InventoryCenter/StandardStock/DeliveryNotice',
        },
        // 发货结果单
        {
          path: '/inventory-center/standard-stock/shipping-result',
          name: 'shipping-result',
          access: 'canAdmin',
          code: 'shipping-result',
          component: './InventoryCenter/StandardStock/ShippingResult',
        },
        // 收货结果单
        {
          path: '/inventory-center/standard-stock/delivery-notice',
          access: 'canAdmin',
          name: 'delivery-result',
          code: 'delivery-result',
          component: './InventoryCenter/StandardStock/DeliveryResult',
        },
      ],
    },
  ],
};
