import axiosAPI from 'app/config/axiosAPI'

export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR'
export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS'
export const NOTIFICATION_LOADING = 'NOTIFICATION_LOADING'

export function getNotification() {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_LOADING,
    })

    axiosAPI
      .get(`/api/notifications?newer=0`)
      .then((response) => {
        let success = response.data.success
        if (success === false) {
          return dispatch({
            type: NOTIFICATION_ERROR,
            payload: response.data.msg,
          })
        }

        return dispatch({
          type: NOTIFICATION_SUCCESS,
          payload: response.data,
        })
      })
      .catch((e) => {})
  }
}

export function followUser(user_id, follow) {
  return (dispatch) => {
    axiosAPI
      .post(`/api/follow`, { user_id, follow })
      .then((response) => {
        let success = response.data.success
        if (success === true) {
          dispatch(getNotification())
        }
      })
      .catch((e) => {})
  }
}
