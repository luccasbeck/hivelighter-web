// FollowButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DarkButton from 'egret/components/common/DarkButton'
import { followUser } from 'app/redux/actions/NotificationActions'

const FollowBtn = styled(DarkButton)`
  padding: 5px 16px;
  line-height: 120%;
`

const UnfollowBtn = styled(DarkButton)`
  padding: 5px 16px;
  line-height: 120%;
  color: #102041;
  background-color: white;
  border: 1px solid #e6e9ef;
  &:hover {
    background-color: white;
  }
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
