//
// HiveCard.jsx
// Hivelighter
//
// Created by Luccas Beck on 2020-09-20
// Copyright © 2020 Hivelighter Inc. All Rights Reserved.

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import HiveCardHeader from './HiveCardHeader'
import HiveCardFooter from './HiveCardFooter'
import HiveCardLink from './HiveCardLink'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 690,
    margin: '0 auto',
    marginTop: '25px',
    fontStyle: 'normal',
  },
  cardContent: {
    position: 'relative',
  },
  content: {
    fontFamily: 'Geomanist',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '130%',
    color: '#172136',
    margin: 0,
    paddingTop: '8px',
    maxHeight: 240,
  },
  comma: {
    position: 'absolute',
    top: '20',
  },
  seeMoreContent: {
    position: 'absolute',
    height: 50,
    width: '100%',
    background:
      'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.645833) 57.29%, rgba(255, 255, 255, 0) 100%)',
    left: 0,
    bottom: 0,
    textAlign: 'right',
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    position: 'absolute',
    bottom: 10,
    right: 16,
    border: '1px solid #E6E9EF',
    fontFamily: 'Geomanist',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '120%',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#102041',
  },
}))

export default function HiveCard(props) {
  const classes = useStyles()
  const { data } = props
  const expanded = false

  return (
    <div className={classes.root}>
      <HiveCardHeader data={data} />
      <Card>
        <CardContent className={classes.cardContent}>
          <img className={classes.comma} src="/assets/images/comma.svg" alt="comma" />
          <p className={classes.content}>
            {data.annotations.length > 0 ? data.annotations[0].text : ''}
          </p>
          <div className={classes.seeMoreContent}></div>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            // onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            See more
          </Button>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
        <HiveCardLink data={data} />
      </Card>
      <HiveCardFooter data={data} />
    </div>
  )
}
