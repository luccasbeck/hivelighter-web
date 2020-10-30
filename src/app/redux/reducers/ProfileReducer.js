import {
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  PROFILE_LOADING,
} from '../actions/ProfileActions'

const initialState = {
  success: false,
  loading: false,
  data: {},
  error: null,
}

const ProfileReducer = function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
      }
    }
    case PROFILE_ERROR: {
      return {
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

export default ProfileReducer
