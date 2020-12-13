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
          data.profile_low_pic = `${BACKEND_BASE_URL}/profile/${data.uuid}/pic.jpg`
          data.profile_hi_pic = `${BACKEND_BASE_URL}/profile/${data.uuid}/pic-200.jpg`
          data.profile_origin_pic = `${BACKEND_BASE_URL}/profile/${data.uuid}/originImage.jpg`
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

export function setUserPicUpload(data) {
  return (dispatch) => {
    axiosAPI
      .post('/api/setUserPicUpload', data)
      .then((response) => {
        let status = response.data.status
        if (status === 'success') {
          // dispatch(getProfile())
          window.location.reload()
        }
      })
      .catch((e) => {})
  }
}
