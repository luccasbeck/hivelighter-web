//
// LightButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-14
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    borderRadius: 3,
    color: '#102041',
    fontFamily: 'Geomanist Medium',
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: 'uppercase',
    lineHeight: 1,
  },
}

function LightButton({ classes, className, ...rest }) {
  return (
    <Button
      variant="outlined"
      color={'secondary'}
      className={clsx(classes.root, className)}
      {...rest}
    />
  )
}

LightButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LightButton)
