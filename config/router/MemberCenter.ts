/*
 * @Author: Sirius-kk
 * @Date: 2021-06-16 11:55:55
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-04-22 15:28:21
 * @FilePath: \sell-management-platform\config\router\MemberCenter.ts
 */
export default {
  // 会员中心
  name: 'member-center',
  code: 'member-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/member-center',
  redirect: '/member-center/member-manage/manage-type',
  routes: [
    // 会员管理
    {
      path: '/member-center/member-manage',
      code: 'member-manage',
      access: 'canAdmin',
      name: 'member-manage',
      routes: [
        // 会员类型管理
        {
          path: '/member-center/member-manage/manage-type',
          code: 'manage-type',
          access: 'canAdmin',
          name: 'manage-type',
          component: './MemberCenter/MemberManage/Type',
        },
        // 会员类型管理 - 新增
        {
          path: '/member-center/member-manage/manage-type/create/:mode',
          hideInMenu: true,
          name: 'type-create',
          component: './MemberCenter/MemberManage/Type/children',
        },
        // 会员类型管理 - 查看
        {
          path: '/member-center/member-manage/manage-type/view/:id/:mode',
          hideInMenu: true,
          name: 'type-view',
          component: './MemberCenter/MemberManage/Type/children',
        },
        // 会员类型管理 - 编辑
        {
          path: '/member-center/member-manage/manage-type/edit/:id/:mode',
          hideInMenu: true,
          name: 'type-edit',
          component: './MemberCenter/MemberManage/Type/children',
        },
        // 会员渠道管理
        {
          path: '/member-center/member-manage/manage-channel',
          code: 'manage-channel',
          access: 'canAdmin',
          name: 'manage-channel',
          component: './MemberCenter/MemberManage/Channel',
        },
        // 会员渠道管理 - 新增
        {
          path: '/member-center/member-manage/manage-channel/create/:mode',
          hideInMenu: true,
          name: 'channel-create',
          component: './MemberCenter/MemberManage/Channel/children',
        },
        // 会员渠道管理 - 查看
        {
          path: '/member-center/member-manage/manage-channel/view/:id/:mode',
          hideInMenu: true,
          name: 'channel-view',
          component: './MemberCenter/MemberManage/Channel/children',
        },
        // 会员渠道管理 - 编辑
        {
          path: '/member-center/member-manage/manage-channel/edit/:id/:mode',
          hideInMenu: true,
          name: 'channel-edit',
          component: './MemberCenter/MemberManage/Channel/children',
        },
        // 晋级规则
        {
          path: '/member-center/member-manage/manage-promotion',
          code: 'manage-promotion',
          access: 'canAdmin',
          name: 'manage-promotion',
          component: './MemberCenter/MemberManage/Promotion',
        },
        // 晋级规则 - 查看
        {
          path: '/member-center/member-manage/manage-promotion/view/:id/:level/:mode',
          hideInMenu: true,
          name: 'promotion-view',
          component: './MemberCenter/MemberManage/Promotion/children',
        },
        // 晋级规则 - 编辑
        {
          path: '/member-center/member-manage/manage-promotion/edit/:id/:level/:mode',
          hideInMenu: true,
          name: 'promotion-edit',
          component: './MemberCenter/MemberManage/Promotion/children',
        },
        // 降级规则
        {
          path: '/member-center/member-manage/manage-demotion',
          code: 'manage-demotion',
          access: 'canAdmin',
          name: 'manage-demotion',
          component: './MemberCenter/MemberManage/Demotion',
        },
        // 降级规则 - 查看
        {
          path: '/member-center/member-manage/manage-demotion/view/:id/:level/:mode',
          hideInMenu: true,
          name: 'demotion-view',
          component: './MemberCenter/MemberManage/Demotion/children',
        },
        // 降级规则 - 编辑
        {
          path: '/member-center/member-manage/manage-demotion/edit/:id/:level/:mode',
          hideInMenu: true,
          name: 'demotion-edit',
          component: './MemberCenter/MemberManage/Demotion/children',
        },
        // 会员查询
        {
          path: '/member-center/member-manage/manage-query',
          code: 'manage-query',
          access: 'canAdmin',
          name: 'manage-query',
          component: './MemberCenter/MemberManage/Query',
        },
        // 会员查询 - 查看
        {
          path: '/member-center/member-manage/manage-query/view/:memberCode/:mode',
          hideInMenu: true,
          name: 'query-view',
          component: './MemberCenter/MemberManage/Query/children',
        },
        // 会员查询 - 编辑
        {
          path: '/member-center/member-manage/manage-query/edit/:memberCode/:mode',
          hideInMenu: true,
          name: 'query-edit',
          component: './MemberCenter/MemberManage/Query/children',
        },
        // 充值记录
        {
          path: '/member-center/member-manage/charge-record',
          code: 'charge-record',
          access: 'canAdmin',
          name: 'charge-record',
          component: './MemberCenter/MemberManage/ChargeRecord',
        },
        // 会员绑定查询
        {
          path: '/member-center/member-manage/member-bind-query',
          code: 'member-bind-query',
          access: 'canAdmin',
          name: 'member-bind-query',
          component: './MemberCenter/MemberManage/Bind',
        },
      ],
    },
    // 积分管理
    {
      path: '/member-center/point-manage',
      code: 'point-manage',
      access: 'canAdmin',
      name: 'point-manage',
      routes: [
        // 积分规则
        {
          path: '/member-center/point-manage/point-rules',
          code: 'point-rules',
          access: 'canAdmin',
          name: 'point-rules',
          component: './MemberCenter/PointManage/Rule',
        },
        // 积分规则 - 查看
        {
          path: '/member-center/point-manage/point-rules/view/:id/:mode',
          hideInMenu: true,
          name: 'point-rules-view',
          component: './MemberCenter/PointManage/Rule/children',
        },
        // 积分规则 - 新建
        {
          path: '/member-center/point-manage/point-rules/edit/:id/:mode',
          hideInMenu: true,
          name: 'point-rules-edit',
          component: './MemberCenter/PointManage/Rule/children',
        },
        // 积分规则 - 新建
        {
          path: '/member-center/point-manage/point-rules/create/:mode',
          hideInMenu: true,
          name: 'point-rules-create',
          component: './MemberCenter/PointManage/Rule/children',
        },
        // 积分抵现规则
        {
          path: '/member-center/point-manage/point-offset',
          code: 'point-offset',
          access: 'canAdmin',
          name: 'point-offset',
          component: './MemberCenter/PointManage/OffsetCashRule',
        },
        // 积分抵现规则 - 查看
        {
          path: '/member-center/point-manage/point-offset/view/:id/:mode',
          hideInMenu: true,
          name: 'offset-view',
          component: './MemberCenter/PointManage/OffsetCashRule/children',
        },
        // 积分抵现规则 - 编辑
        {
          path: '/member-center/point-manage/point-offset/edit/:id/:mode',
          hideInMenu: true,
          name: 'offset-edit',
          component: './MemberCenter/PointManage/OffsetCashRule/children',
        },
        // 积分抵现规则 - 新建
        {
          path: '/member-center/point-manage/point-offset/create/:mode',
          hideInMenu: true,
          name: 'offset-create',
          component: './MemberCenter/PointManage/OffsetCashRule/children',
        },
        // 积分调整
        {
          path: '/member-center/point-manage/point-adjust',
          code: 'point-adjust',
          access: 'canAdmin',
          name: 'point-adjust',
          component: './MemberCenter/PointManage/Adjust',
        },
        // 积分调整 - 查看
        {
          path: '/member-center/point-manage/point-adjust/view/:id/:mode',
          hideInMenu: true,
          name: 'adjust-view',
          component: './MemberCenter/PointManage/Adjust/children',
        },
        // 积分调整 - 新增
        {
          path: '/member-center/point-manage/point-adjust/create/:mode',
          hideInMenu: true,
          name: 'adjust-create',
          component: './MemberCenter/PointManage/Adjust/children',
        },
        // 积分调整 - 编辑
        {
          path: '/member-center/point-manage/point-adjust/edit/:id/:mode',
          hideInMenu: true,
          name: 'adjust-edit',
          component: './MemberCenter/PointManage/Adjust/children',
        },
        // 积分清零
        {
          path: '/member-center/point-manage/point-clearing',
          code: 'point-clearing',
          access: 'canAdmin',
          name: 'point-clearing',
          component: './MemberCenter/PointManage/Clearing',
        },
        // 积分清零 - 查看
        {
          path: '/member-center/point-manage/point-clearing/view/:id/:mode',
          hideInMenu: true,
          name: 'clearing-view',
          component: './MemberCenter/PointManage/Clearing/children',
        },
        // 积分清零 - 新增
        {
          path: '/member-center/point-manage/point-clearing/create/:mode',
          hideInMenu: true,
          name: 'clearing-create',
          component: './MemberCenter/PointManage/Clearing/children',
        },
      ],
    },
  ],
};
