import GetExtensionButton from 'egret/components/header/GetExtensionButton'
import HeaderButton from 'egret/components/header/HeaderButton'
import React, { Component } from 'react'
import {
  Icon,
  IconButton,
  // eslint-disable-next-line no-unused-vars
  Badge,
  Hidden,
  withStyles,
  MuiThemeProvider,
  MenuItem,
} from '@material-ui/core'
import { EgretMenu, EgretToolbarMenu } from 'egret'
import { setLayoutSettings } from 'app/redux/actions/LayoutActions'
import { PropTypes } from 'prop-types'
import Hexagon from 'react-hexagon'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import NotificationBar from '../SharedCompoents/NotificationBar'
import NotificationBarContainer from '../../../egret/hive/components/notification/NotificationBarContainer'
import NotificationBarMenuItem from '../../../egret/hive/components/notification/NotificationBarMenuItem'

class Layout2Topbar extends Component {
  state = {}

  handleSignOut = () => {}

  updateSidebarMode = (sidebarSettings) => {
    let { settings, setLayoutSettings } = this.props

    setLayoutSettings({
      ...settings,
      layout2Settings: {
        ...settings.layout2Settings,
        leftSidebar: {
          ...settings.layout2Settings.leftSidebar,
          ...sidebarSettings,
        },
      },
    })
  }

  handleSidebarToggle = () => {
    let { settings } = this.props
    let { layout2Settings } = settings

    let mode = layout2Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close'

    this.updateSidebarMode({ mode })
  }

  render() {
    let { theme, settings } = this.props
    const topbarTheme = settings.themes[settings.layout2Settings.topbar.theme] || theme
    return (
      <MuiThemeProvider theme={topbarTheme}>
        <Helmet>
          <style>
            {`.topbar {
              background-color: ${topbarTheme.palette.primary.main};
              border-color: ${topbarTheme.palette.divider} !important;
            }
            .topbar .brand__text {
              color: ${topbarTheme.palette.primary.contrastText};
            }
            `}
          </style>
        </Helmet>

        <div className="topbar">
          <div className="flex flex-space-between flex-middle container h-100">
            <div className="flex flex-middle brand">
              <img src="/assets/images/logo.svg" alt="company-logo" />
              <img src="/assets/images/brand.svg" alt="company-title" />
            </div>
            <div className="h-100 flex-grow-1 ml-36 flex flex-middle">
              <HeaderButton active>Me</HeaderButton>
              <HeaderButton>My swarm</HeaderButton>
              <HeaderButton>Everyone</HeaderButton>
            </div>
            <div className="flex flex-middle">
              <EgretToolbarMenu offsetTop="80px">
                <GetExtensionButton />

                <div className={'px-10'} />

                <NotificationBarContainer menuButton={<NotificationBar />}>
                  <NotificationBarMenuItem />
                  <NotificationBarMenuItem />
                  <NotificationBarMenuItem />
                  <NotificationBarMenuItem />
                  <NotificationBarMenuItem />
                  <NotificationBarMenuItem />
                </NotificationBarContainer>

                <div className={'px-10'} />

                <EgretMenu
                  menuButton={
                    <div style={{ width: 40, height: 44 }}>
                      <Hexagon
                        backgroundImage="/assets/images/face-7.jpg"
                        backgroundScale={1.05}
                        style={{ stroke: 'gray' }}
                      />
                    </div>
                  }
                >
                  <MenuItem className="flex flex-middle" style={{ minWidth: 185 }}>
                    <Icon> home </Icon>
                    <span className="pl-16"> Home </span>
                  </MenuItem>
                  <MenuItem className="flex flex-middle" style={{ minWidth: 185 }}>
                    <Icon> person </Icon>
                    <span className="pl-16"> Person </span>
                  </MenuItem>
                  <MenuItem className="flex flex-middle" style={{ minWidth: 185 }}>
                    <Icon> settings </Icon>
                    <span className="pl-16"> Settings </span>
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleSignOut}
                    className="flex flex-middle"
                    style={{ minWidth: 185 }}
                  >
                    <Icon> power_settings_new </Icon>
                    <span className="pl-16"> Logout </span>
                  </MenuItem>
                </EgretMenu>
              </EgretToolbarMenu>

              <Hidden mdUp>
                <IconButton onClick={this.handleSidebarToggle}>
                  <Icon>menu</Icon>
                </IconButton>
              </Hidden>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

Layout2Topbar.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
})

export default withStyles(
  {},
  { withTheme: true },
)(connect(mapStateToProps, { setLayoutSettings })(Layout2Topbar))
