//
// HiveCardFooter.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-20
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '12px',
    marginBottom: '2px',
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    color: '#9CABC9',
    fontSize: 14,
  },
}))

const ArticleIcon = styled.img`
  & + & {
    margin-left: 20px;
  }
`

export default function HiveCardFooter(props) {
  const classes = useStyles()
  const { data } = props

  return (
    <>
      <div className={classes.root}>
        <ArticleIcon src="/assets/images/like.svg" className="article-like" alt="like" />
        <ArticleIcon
          src="/assets/images/share.svg"
          className="article-share"
          alt="share"
        />
        <ArticleIcon src="/assets/images/copy.svg" className="article-copy" alt="copy" />
      </div>
      <span className={classes.time}>{moment(data.date, 'YYYYMMDD').fromNow()}</span>
    </>
  )
}
