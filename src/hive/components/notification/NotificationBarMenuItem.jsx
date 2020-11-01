// NotificationBarMenuItem.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import Hexagon from 'react-hexagon'
import styled from 'styled-components'
import moment from 'moment'
import FollowButton from './FollowButton'

const MenuItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
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

function NotificationBarMenuItem(props) {
  const { data } = props
  let action = undefined
  switch (data.type) {
    case 1:
      action = ' just liked your highlight on'
      break
    case 2:
      action = ' just started following you'
      break
    case 3:
      action = ` says “${data.msg ?? ''}”`
      break
    case 4:
      action = ` says “${data.msg ?? ''}”`
      break
    case 5:
      action = ' just read your hivelight'
      break
    case 6:
      action = ' just reshared your hivelight on'
      break
  }
  const title = data.title

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
        style={{ marginLeft: 12, marginRight: 12, flex: 1 }}
      >
        <div>
          <span>{data.actor.firstname}</span>
          {action && (
            <span
              style={{
                fontWeight: 400,
              }}
            >
              {action}
            </span>
          )}
        </div>
        {title && (
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 11,
            }}
          >
            “{title}”
          </span>
        )}
        <span
          style={{
            color: '#9CABC9',
            fontSize: 11,
            fontStyle: 'normal',
            fontWeight: 'normal',
            marginTop: 8,
          }}
        >
          {moment(data.date, 'YYYYMMDD').fromNow()}
        </span>
      </div>
      <FollowButton data={data} />
    </MenuItemContainer>
  )
}

export default NotificationBarMenuItem
