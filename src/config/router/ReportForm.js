/*
 * @Author: Sirius-kk
 * @Date: 2021-05-24 10:12:24
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-01-16 13:41:25
 * @FilePath: \sell-management-platform\config\router\ReportForm.ts
 */
export default {
  // 导出任务
  name: 'report-form',
  code: 'report-form',
  icon: 'table',
  access: 'canAdmin',
  path: '/report-form',
  redirect: '/report-form/export-download',
  routes: [
    // 导出下载
    {
      path: '/report-form/export-download',
      code: 'export-download',
      access: 'canAdmin',
      name: 'export-download',
      component: './ReportForm/ExportDownload',
    },
  ],
};
