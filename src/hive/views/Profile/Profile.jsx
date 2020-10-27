// Profile.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import styled from 'styled-components'
import HiveCard from '../../components/hivecard/HiveCard'
import ProfileHeader from '../../components/profile/ProfileHeader'
import ProfileContent from '../../components/profile/ProfileContent'

const ProfileContainer = styled.div`
  background-color: #f2f5f7;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding-top: 32px;
  min-height: calc(100vh - 76px);
`

function Profile() {
  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileContent />
      <HiveCard />
    </ProfileContainer>
  )
}

export default Profile
