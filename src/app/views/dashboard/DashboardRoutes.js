import { EgretLoadable } from 'egret'
import { authRoles } from '../../auth/authRoles'

const LearningManagement = EgretLoadable({
  loader: () => import('./LearningManagement'),
})
const Analytics = EgretLoadable({
  loader: () => import('./Analytics'),
})
const Sales = EgretLoadable({
  loader: () => import('./Sales'),
})
// eslint-disable-next-line no-unused-vars
const Dashboard1 = EgretLoadable({
  loader: () => import('./Dashboard1'),
})

const dashboardRoutes = [
  {
    path: '/dashboard/analytics',
    component: Analytics,
    auth: authRoles.admin,
  },
  {
    path: '/dashboard/sales',
    component: Sales,
    auth: authRoles.admin,
  },
  // {
  //   path: "/dashboard/dashboard1",
  //   component: Dashboard1
  // },
  {
    path: '/dashboard/learning-management',
    component: LearningManagement,
    auth: authRoles.admin,
  },
]

export default dashboardRoutes
