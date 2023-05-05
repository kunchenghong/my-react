export default {
  name: 'user-center',
  code: 'user-center',
  icon: 'table',
  access: 'canAdmin',
  path: '/user-center',
  redirect: '/user-center/account/organization-and-group',
  routes: [
    // 账户
    {
      path: '/user-center/account',
      code: 'account',
      access: 'canAdmin',
      name: 'account',
      routes: [
        // 机构与组
        {
          path: '/user-center/account/organization-and-group',
          code: 'organization-and-group',
          access: 'canAdmin',
          name: 'organization-and-group',
          component: './UserCenter/Account/OrganizationAndGroup',
        },
        // 员工管理
        {
          path: '/user-center/account/staff-management',
          code: 'staff-management',
          access: 'canAdmin',
          name: 'staff-management',
          component: './UserCenter/Account/StaffManagement',
          routes: [
            {
              path: '/user-center/account/staff-management/staff-info/:id/:accountId',
              code: 'staff-info',
              hideInMenu: true,
              name: 'staff-info',
              component: './UserCenter/Account/StaffManagement/StaffInfo',
            },
          ],
        },
        //POS员工控制
        {
          path: '/user-center/account/pos-staff-control',
          code: 'pos-staff-control',
          access: 'canAdmin',
          name: 'pos-staff-control',
          component: './UserCenter/Account/PosStaffControl',
        },
        // 属性管理
        // {
        //   path: '/user-center/account/organization-property',
        //   code: 'organization-property-management',
        //   access: 'canAdmin',
        //   name: 'organization-property',
        //   component: './UserCenter/Account/PropertyManagement',
        // },
      ],
    },
    // 权限
    {
      path: '/user-center/authority',
      code: 'authority',
      access: 'canAdmin',
      name: 'authority',
      routes: [
        {
          // 权限管理
          path: '/user-center/authority/authority-management',
          code: 'authority-management',
          access: 'canAdmin',
          name: 'authority-management',
          component: './UserCenter/Authority',
          routes: [
            // 资源管理
            {
              path: '/user-center/authority/authority-management/resource-management/:appId/:id/:name',
              name: 'resource-management',
              hideInMenu: true,
              component: './UserCenter/Authority/Resource',
              routes: [
                // 资源管理-导入资源
                {
                  path: '/user-center/authority/authority-management/resource-management/resource-import/:id',
                  hideInMenu: true,
                  name: 'resource-import',
                  component: './UserCenter/Authority/Resource/components/ResourceImport',
                },
              ],
            },
            // 角色管理
            {
              path: '/user-center/authority/authority-management/role-management/:appId/:id',
              hideInMenu: true,
              name: 'role-management',
              component: './UserCenter/Authority/Role',
            },
            // 数据权限
            {
              path: '/user-center/authority/authority-management/role-management/data-permissions/:code',
              hideInMenu: true,
              name: 'role-management-data-autority',
              component: './UserCenter/Authority/DataPermissions',
            },
          ],
        },
        // 折扣管理
        {
          path: '/user-center/authority/discount-management',
          code: 'discount-management',
          access: 'canAdmin',
          name: 'discount-management',
          component: './UserCenter/Authority/Discount',
        },
      ],
    },
    // {
    //   path: '/user-center/authority',
    //   code: 'account-management',
    //   access: 'canAdmin',
    //   name: 'authority',
    //   routes: [
    //     // 个性化设置
    //     {
    //       path: '/user-center/settingUp/personalized-settings',
    //       code: 'account-management',
    //       access: 'canAdmin',
    //       name: 'personalized-settings',
    //       component: './UserCenter/SettingUp/Personnel',
    //     },
    //     // 安全设置
    //     {
    //       path: '/user-center/settingUp/security-settings',
    //       code: 'staff-management',
    //       access: 'canAdmin',
    //       name: 'security-settings',
    //       component: './UserCenter/SettingUp/Security',
    //     },
    //   ],
    // },
    // 设置
    // {
    //   path: '/user-center/settingUp',
    //   code: 'account-management',
    //   access: 'canAdmin',
    //   name: 'settingUp',
    //   routes: [
    //     // 个性化设置
    //     {
    //       path: '/user-center/settingUp/personalized-settings',
    //       code: 'account-management',
    //       access: 'canAdmin',
    //       name: 'personalized-settings',
    //       component: './UserCenter/SettingUp/Personnel',
    //     },
    //     // 安全设置
    //     {
    //       path: '/user-center/settingUp/security-settings',
    //       code: 'staff-management',
    //       access: 'canAdmin',
    //       name: 'security-settings',
    //       component: './UserCenter/SettingUp/Security',
    //     },
    //   ],
    // },
  ],
};
