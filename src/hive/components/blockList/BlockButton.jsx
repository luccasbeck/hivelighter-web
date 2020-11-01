// BlockButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DarkButton from 'hive/components/common/DarkButton'
import { unblockUser } from 'app/redux/actions/BlockListActions'

const UnblockBtn = styled(DarkButton)`
  padding: 5px 16px;
  line-height: 120%;
  color: #102041;
  background-color: white;
  border: 1px solid #e6e9ef;
  &:hover {
    background-color: white;
  }
`

const BlockButton = (props) => {
  const { data, unblockUser } = props

  const handleUnblock = (user_id) => {
    unblockUser(user_id)
  }

  return <UnblockBtn onClick={() => handleUnblock(data.uuid)}>UnBlock</UnblockBtn>
}

export default connect(null, { unblockUser })(BlockButton)
