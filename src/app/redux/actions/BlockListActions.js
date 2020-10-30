import axiosAPI from 'app/config/axiosAPI'

export const BLOCKLIST_ERROR = 'BLOCKLIST_ERROR'
export const BLOCKLIST_SUCCESS = 'BLOCKLIST_SUCCESS'
export const BLOCKLIST_LOADING = 'BLOCKLIST_LOADING'

export function getBlockList() {
  return (dispatch) => {
    dispatch({
      type: BLOCKLIST_LOADING,
    })

    axiosAPI
      .get(`/api/fetchBlockedUsers`)
      .then((response) => {
        let success = response.data.success
        if (success === false) {
          return dispatch({
            type: BLOCKLIST_ERROR,
            payload: response.data.msg,
          })
        }

        let data = response.data
        if (data.length > 0) {
          data = data.filter(function onlyUnique(value, index, self) {
            return self.findIndex((item) => item.uuid === value.uuid) === index
          })
        }

        return dispatch({
          type: BLOCKLIST_SUCCESS,
          payload: data,
        })
      })
      .catch((e) => {})
  }
}

export function blockUser(uuid) {
  return (dispatch) => {
    axiosAPI
      .post(`/api/blockUser`, { user_id: uuid })
      .then((response) => {
        let success = response.data.success
        if (success === true) {
          dispatch(getBlockList())
        }
      })
      .catch((e) => {})
  }
}

export function unblockUser(uuid) {
  return (dispatch) => {
    axiosAPI
      .delete(`/api/unblockUser/${uuid}`)
      .then((response) => {
        let success = response.data.success
        if (success === true) {
          dispatch(getBlockList())
        }
      })
      .catch((e) => {})
  }
}
