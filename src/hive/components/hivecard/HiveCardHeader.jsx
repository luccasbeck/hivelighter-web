//
// HiveCardHeader.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-20
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Hexagon from 'react-hexagon'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '16px',
    marginBottom: '-6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '15px',
    color: '#172136',
  },
  userInfo: {
    display: 'inherit',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '44px',
    marginRight: '8px',
  },
}))

export default function HiveCardHeader(props) {
  const classes = useStyles()
  const { data } = props

  return (
    <div className={classes.root}>
      <div className={classes.userInfo}>
        <div className={classes.avatar}>
          <Hexagon
            backgroundImage="/assets/images/face-3.jpg"
            backgroundScale={1.05}
            style={{ stroke: 'none' }}
          />
        </div>
        <span>{data.username}</span>
      </div>
      <IconButton aria-label="settings">
        <MoreHorizIcon />
      </IconButton>
    </div>
  )
}
