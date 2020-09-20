//
// NotificationBadge.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-15
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import { Badge, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  badge: {
    backgroundColor: '#F90F2B',
    borderRadius: 6,
    border: '1px solid white',
    fontFamily: 'Helvetica Neue Bold',
    fontSize: '8px',
    fontWeight: 'bold',
    lineHeight: 1,
    padding: '0 4px',
    color: 'white',
    top: 3,
    minWidth: 16,
    height: 16,
  },
})

const NotificationBadge = ({ ...rest }) => {
  const classes = useStyles()
  return <Badge classes={classes} {...rest} />
}

export default NotificationBadge
