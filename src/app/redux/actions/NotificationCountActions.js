import axiosAPI from 'app/config/axiosAPI'

export const NOTIFICATION_COUNT_ERROR = 'NOTIFICATION_COUNT_ERROR'
export const NOTIFICATION_COUNT_SUCCESS = 'NOTIFICATION_COUNT_SUCCESS'
export const NOTIFICATION_COUNT_LOADING = 'NOTIFICATION_COUNT_LOADING'

export function getNotificationCount() {
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_COUNT_LOADING,
    })

    axiosAPI
      .get(`/api/notificationsCount`)
      .then((response) => {
        let success = response.data.success
        if (success === false) {
          return dispatch({
            type: NOTIFICATION_COUNT_ERROR,
            payload: response.data.msg,
          })
        }

        return dispatch({
          type: NOTIFICATION_COUNT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((e) => {})
  }
}
