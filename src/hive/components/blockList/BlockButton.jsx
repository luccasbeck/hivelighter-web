// BlockButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { unblockUser } from 'app/redux/actions/BlockListActions'
import LightButton from '../common/LightButton'

const UnblockBtn = styled(LightButton)`
  width: 93px;
  height: 24px;
  padding-top: 8px;
`

const BlockButton = (props) => {
  const { data, unblockUser } = props

  const handleUnblock = (user_id) => {
    unblockUser(user_id)
  }

  return <UnblockBtn onClick={() => handleUnblock(data.uuid)}>UnBlock</UnblockBtn>
}

export default connect(null, { unblockUser })(BlockButton)
