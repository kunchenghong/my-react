export default {
  name: 'market-center',
  code: 'market-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/market-center',
  redirect: '/market-center/activity-management/list-of-activities',
  routes: [
    // 活动管理
    {
      path: '/market-center/activity-management',
      code: 'activity-management',
      access: 'canAdmin',
      name: 'activity-management',
      routes: [
        // 活动日历
        {
          path: '/market-center/activity-management/calendar',
          code: 'calendar-calendar',
          access: 'canAdmin',
          name: 'calendar-calendar',
          component: './MarketCenter/ActivityManagement/Calendar',
        },
        // 活动列表
        {
          path: '/market-center/activity-management/list-of-activities',
          code: 'list-of-activities',
          access: 'canAdmin',
          name: 'list-of-activities',
          component: './MarketCenter/ActivityManagement/ListOfActivities',
          routes: [
            {
              path: '/market-center/activity-management/list-of-activities/create/:type/:bigBuyer',
              hideInMenu: true,
              name: 'create-activities',
              component: './MarketCenter/ActivityManagement/ListOfActivities/View',
            },
            {
              path:
                '/market-center/activity-management/list-of-activities/edit/:id/:type/:bigBuyer',
              hideInMenu: true,
              name: 'edit-activities',
              component: './MarketCenter/ActivityManagement/ListOfActivities/View',
            },
            {
              path:
                '/market-center/activity-management/list-of-activities/view/:id/:type/:bigBuyer',
              hideInMenu: true,
              name: 'view-activities',
              component: './MarketCenter/ActivityManagement/ListOfActivities/View',
            },
            {
              path:
                '/market-center/activity-management/list-of-activities/audit/:id/:type/:bigBuyer',
              hideInMenu: true,
              name: 'audit-activities',
              component: './MarketCenter/ActivityManagement/ListOfActivities/View',
            },
            {
              path:
                '/market-center/activity-management/list-of-activities/submit/:id/:type/:bigBuyer',
              hideInMenu: true,
              name: 'submit-activities',
              component: './MarketCenter/ActivityManagement/ListOfActivities/SuccessPage',
            },
          ],
        },
        // 活动策略
        {
          path: '/market-center/activity-management/active-policy',
          code: 'active-policy',
          access: 'canAdmin',
          name: 'active-policy',
          component: './MarketCenter/ActivityManagement/ActivePolicy',
        },
        // 奖励策略
        {
          path: '/market-center/activity-management/reward-strategy',
          code: 'reward-strategy',
          access: 'canAdmin',
          name: 'reward-strategy',
          component: './MarketCenter/ActivityManagement/RewardStrategy',
          routes: [
            // 新增奖励策略
            {
              path: '/market-center/activity-management/reward-strategy/create',
              hideInMenu: true,
              name: 'create-reward-strategy',
              component: './MarketCenter/ActivityManagement/RewardStrategy/view',
            },
            // 编辑奖励策略
            {
              path: '/market-center/activity-management/reward-strategy/edit/:id',
              hideInMenu: true,
              name: 'edit-reward-strategy',
              component: './MarketCenter/ActivityManagement/RewardStrategy/view',
            },
            // 查看奖励策略
            {
              path: '/market-center/activity-management/reward-strategy/view/:id',
              hideInMenu: true,
              name: 'view-reward-strategy',
              component: './MarketCenter/ActivityManagement/RewardStrategy/view',
            },
          ],
        },
      ],
    },
    // 营销看板
    {
      path: '/market-center/board',
      code: 'board',
      access: 'canAdmin',
      name: 'board',
      component: './MarketCenter/Board',
    },
    // 活动对比
    {
      path: '/market-center/activity-constract',
      code: 'activity-constract',
      access: 'canAdmin',
      name: 'activity-constract',
      component: './MarketCenter/ActivityConstract',
    },
    // 数据报表
    {
      path: '/market-center/data-report',
      code: 'data-report',
      access: 'canAdmin',
      name: 'data-report',
      component: './MarketCenter/DataReport',
    },
  ],
};
