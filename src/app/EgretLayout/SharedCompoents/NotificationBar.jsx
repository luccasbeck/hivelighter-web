import NotificationBadge from 'egret/components/header/NotificationBadge'
import React from 'react'
import {
  MuiThemeProvider,
  IconButton,
  // eslint-disable-next-line no-unused-vars
  Fab,
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import {
  getNotification,
  deleteAllNotification,
  deleteNotification,
} from '../../redux/actions/NotificationActions'

function NotificationBar(props) {
  const { theme, settings } = props

  const parentThemePalette = theme.palette
  // console.log(theme);

  return (
    <MuiThemeProvider theme={settings.themes[settings.activeTheme]}>
      <IconButton
        style={{
          color:
            parentThemePalette.type === 'light'
              ? parentThemePalette.text.secondary
              : parentThemePalette.text.primary,
        }}
      >
        <NotificationBadge badgeContent={11}>
          <img src="/assets/images/notifications.svg" alt="notifications" />
        </NotificationBadge>
      </IconButton>
    </MuiThemeProvider>
  )
}

NotificationBar.propTypes = {
  settings: PropTypes.object.isRequired,
  notification: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  getNotification: PropTypes.func.isRequired,
  deleteNotification: PropTypes.func.isRequired,
  deleteAllNotification: PropTypes.func.isRequired,
  notification: state.notification,
  settings: state.layout.settings,
})

export default withStyles(
  {},
  { withTheme: true },
)(
  connect(mapStateToProps, {
    getNotification,
    deleteNotification,
    deleteAllNotification,
  })(NotificationBar),
)
