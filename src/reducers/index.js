import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import photos from './photos'

export default combineReducers({
  photos,
  routing
})
