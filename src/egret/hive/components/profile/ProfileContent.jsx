// ProfileContent.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const ProfileContentContainer = styled.div`
  background: white;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding 46px 0 20px 0;
  .profile-content {
    margin: 0 auto;
    max-width: 690px;
    font-family: 'Helvetica Neue';
    font-size: 15px;
    line-height: 110%;
    color: #050F23;
  }
  .edit-profile-btn {
    font-family: 'Geomanist';
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #102041;
    border: 1px solid #75787d;
    border-radius: 2px;
    padding: 10px;
  }
`

function ProfileContent() {
  return (
    <ProfileContentContainer>
      <div className="profile-content">
        <h1 style={{ fontSize: 17, lineHeight: '22px', color: '#172136' }}>
          Yerema Garda
        </h1>
        <p style={{ margin: 0, marginBottom: 20 }}>
          I’m UX Designer interested in Design Architecture, philosophy. Finding deepest
          thoughts in simple words more useful than smart-ass verbiage.
        </p>
        <Button className="edit-profile-btn">edit profile</Button>
      </div>
    </ProfileContentContainer>
  )
}

export default ProfileContent
