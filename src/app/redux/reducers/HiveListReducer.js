import {
  HIVELIST_SUCCESS,
  HIVELIST_ERROR,
  HIVELIST_LOADING,
} from '../actions/HiveListActions'

const initialState = {
  success: false,
  loading: false,
  data: [],
  error: null,
}

const HiveListReducer = function (state = initialState, action) {
  switch (action.type) {
    case HIVELIST_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case HIVELIST_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
      }
    }
    case HIVELIST_ERROR: {
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

export default HiveListReducer
