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
  display: flex;
  align-items: center;
  justify-content: space-between;
  .notification-info span {
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
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
        style={{ width: '55%', marginLeft: 12 }}
      >
        <span>
          <strong>{`${data.lastname} ${data.firstname}`}</strong>
        </span>
      </div>
      <BlockButton data={data} />
    </MenuItemContainer>
  )
}

export default BlockListBarMenuItem
