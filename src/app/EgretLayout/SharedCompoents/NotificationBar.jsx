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

function NotificationBar(props) {
  const { theme, settings, data } = props

  const parentThemePalette = theme.palette
  const badgeCount = data
    ? data.length > 0
      ? data[0].new_notifications_count
      : null
    : null

  return (
    <MuiThemeProvider theme={settings.themes[settings.activeTheme]}>
      <IconButton
        style={{
          color:
            parentThemePalette.type === 'light'
              ? parentThemePalette.text.secondary
              : parentThemePalette.text.primary,
          width: 44,
          height: 44,
        }}
      >
        <NotificationBadge badgeContent={badgeCount}>
          <img src="/assets/images/notifications.svg" alt="notifications" />
        </NotificationBadge>
      </IconButton>
    </MuiThemeProvider>
  )
}

NotificationBar.propTypes = {
  settings: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  settings: state.layout.settings,
})

export default withStyles(
  {},
  { withTheme: true },
)(connect(mapStateToProps, {})(NotificationBar))
