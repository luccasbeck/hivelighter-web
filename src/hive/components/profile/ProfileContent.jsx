// ProfileContent.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-26
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Button, TextField, makeStyles } from '@material-ui/core'
import { updateProfile } from 'app/redux/actions/ProfileActions'

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
    border-radius: 3px;
    padding: 15px 16px 12px 16px;
    line-height: 1;
  }
  .save-profile-btn {
    font-family: 'Geomanist';
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
    border: 1px solid #75787d;
    border-radius: 3px;
    background: #102041;
    margin-right: 20px;
    padding: 15px 16px 12px 16px;
    line-height: 1;
  }
  .buttonWrapper {
    margin: 20px 10px 10px;
  }
`
const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  flex-basis: 50%;
  .field-label {
    color: #9cabc9;
    margin-bottom: 3px;
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E6E9EF',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E6E9EF',
    },
  },
}))

function ProfileContent(props) {
  const classes = useStyles()
  const { data, isEdit, onSetEdit } = props
  const [profileData, setProfileData] = useState({
    lastname: '',
    firstname: '',
    bio: '',
    username: '',
  })

  const d = useDispatch()

  useEffect(() => {
    if (data) {
      setProfileData({ ...data })
    }
  }, [data])

  const handleSaveProfile = async () => {
    await d(updateProfile(profileData))
    onSetEdit(false)
  }

  const handleChangeData = (event) => {
    setProfileData({ ...profileData, [event.target.name]: event.target.value })
  }

  return (
    <ProfileContentContainer>
      <div className="profile-content">
        {isEdit ? (
          <>
            <div className="flex flex-middle">
              <TextFieldWrapper>
                <label className="field-label">First Name</label>
                <TextField
                  className={classes.root}
                  name="firstname"
                  value={profileData.firstname}
                  onChange={(e) => handleChangeData(e)}
                  variant="outlined"
                />
              </TextFieldWrapper>
              <TextFieldWrapper>
                <label className="field-label">Second Name</label>
                <TextField
                  className={classes.root}
                  name="lastname"
                  value={profileData.lastname}
                  onChange={(e) => handleChangeData(e)}
                  variant="outlined"
                />
              </TextFieldWrapper>
            </div>
            <div className="flex flex-middle mt-20">
              <TextFieldWrapper>
                <label className="field-label">User Name</label>
                <TextField
                  className={classes.root}
                  name="username"
                  value={profileData.username}
                  onChange={(e) => handleChangeData(e)}
                  variant="outlined"
                />
              </TextFieldWrapper>
              <div style={{ margin: '0 10px', flexBasis: '50%' }}></div>
            </div>
            <div className="flex flex-middle mt-20">
              <TextFieldWrapper style={{ flex: 1 }}>
                <label className="field-label">Description</label>
                <TextField
                  className={classes.root}
                  name="bio"
                  value={profileData.bio}
                  onChange={(e) => handleChangeData(e)}
                  multiline
                  rows={5}
                  variant="outlined"
                />
              </TextFieldWrapper>
            </div>
            <div className="buttonWrapper">
              <Button className="save-profile-btn" onClick={handleSaveProfile}>
                Save Changes
              </Button>
              <Button className="edit-profile-btn" onClick={() => onSetEdit(false)}>
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 17, lineHeight: '22px', color: '#172136' }}>
              {`${data.lastname} ${data.firstname}`}
            </h1>
            <p style={{ margin: 0, marginBottom: 20 }}>{data.bio}</p>
            <Button className="edit-profile-btn" onClick={() => onSetEdit(true)}>
              edit profile
            </Button>
          </>
        )}
      </div>
    </ProfileContentContainer>
  )
}

export default ProfileContent
