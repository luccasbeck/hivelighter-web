import { combineReducers } from 'redux'
import SignupReducer from './SignupReducer'
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import ProfileReducer from './ProfileReducer'
import HiveListReducer from './HiveListReducer'
import LayoutReducer from './LayoutReducer'
import NotificationReducer from './NotificationReducer'
import NotificationCountReducer from './NotificationCountReducer'
import BlockListReducer from './BlockListReducer'

const RootReducer = combineReducers({
  signup: SignupReducer,
  login: LoginReducer,
  user: UserReducer,
  profile: ProfileReducer,
  hiveList: HiveListReducer,
  layout: LayoutReducer,
  notification: NotificationReducer,
  notificationCount: NotificationCountReducer,
  blockList: BlockListReducer,
})

export default RootReducer
