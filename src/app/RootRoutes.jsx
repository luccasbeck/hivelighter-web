import React from 'react'
import { Redirect } from 'react-router-dom'

import sessionRoutes from '../hive/views/sessions/SessionRoutes'
import ProfileRoutes from '../hive/views/Profile/ProfileRoutes'
import settingRoutes from '../hive/views/settings/SettingRoutes'
import HiveListRoutes from '../hive/views/HiveList/HiveListRoutes'

const redirectRoute = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/signin" />,
  },
]

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
]

const routes = [
  ...sessionRoutes,
  ...ProfileRoutes,
  ...settingRoutes,
  ...HiveListRoutes,
  ...redirectRoute,
  ...errorRoute,
]

export default routes
