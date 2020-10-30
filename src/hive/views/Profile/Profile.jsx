// Profile.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import HiveCard from '../../components/hivecard/HiveCard'
import ProfileHeader from '../../components/profile/ProfileHeader'
import ProfileContent from '../../components/profile/ProfileContent'
import { getProfile } from 'app/redux/actions/ProfileActions'
import { getMainList } from 'app/redux/actions/HiveListActions'
import { ME_LIST_PATH } from 'app/config'

const ProfileContainer = styled.div`
  background-color: #f2f5f7;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding-top: 32px;
  min-height: calc(100vh - 76px);
`

function Profile(props) {
  const { profile, getProfile, hiveList, getMainList } = props
  const profileData = { ...profile.data }
  const [isEdit, setIsEdit] = useState(false)

  const data = hiveList.data.map((item) => {
    return { ...item }
  })

  useEffect(() => {
    getProfile()
  }, [getProfile])

  useEffect(() => {
    getMainList(profile.uuid, ME_LIST_PATH)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMainList])

  return (
    <ProfileContainer>
      <ProfileHeader data={profileData} />
      <ProfileContent
        data={profileData}
        isEdit={isEdit}
        onSetEdit={(value) => setIsEdit(value)}
      />
      {!isEdit && data.map((item, index) => <HiveCard key={index} data={item} />)}
    </ProfileContainer>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  hiveList: state.hiveList,
})

export default connect(mapStateToProps, { getProfile, getMainList })(Profile)
