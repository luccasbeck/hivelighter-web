import axiosAPI from 'app/config/axiosAPI'
import { BACKEND_BASE_URL } from 'app/config'

export const PROFILE_ERROR = 'PROFILE_ERROR'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_LOADING = 'PROFILE_LOADING'

export function getProfile() {
  return (dispatch) => {
    dispatch({
      type: PROFILE_LOADING,
    })

    axiosAPI
      .get('/api/profile-json')
      .then((response) => {
        let success = response.data.success
        if (success) {
          let data = response.data
          data.profile_pic = `${BACKEND_BASE_URL}/profile/${data.user_id}/pic-200.jpg`
          return dispatch({
            type: PROFILE_SUCCESS,
            payload: data,
          })
        } else {
          return dispatch({
            type: PROFILE_ERROR,
            payload: response.data.msg,
          })
        }
      })
      .catch((e) => {})
  }
}

export function updateProfile({ uuid, username, firstname, lastname, bio }) {
  return (dispatch) => {
    axiosAPI
      .post('/api/profile-json', { uuid, username, firstname, lastname, bio })
      .then((response) => {
        let status = response.data.status
        if (status === 'success') {
          dispatch(getProfile())
        }
      })
      .catch((e) => {})
  }
}
