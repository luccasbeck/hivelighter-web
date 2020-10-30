// ProfileHeader.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import styled from 'styled-components'
import Hexagon from 'react-hexagon'

const ProfileHeaderContainer = styled.div`
  max-width: 690px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 150px;
  margin-bottom: -20px;
  .profile-header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Helvetica Neue';
    font-weight: 500;
    line-height: 110%;
  }
`

const ProfileHeaderContent = ({ number, content }) => {
  return (
    <div className="profile-header-content">
      <span style={{ fontSize: 18, marginBottom: 8, color: '#172136' }}>{number}</span>
      <span style={{ fontSize: 15, color: '#050F23' }}>{content}</span>
    </div>
  )
}

function ProfileHeader(props) {
  const { data } = props

  return (
    <ProfileHeaderContainer>
      <div style={{ width: 98, height: 111 }}>
        <Hexagon
          backgroundImage="/assets/images/face-4.jpg"
          backgroundScale={1.05}
          style={{ stroke: 'none' }}
        />
      </div>
      <ProfileHeaderContent number={data.posts} content={'Hivelights'} />
      <ProfileHeaderContent number={data.followers} content={'Followers'} />
      <ProfileHeaderContent number={data.following} content={'Following'} />
    </ProfileHeaderContainer>
  )
}

export default ProfileHeader
