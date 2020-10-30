// NotificationBarMenu.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-24
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React, { Fragment } from 'react'
import { Drawer } from '@material-ui/core'
import styled from 'styled-components'

const BlockListItemWrapper = styled.div`
  padding: 24px;
  width: 320px;
  max-width: 420px;
  max-height: 550px;
  .block-item-container + .block-item-container {
    margin-top: 20px;
  }
`

const BlockListBarContainer = (props) => {
  const { container, open, onSetOpen } = props
  const children = React.Children.toArray(props.children)

  function handleDrawerToggle() {
    onSetOpen(!open)
  }

  return (
    <Fragment>
      <Drawer
        width={'100px'}
        container={container}
        variant="temporary"
        anchor={'right'}
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <BlockListItemWrapper>
          {children.map((child, index) => (
            <div key={index} className="block-item-container">
              {child}
            </div>
          ))}
        </BlockListItemWrapper>
      </Drawer>
    </Fragment>
  )
}

export default BlockListBarContainer
