// ProfileRoutes.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import { EgretLoadable } from 'egret'
import { ME_LIST_PATH, SWARM_LIST_PATH, EVERYONE_LIST_PATH } from 'app/config'

const HiveList = EgretLoadable({
  loader: () => import('./HiveList'),
})

const HiveListRoutes = [
  {
    path: ME_LIST_PATH,
    component: HiveList,
  },
  {
    path: SWARM_LIST_PATH,
    component: HiveList,
  },
  {
    path: EVERYONE_LIST_PATH,
    component: HiveList,
  },
]

export default HiveListRoutes
