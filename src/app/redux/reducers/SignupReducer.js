import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING } from '../actions/SignupActions'

const initialState = {
  success: false,
  loading: false,
  data: {},
  error: null,
}

const SignupReducer = function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
      }
    }
    case SIGNUP_ERROR: {
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

export default SignupReducer
