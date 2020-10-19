import React from 'react'
import { EgretLoadable } from 'egret'

const PrivacyAndTerms = EgretLoadable({
  loader: () => import('./PrivacyAndTerms'),
})

const settingRoutes = [
  {
    path: '/privacy',
    component: () => <PrivacyAndTerms type={'privacy'} />,
  },
  {
    path: '/terms',
    component: () => <PrivacyAndTerms type={'terms'} />,
  },
]

export default settingRoutes
