import AuthService from '../../services/AuthService'
import history from 'history.js'

export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_LOADING = 'SIGNUP_LOADING'
export const RESET_PASSWORD = 'RESET_PASSWORD'

export function signupWithEmailAndPassword({ username, email, password }) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_LOADING,
    })

    AuthService.signupWithEmailAndPassword(username, email, password)
      .then((user) => {
        history.push({
          pathname: '/signin',
        })

        return dispatch({
          type: SIGNUP_SUCCESS,
          payload: user,
        })
      })
      .catch((error) => {
        return dispatch({
          type: SIGNUP_ERROR,
          payload: error,
        })
      })
  }
}
