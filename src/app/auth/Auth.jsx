import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { setUserData } from '../redux/actions/UserActions'
import localStorageService from '../services/localStorageService'

class Auth extends Component {
  state = {}

  constructor(props) {
    super(props)

    this.props.setUserData(localStorageService.getItem('auth_user'))
    this.checkJwtAuth()
  }

  checkJwtAuth = () => {
    // AuthService.loginWithToken().then((user) => {
    //   this.props.setUserData(user)
    // })
  }

  render() {
    const { children } = this.props
    return <Fragment>{children}</Fragment>
  }
}

const mapStateToProps = (state) => ({
  setUserData: PropTypes.func.isRequired,
  login: state.login,
})

export default connect(mapStateToProps, { setUserData })(Auth)
