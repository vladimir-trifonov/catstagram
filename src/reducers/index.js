import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import images from './images'

export default combineReducers({
  images,
  routing
})
