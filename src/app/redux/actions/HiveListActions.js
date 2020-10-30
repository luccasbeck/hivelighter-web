import axiosAPI from 'app/config/axiosAPI'
import { ME_LIST_PATH, SWARM_LIST_PATH, EVERYONE_LIST_PATH } from 'app/config'

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

        return dispatch({
          type: HIVELIST_SUCCESS,
          payload: response.data,
        })
      })
      .catch((e) => {})
  }
}
