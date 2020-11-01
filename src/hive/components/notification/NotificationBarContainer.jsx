// NotificationBarMenu.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'
import styled from 'styled-components'

const NotificationItemWrapper = styled.div`
  padding: 24px;
  outline: none;
  .notification-item-container + .notification-item-container {
    margin-top: 20px;
  }
`

const NotificationBarContainer = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const children = React.Children.toArray(props.children)
  let { horizontalPosition = 'right' } = props

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <div
        style={{ display: 'inline-block' }}
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.menuButton}
      </div>
      <Menu
        elevation={8}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: horizontalPosition,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: horizontalPosition,
        }}
        PaperProps={{
          style: {
            maxHeight: 550,
            width: 420,
            borderRadius: 8,
            marginTop: 20,
          },
        }}
      >
        <NotificationItemWrapper>
          {children.map((child, index) => (
            <div key={index} className="notification-item-container">
              {child}
            </div>
          ))}
        </NotificationItemWrapper>
      </Menu>
    </Fragment>
  )
}

export default NotificationBarContainer
