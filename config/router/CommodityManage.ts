/*
 * @Author: Sirius-kk
 * @Date: 2021-05-24 10:12:24
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-04-06 13:53:32
 * @FilePath: \sell-management-platform\config\router\CommodityManage.ts
 */
export default {
  // 商品管理
  name: 'commodity-manage',
  code: 'commodity-manage',
  icon: 'table',
  access: 'canAdmin',
  path: '/commodity-manage',
  redirect: '/commodity-manage/commodity-info/brand-manage',
  routes: [
    // 商品信息
    {
      path: '/commodity-manage/commodity-info',
      code: 'commodity-info',
      access: 'canAdmin',
      name: 'commodity-info',
      routes: [
        // 品牌管理
        {
          path: '/commodity-manage/commodity-info/brand-manage',
          code: 'brand-manage',
          access: 'canAdmin',
          name: 'brand-manage',
          component: './CommodityManage/CommodityInfo/BrandManage',
        },
        // 单位管理
        {
          path: '/commodity-manage/commodity-info/unit-manage',
          code: 'unit-manage',
          access: 'canAdmin',
          name: 'unit-manage',
          component: './CommodityManage/CommodityInfo/UnitManage',
        },
        // // 单位管理
        // {
        //   path: '/commodity-manage/commodity-info/label-manage',
        //   // code: 'label-manage',
        //   // // // access: 'canAdmin',
        //   name: 'label-manage',
        //   component: './CommodityManage/CommodityInfo/LabelManage',
        // },
        // 属性管理
        {
          path: '/commodity-manage/commodity-info/attribute-manage',
          code: 'attribute-manage',
          access: 'canAdmin',
          name: 'attribute-manage',
          component: './CommodityManage/CommodityInfo/AttributeManage',
        },
        // 标签管理
        {
          path: '/commodity-manage/commodity-info/label-manage',
          code: 'label-manage',
          access: 'canAdmin',
          name: 'label-manage',
          component: './CommodityManage/CommodityInfo/LabelCenter/LabelManage',
        },
        // 标签管理 - 新建
        {
          path: '/commodity-manage/commodity-info/label-manage/create/:modeType',
          hideInMenu: true,
          name: 'label-manage-create',
          component: './CommodityManage/CommodityInfo/LabelCenter/LabelManage/create',
        },
        // 标签管理 - 查看
        {
          path: '/commodity-manage/commodity-info/label-manage/view/:modeType/:strategyId',
          hideInMenu: true,
          name: 'label-manage-view',
          component: './CommodityManage/CommodityInfo/LabelCenter/LabelManage/create',
        },
        // 标签管理 - 编辑
        {
          path: '/commodity-manage/commodity-info/label-manage/edit/:modeType/:strategyId',
          hideInMenu: true,
          name: 'label-manage-edit',
          component: './CommodityManage/CommodityInfo/LabelCenter/LabelManage/create',
        },
        // 价格查询(零售/进货)
        {
          path: '/commodity-manage/commodity-info/priceQuery-manage',
          code: 'priceQuery-manage',
          access: 'canAdmin',
          name: 'priceQuery-manage',
          component: './CommodityManage/CommodityInfo/PriceQuery',
        },
        // 价格查询 - 门店价格
        {
          path: '/commodity-manage/commodity-info/priceQuery-manage/store-manage',
          hideInMenu: true,
          name: 'storePrice-manage',
          component: './CommodityManage/CommodityInfo/PriceQuery/storePrice',
        },
        // 前台类目 - 适用
        {
          path: '/commodity-manage/commodity-info/front-category-apply',
          code: 'front-category',
          access: 'canAdmin',
          name: 'front-category',
          component: './CommodityManage/CommodityInfo/FrontCategory/categoryApply',
        },
        // 前台类目 - 列表
        {
          path: '/commodity-manage/commodity-info/front-category-apply/front-category/:id/:type',
          hideInMenu: true,
          name: 'front-category-apply',
          component: './CommodityManage/CommodityInfo/FrontCategory',
        },
        // 前台类目-查看商品
        {
          path: '/commodity-manage/commodity-info/front-category-apply/front-category/front-category-view/:id/:initialId/:queryType',
          hideInMenu: true,
          name: 'front-category-view',
          component: './CommodityManage/CommodityInfo/FrontCategory/productView',
        },
        // 后台类目
        {
          path: '/commodity-manage/commodity-info/back-category',
          code: 'back-category',
          access: 'canAdmin',
          name: 'back-category',
          component: './CommodityManage/CommodityInfo/BackCategory',
        },
        // 品类管理
        {
          path: '/commodity-manage/commodity-info/category-manage',
          code: 'category-manage',
          access: 'canAdmin',
          name: 'category-manage',
          component: './CommodityManage/CommodityInfo/CategoryManage',
        },
        // 商品中心
        {
          path: '/commodity-manage/commodity-info/product-center',
          code: 'product-center',
          access: 'canAdmin',
          name: 'product-center',
          component: './CommodityManage/CommodityInfo/ProductCenter',
        },
        // 商品中心 - 新增
        {
          path: '/commodity-manage/commodity-info/product-center/create/:mode',
          hideInMenu: true,
          name: 'product-add',
          component: './CommodityManage/CommodityInfo/ProductCenter/children',
        },
        // 商品中心 - 编辑
        {
          path: '/commodity-manage/commodity-info/product-center/edit/new/:skuCode/:mode/:id/:orgNodeCode',
          hideInMenu: true,
          name: 'product-edit-new',
          component: './CommodityManage/CommodityInfo/ProductCenter/children',
        },
        // 商品中心 - 编辑
        // {
        //   path: '/commodity-manage/commodity-info/product-center/edit/:skuCode/:mode/:id/:orgNodeCode',
        //   hideInMenu: true,
        //   name: 'product-edit',
        //   component: './CommodityManage/CommodityInfo/ProductCenter/create',
        // },
        // 商品中心 - 查看
        {
          path: '/commodity-manage/commodity-info/product-center/view/new/:skuCode/:mode/:orgNodeCode',
          hideInMenu: true,
          name: 'product-view-new',
          component: './CommodityManage/CommodityInfo/ProductCenter/children',
        },
        // 商品中心 - 查看
        // {
        //   path: '/commodity-manage/commodity-info/product-center/view/:skuCode/:mode/:orgNodeCode',
        //   hideInMenu: true,
        //   name: 'product-view',
        //   component: './CommodityManage/CommodityInfo/ProductCenter/create',
        // },
        // 价格策略
        {
          path: '/commodity-manage/commodity-info/product-strategy',
          code: 'product-strategy',
          access: 'canAdmin',
          name: 'product-strategy',
          component: './CommodityManage/CommodityInfo/ProductStrategy',
        },
        // 价格策略 - 新增
        {
          path: '/commodity-manage/commodity-info/product-strategy/create/:mode',
          name: 'product-strategy-create',
          hideInMenu: true,
          component: './CommodityManage/CommodityInfo/ProductStrategy/create',
        },
        // 价格策略 - 编辑
        {
          path: '/commodity-manage/commodity-info/product-strategy/edit/:strategyCode/:mode/:strategyId',
          name: 'product-strategy-edit',
          hideInMenu: true,
          component: './CommodityManage/CommodityInfo/ProductStrategy/edit',
        },
        // 价格策略 - 查看
        {
          path: '/commodity-manage/commodity-info/product-strategy/view/:strategyCode/:mode/:strategyId',
          name: 'product-strategy-view',
          hideInMenu: true,
          component: './CommodityManage/CommodityInfo/ProductStrategy/edit',
        },
        // 商品适用
        {
          path: '/commodity-manage/commodity-info/product-application',
          code: 'product-application',
          access: 'canAdmin',
          name: 'product-application',
          component: './CommodityManage/CommodityInfo/ProductApplication',
        },
        // 商品适用 - 新增 - 待联调
        {
          path: '/commodity-manage/commodity-info/product-application/create/:mode',
          hideInMenu: true,
          name: 'application-create',
          component: './CommodityManage/CommodityInfo/ProductApplication/children',
        },
      ],
    },
    // 配方信息
    {
      path: '/commodity-manage/recipe-info',
      code: 'recipe-info',
      access: 'canAdmin',
      name: 'recipe-info',
      routes: [
        // 配方管理
        // {
        //   path: '/commodity-manage/recipe-info/recipe-manage',
        //   code: 'recipe-manage',
        //   // // access: 'canAdmin',
        //   name: 'recipe-manage',
        //   routes: [
        //     // 成品列表
        //     {
        //       path: '/commodity-manage/recipe-info/recipe-manage/finish-list',
        //       code: 'finish-list',
        //       // // access: 'canAdmin',
        //       name: 'finish-list',
        //       component: './CommodityManage/RecipeInfo/RecipeManage/FinishList',
        //     },
        //     // 配方列表
        //     {
        //       path: '/commodity-manage/recipe-info/recipe-manage/finish-list/recipe-list',
        //       hideInMenu: true,
        //       name: 'recipe-list',
        //       component: './CommodityManage/RecipeInfo/RecipeManage/RecipeList',
        //     },
        //     // 配方列表 - 新增
        //     {
        //       path: '/commodity-manage/recipe-info/recipe-manage/finish-list/recipe-list/children',
        //       hideInMenu: true,
        //       name: 'recipe-add',
        //       component: './CommodityManage/RecipeInfo/RecipeManage/RecipeList/children',
        //     },
        //   ],
        // },
        // 配方列表 - 主
        {
          path: '/commodity-manage/recipe-info/recipe-manage/finish-list',
          code: 'finish-list',
          access: 'canAdmin',
          name: 'finish-list',
          component: './CommodityManage/RecipeInfo/RecipeManage/FinishList',
        },
        // 配方列表
        {
          path: '/commodity-manage/recipe-info/recipe-manage/finish-list/recipe-list/:targetItemCode',
          hideInMenu: true,
          name: 'recipe-list',
          component: './CommodityManage/RecipeInfo/RecipeManage/RecipeList',
        },
        // 配方列表 - 新增
        {
          path: '/commodity-manage/recipe-info/recipe-manage/finish-list/recipe-list/recipe-add/:type/:finishId',
          hideInMenu: true,
          name: 'recipe-add',
          component: './CommodityManage/RecipeInfo/RecipeManage/RecipeList/children',
        },
        // 配方列表 - 查看
        {
          path: '/commodity-manage/recipe-info/recipe-manage/finish-list/recipe-list/recipe-view/:id/:type',
          hideInMenu: true,
          name: 'recipe-view',
          component: './CommodityManage/RecipeInfo/RecipeManage/RecipeList/children',
        },
        // 配方列表 - 编辑
        {
          path: '/commodity-manage/recipe-info/recipe-manage/finish-list/recipe-list/recipe-edit/:id/:type/:finishId',
          hideInMenu: true,
          name: 'recipe-edit',
          component: './CommodityManage/RecipeInfo/RecipeManage/RecipeList/children',
        },
        // 组合拆解
        {
          path: '/commodity-manage/recipe-info/recipe-manage/assembly-disassembly',
          code: 'assembly-disassembly',
          access: 'canAdmin',
          name: 'assembly-disassembly',
          component: './CommodityManage/RecipeInfo/AssemblyAndDisassembly',
        },
        // 拼胚商品
        {
          path: '/commodity-manage/recipe-info/recipe-manage/collage',
          code: 'collage-list',
          access: 'canAdmin',
          name: 'collage-list',
          component: './CommodityManage/RecipeInfo/Collage',
        },
      ],
    },
  ],
};
