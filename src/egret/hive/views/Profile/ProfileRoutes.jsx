// ProfileRoutes.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import { EgretLoadable } from 'egret'

const Profile = EgretLoadable({
  loader: () => import('./Profile'),
})

const ProfileRoutes = [
  {
    path: '/profile',
    component: Profile,
  },
]

export default ProfileRoutes
