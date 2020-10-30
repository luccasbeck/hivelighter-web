//
// HiveCardFooter.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-20
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '9px 16px',
    alignItems: 'center',
    background: '#EBE9F2',
  },
  sentence: {
    color: '#2C0894',
    fontSize: 18,
    marginBottom: 5,
  },
  domain: {
    color: '#172136',
    fontSize: 17,
  },
}))

const ArticleIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
  border-radius: 4px;
`

export default function HiveCardLink(props) {
  const classes = useStyles()
  const { data } = props

  return (
    <div className={classes.root}>
      <ArticleIcon src={data.image} className="article-like" alt="banner" />
      <div className="flex flex-column">
        <span className={classes.sentence}>{data.sentence}</span>
        <span className={classes.domain}>{data.domain}</span>
      </div>
    </div>
  )
}
