// FollowButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DarkButton from 'hive/components/common/DarkButton'
import { followUser } from 'app/redux/actions/NotificationActions'
import LightButton from '../common/LightButton'

const FollowBtn = styled(DarkButton)`
  width: 93px;
  height: 24px;
  padding-top: 8px;
`

const UnfollowBtn = styled(LightButton)`
  width: 93px;
  height: 24px;
  padding-top: 8px;
`

const FollowButton = (props) => {
  const { data, followUser } = props
  const [isFollow, setIsFollow] = useState(data.followingActor)

  useEffect(() => {
    if (data) setIsFollow(data.followingActor)
  }, [data])

  const handleFollow = (user_id, follow) => {
    setIsFollow(follow)
    followUser(user_id, follow)
  }

  return (
    <>
      {!isFollow ? (
        <FollowBtn onClick={() => handleFollow(data.actor.uuid, true)}>Follow</FollowBtn>
      ) : (
        <UnfollowBtn onClick={() => handleFollow(data.actor.uuid, false)}>
          Unfollow
        </UnfollowBtn>
      )}
    </>
  )
}

export default connect(null, { followUser })(FollowButton)
