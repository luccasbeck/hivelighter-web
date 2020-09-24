// FollowButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import styled from 'styled-components'
import DarkButton from 'egret/components/common/DarkButton'

const Button = styled(DarkButton)`
  padding: 5px 16px;
  lineheight: 120%;
`

const FollowButton = () => {
  return <Button>Follow</Button>
}

export default FollowButton
