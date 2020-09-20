import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import HiveCardHeader from './HiveCardHeader'
import HiveCardFooter from './HiveCardFooter'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 690,
    margin: '0 auto',
    marginTop: '25px',
    fontStyle: 'normal',
  },
  content: {
    fontFamily: 'Geomanist',
    fontWeight: 'normal',
    fontSize: '25px',
    lineHeight: '130%',
    color: '#172136',
    margin: 0,
    paddingTop: '8px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
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

export default function HiveCard() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={classes.root}>
      <HiveCardHeader />
      <Card>
        <CardContent>
          <p className={classes.content}>
            Simplicity has never been something to take for granted in game design, but as
            design tools have gotten easier to use, a larger group of game creators has
            entered the fray.
          </p>
          <br />
          <p className={classes.content}>
            Simplicity has never been something to take for granted in game design, but as
            design tools have gotten easier to use, a larger group of game creators has
            entered the fray.
          </p>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            See more
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <HiveCardFooter />
    </div>
  )
}
