import axiosAPI from 'app/config/axiosAPI'
import {
  ME_LIST_PATH,
  SWARM_LIST_PATH,
  EVERYONE_LIST_PATH,
  BACKEND_BASE_URL,
} from 'app/config'

export const HIVELIST_ERROR = 'HIVELIST_ERROR'
export const HIVELIST_SUCCESS = 'HIVELIST_SUCCESS'
export const HIVELIST_LOADING = 'HIVELIST_LOADING'

export function getMainList(uuid, type) {
  return (dispatch) => {
    dispatch({
      type: HIVELIST_LOADING,
    })

    let api = ''
    if (type === ME_LIST_PATH) api = `/api/publishedFromActor?newer=1&actorId=${uuid}`
    else if (type === SWARM_LIST_PATH) api = `/api/publishedFromUsersIFollow?newer=false`
    else if (type === EVERYONE_LIST_PATH) api = `/api/publishedFromOtherUsers?newer=false`

    axiosAPI
      .get(api)
      .then((response) => {
        let success = response.data.success
        if (success === false) {
          return dispatch({
            type: HIVELIST_ERROR,
            payload: response.data.msg,
          })
        }

        let data = response.data.map((item) => {
          let temp = JSON.parse(JSON.stringify(item))
          // temp.profile_hi_pic = `https://${item.domain}/profile/${item.user_id}/pic-200.jpg`
          temp.profile_low_pic = `${BACKEND_BASE_URL}/profile/${item.user_id}/pic.jpg`
          temp.profile_hi_pic = `${BACKEND_BASE_URL}/profile/${item.user_id}/pic-200.jpg`
          temp.profile_origin_pic = `${BACKEND_BASE_URL}/profile/${item.user_id}/originImage.jpg`
          return temp
        })

        return dispatch({
          type: HIVELIST_SUCCESS,
          payload: data,
        })
      })
      .catch((e) => {})
  }
}
