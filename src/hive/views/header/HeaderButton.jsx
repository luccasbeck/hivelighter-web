//
// HeaderButton.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-11
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  button: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1rem',
    borderRadius: 0,
    flex: 1,
    color: (active) => (active === true ? '#0B1528' : '#9CABC9'),
  },
  bar: {
    backgroundColor: (active) => (active === true ? '#102041' : 'transparent'),
    height: '2px',
    width: '100%',
    position: 'absolute',
    bottom: '-2px',
  },
})

const HeaderButton = ({ active, ...rest }) => {
  const classes = useStyles(active)
  return (
    <div className={`h-100 flex ${classes.container}`}>
      <Button className={classes.button} {...rest} />
      <div className={classes.bar} />
    </div>
  )
}

HeaderButton.propTypes = {
  active: PropTypes.bool,
}

export default HeaderButton
