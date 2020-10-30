import {
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
  NOTIFICATION_LOADING,
} from '../actions/NotificationActions'

const initialState = {
  success: false,
  loading: false,
  data: [],
  error: null,
}

const NotificationReducer = function (state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case NOTIFICATION_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
      }
    }
    case NOTIFICATION_ERROR: {
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

export default NotificationReducer
