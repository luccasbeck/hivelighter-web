import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppContext from 'app/appContext'

class AuthGuard extends Component {
  constructor(props, context) {
    super(props)
    let { routes } = context

    this.state = {
      authenticated: true,
      routes,
    }
  }

  componentDidMount() {
    if (!this.state.authenticated) {
      this.redirectRoute(this.props)
    }
  }

  componentDidUpdate() {
    if (!this.state.authenticated) {
      this.redirectRoute(this.props)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.authenticated !== this.state.authenticated
  }

  static getDerivedStateFromProps(props, state) {
    let token = localStorage.getItem('access_token')
    const authenticated = token ? true : false

    return {
      authenticated,
    }
  }

  redirectRoute(props) {
    const { location, history } = props
    const { pathname } = location

    history.push({
      pathname: '/signin',
      state: { redirectUrl: pathname },
    })
  }

  render() {
    let { children } = this.props

    return <Fragment>{children}</Fragment>
  }
}

AuthGuard.contextType = AppContext

const mapStateToProps = (state) => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(AuthGuard))
