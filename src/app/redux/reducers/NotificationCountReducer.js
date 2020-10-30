import {
  NOTIFICATION_COUNT_SUCCESS,
  NOTIFICATION_COUNT_ERROR,
  NOTIFICATION_COUNT_LOADING,
} from '../actions/NotificationCountActions'

const initialState = {
  success: false,
  loading: false,
  data: [],
  error: null,
}

const NotificationCountReducer = function (state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_COUNT_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case NOTIFICATION_COUNT_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
      }
    }
    case NOTIFICATION_COUNT_ERROR: {
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

export default NotificationCountReducer
