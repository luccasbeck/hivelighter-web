import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '12px',
    display: 'flex',
    alignItems: 'center',
  },
}))

const ArticleIcon = styled.img`
  & + & {
    margin-left: 20px;
  }
`

export default function HiveCardFooter() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ArticleIcon src="/assets/images/like.svg" className="article-like" alt="like" />
      <ArticleIcon src="/assets/images/share.svg" className="article-share" alt="share" />
      <ArticleIcon src="/assets/images/copy.svg" className="article-copy" alt="copy" />
    </div>
  )
}
