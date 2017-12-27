import { LOAD_PHOTOS } from '../actions/types'

const photos = (state = [], action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return action.photos
    default:
      return state
  }
}

export default photos
