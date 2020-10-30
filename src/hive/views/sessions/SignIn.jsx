import React, { useState, useRef } from 'react'
import { Card, Grid, Button, withStyles, CircularProgress } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'

import { loginWithEmailAndPassword } from 'app/redux/actions/LoginActions'

const styles = (theme) => ({
  wrapper: {
    position: 'relative',
  },

  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

function SignIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const form = useRef(null)
  const { classes, login } = props

  const handleFormSubmit = (event) => {
    props.loginWithEmailAndPassword({ email, password })
  }

  let token = localStorage.getItem('access_token')
  if (token) {
    return <Redirect to={'/me'} />
  }

  return (
    <div className="signup flex flex-center w-100 h-100vh">
      <div className="p-8">
        <Card className="signup-card position-relative y-center">
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <div className="p-32 flex flex-center flex-middle h-100">
                <img src="/assets/images/illustrations/dreamer.svg" alt="" />
              </div>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <div className="p-36 h-100 bg-light-gray position-relative">
                <ValidatorForm ref={form} onSubmit={handleFormSubmit}>
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />
                  <TextValidator
                    className="mb-16 w-100"
                    label="Password"
                    variant="outlined"
                    onChange={(event) => setPassword(event.target.value)}
                    name="password"
                    type="password"
                    value={password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                  {login.error && (
                    <div className="mb-8" style={{ color: '#f44336' }}>
                      {login.error}
                    </div>
                  )}
                  <div className="flex flex-middle mb-8">
                    <div className={classes.wrapper}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={props.login.loading}
                        type="submit"
                      >
                        Sign in
                      </Button>
                      {props.login.loading && (
                        <CircularProgress size={24} className={classes.buttonProgress} />
                      )}
                    </div>
                    <span className="ml-16 mr-8">or</span>
                    <Button
                      className="capitalize"
                      onClick={() => props.history.push('/signup')}
                    >
                      Sign up
                    </Button>
                  </div>
                </ValidatorForm>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  login: state.login,
})

export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { loginWithEmailAndPassword })(SignIn)),
)
