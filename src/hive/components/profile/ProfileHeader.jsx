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

function ProfileHeader() {
  return (
    <ProfileHeaderContainer>
      <div style={{ width: 98, height: 111 }}>
        <Hexagon
          backgroundImage="/assets/images/face-4.jpg"
          backgroundScale={1.05}
          style={{ stroke: 'none' }}
        />
      </div>
      <ProfileHeaderContent number={'1142'} content={'Hivelights'} />
      <ProfileHeaderContent number={'13.2k'} content={'Followers'} />
      <ProfileHeaderContent number={'653'} content={'Following'} />
    </ProfileHeaderContainer>
  )
}

export default ProfileHeader
