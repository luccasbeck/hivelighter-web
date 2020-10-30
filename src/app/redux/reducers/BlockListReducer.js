import {
  BLOCKLIST_SUCCESS,
  BLOCKLIST_ERROR,
  BLOCKLIST_LOADING,
} from '../actions/BlockListActions'

const initialState = {
  success: false,
  loading: false,
  data: [],
  error: null,
}

const BlockListReducer = function (state = initialState, action) {
  switch (action.type) {
    case BLOCKLIST_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case BLOCKLIST_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
      }
    }
    case BLOCKLIST_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default BlockListReducer
