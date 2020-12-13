import React from 'react'
import { Dialog, IconButton, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import ProfilePictureCrop from './ProfilePictureCrop'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: '25px 30px 0 30px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  title: {
    width: 150,
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{ fontSize: 18 }}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

function ProfilePictureDialog(props) {
  const { open, setOpen, picture } = props

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="offline-title" open={open}>
      <DialogTitle id="offline-title" onClose={handleClose}></DialogTitle>
      <ProfilePictureCrop picture={picture} onClose={handleClose} />
    </Dialog>
  )
}

export default withStyles(styles, { withTheme: true })(ProfilePictureDialog)
