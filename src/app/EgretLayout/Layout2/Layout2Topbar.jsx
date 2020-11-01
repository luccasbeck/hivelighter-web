import GetExtensionButton from 'egret/components/header/GetExtensionButton'
import HeaderButton from 'egret/components/header/HeaderButton'
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
import NotificationBarContainer from '../../../hive/components/notification/NotificationBarContainer'
import NotificationBarMenuItem from '../../../hive/components/notification/NotificationBarMenuItem'
import BlockListBarContainer from '../../../hive/components/blockList/BlockListBarContainer'
import BlockListBarMenuItem from '../../../hive/components/blockList/BlockListBarMenuItem'
import { getNotification } from 'app/redux/actions/NotificationActions'
import { getNotificationCount } from 'app/redux/actions/NotificationCountActions'
import { getBlockList } from 'app/redux/actions/BlockListActions'
import { ME_LIST_PATH, SWARM_LIST_PATH, EVERYONE_LIST_PATH } from 'app/config'

const styles = (theme) => {
  return {
    menuItem: {
      padding: '12px 16px',
      fontFamily: 'Helvetica Neue',
      '& .imgWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 44,
      },
      '& span': {
        marginLeft: 12,
        fontWeight: 300,
        fontSize: 17,
        fontStyle: 'normal',
        lineHeight: '100%',
        color: '#172136',
      },
    },
  }
}

function Layout2Topbar(props) {
  let {
    theme,
    settings,
    user,
    location,
    classes,
    notification,
    getNotification,
    notificationCount,
    getNotificationCount,
    blockList,
    getBlockList,
  } = props
  const topbarTheme = settings.themes[settings.layout2Settings.topbar.theme] || theme

  const [isBlockListOpen, setIsBlockListOpen] = useState(false)

  const notificationData = notification.data.map((item) => {
    return { ...item }
  })

  useEffect(() => {
    getNotification()
  }, [getNotification])

  const notificationCountData = notificationCount.data.map((item) => {
    return { ...item }
  })

  useEffect(() => {
    getNotificationCount()
  }, [getNotificationCount])

  const blockListData = blockList.data.map((item) => {
    return { ...item }
  })

  useEffect(() => {
    getBlockList()
  }, [getBlockList])

  const updateSidebarMode = (sidebarSettings) => {
    let { settings, setLayoutSettings } = props

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

  const handleSidebarToggle = () => {
    let { settings } = props
    let { layout2Settings } = settings

    let mode = layout2Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close'

    updateSidebarMode({ mode })
  }

  const handleLink = (pathname) => {
    props.history.push(pathname)
  }

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
            <Link className="flex flex-middle" to={'/'}>
              <img src="/assets/images/logo.svg" alt="company-logo" />
              <img src="/assets/images/brand.svg" alt="company-title" />
            </Link>
          </div>
          <div className="h-100 flex-grow-1 ml-36 flex flex-middle">
            <HeaderButton
              active={location.pathname === ME_LIST_PATH}
              onClick={() => handleLink(ME_LIST_PATH)}
            >
              Me
            </HeaderButton>
            <HeaderButton
              active={location.pathname === SWARM_LIST_PATH}
              onClick={() => handleLink(SWARM_LIST_PATH)}
            >
              My swarm
            </HeaderButton>
            <HeaderButton
              active={location.pathname === EVERYONE_LIST_PATH}
              onClick={() => handleLink(EVERYONE_LIST_PATH)}
            >
              Everyone
            </HeaderButton>
          </div>
          <div className="flex flex-middle">
            <EgretToolbarMenu offsetTop="80px">
              <GetExtensionButton />

              <div className={'px-10'} />

              <NotificationBarContainer
                menuButton={<NotificationBar data={notificationCountData} />}
              >
                {notificationData.map((item, index) => (
                  <NotificationBarMenuItem key={index} data={item} />
                ))}
              </NotificationBarContainer>

              <BlockListBarContainer
                open={isBlockListOpen}
                onSetOpen={(value) => setIsBlockListOpen(value)}
              >
                {blockListData.map((item, index) => (
                  <BlockListBarMenuItem key={index} data={item} />
                ))}
              </BlockListBarContainer>

              <div className={'px-10'} />

              <EgretMenu
                menuButton={
                  <div
                    style={{
                      width: 44,
                      height: 44,
                    }}
                  >
                    <Hexagon
                      backgroundImage="/assets/images/face-7.jpg"
                      style={{
                        stroke: 'gray',
                      }}
                    />
                  </div>
                }
              >
                <MenuItem className={`flex flex-middle ${classes.menuItem}`}>
                  <Link className="flex flex-middle" style={{ flex: 1 }} to="/profile">
                    <div style={{ width: 40, height: 44 }}>
                      <Hexagon
                        backgroundImage="/assets/images/face-7.jpg"
                        backgroundScale={1.05}
                        style={{ stroke: 'gray' }}
                      />
                    </div>
                    <div className="setting-profile">
                      <div
                        style={{
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: 17,
                          lineHeight: '110%',
                        }}
                      >{`${user.firstname} ${user.lastname}`}</div>
                      <div
                        style={{
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: 13,
                          lineHeight: '110%',
                          color: '#9CABC9',
                          marginTop: 8,
                        }}
                      >
                        See your profile
                      </div>
                    </div>
                  </Link>
                </MenuItem>
                <MenuItem className={`flex flex-middle ${classes.menuItem}`}>
                  <div className="imgWrapper">
                    <img src="/assets/images/setting/contact.svg" alt="contact" />
                  </div>
                  <span> Contact support </span>
                </MenuItem>
                <MenuItem
                  className={`flex flex-middle ${classes.menuItem}`}
                  onClick={() =>
                    setTimeout(() => {
                      setIsBlockListOpen(true)
                    }, 500)
                  }
                >
                  <div className="imgWrapper">
                    <img src="/assets/images/setting/blocked.svg" alt="blocked" />
                  </div>
                  <span> Block list </span>
                </MenuItem>
                <MenuItem className={`flex flex-middle ${classes.menuItem}`}>
                  <Link className="flex flex-middle" style={{ flex: 1 }} to={'/terms'}>
                    <div className="imgWrapper">
                      <img src="/assets/images/setting/info.svg" alt="service" />
                    </div>
                    <span> Terms of Service </span>
                  </Link>
                </MenuItem>
                <MenuItem className={`flex flex-middle ${classes.menuItem}`}>
                  <Link className="flex flex-middle" style={{ flex: 1 }} to={'/privacy'}>
                    <div className="imgWrapper">
                      <img src="/assets/images/setting/info.svg" alt="statement" />
                    </div>
                    <span> Privacy Statement </span>
                  </Link>
                </MenuItem>
              </EgretMenu>
            </EgretToolbarMenu>

            <Hidden mdUp>
              <IconButton onClick={handleSidebarToggle}>
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

Layout2Topbar.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
  user: state.user,
  notification: state.notification,
  notificationCount: state.notificationCount,
  blockList: state.blockList,
})

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
      setLayoutSettings,
      getNotification,
      getNotificationCount,
      getBlockList,
    })(Layout2Topbar),
  ),
)
