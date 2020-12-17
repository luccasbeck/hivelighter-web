// ProfileHeader.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { useState } from 'react'
import styled from 'styled-components'
import Hexagon from 'react-hexagon'
import { Button } from '@material-ui/core'
import ProfilePictureDialog from './ProfilePictureDialog'

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
    font-family: 'Helvetica';
    font-weight: 500;
    line-height: 110%;
  }
  .hexagon-containter {
    display: flex;
    align-items: center;
  }
  .change-photo-btn {
    margin-left: 40px;
    font-family: 'Geomanist';
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #102041;
    border: 1px solid #E6E9EF
    border-radius: 2px;
    padding: 10px 10px 7px 10px;
    line-height: 1;
    background: white;
    border: 1px solid #E6E9EF;
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
  const { data, isEdit } = props
  const [showPictureDialog, setShowPictureDialog] = useState(false)

  return (
    <ProfileHeaderContainer>
      <div className="hexagon-containter">
        <div style={{ width: 98, height: 111 }}>
          <Hexagon
            backgroundImage={data.profile_hi_pic}
            backgroundScale={1.05}
            style={{ stroke: 'none' }}
          />
        </div>
        {isEdit && (
          <div>
            <Button
              onClick={() => setShowPictureDialog(true)}
              className="change-photo-btn"
            >
              Change Profile Photo
            </Button>
          </div>
        )}
      </div>
      {!isEdit && (
        <>
          <ProfileHeaderContent number={data.posts} content={'Hivelights'} />
          <ProfileHeaderContent number={data.followers} content={'Followers'} />
          <ProfileHeaderContent number={data.following} content={'Following'} />
        </>
      )}
      <ProfilePictureDialog
        open={showPictureDialog}
        picture={data.profile_origin_pic}
        setOpen={(value) => setShowPictureDialog(value)}
      />
    </ProfileHeaderContainer>
  )
}

export default ProfileHeader
