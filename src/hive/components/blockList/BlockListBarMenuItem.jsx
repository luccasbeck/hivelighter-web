// NotificationBarMenuItem.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import Hexagon from 'react-hexagon'
import styled from 'styled-components'
import BlockButton from './BlockButton'

const MenuItemContainer = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .notification-info span {
    font-family: Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 110%;
    color: #172136;
  }
`

function BlockListBarMenuItem(props) {
  const { data } = props

  return (
    <MenuItemContainer>
      <div style={{ width: 40, height: 44 }}>
        <Hexagon
          backgroundImage="/assets/images/face-4.jpg"
          backgroundScale={1.05}
          style={{ stroke: 'none' }}
        />
      </div>
      <div
        className="flex flex-column notification-info"
        style={{ flex: 1, marginLeft: 8 }}
      >
        <span>{`${data.lastname} ${data.firstname}`}</span>
      </div>
      <BlockButton data={data} />
    </MenuItemContainer>
  )
}

export default BlockListBarMenuItem
