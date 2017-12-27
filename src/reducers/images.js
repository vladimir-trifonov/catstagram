import { LOAD_IMAGES } from '../actions/types'

const images = (state = [], action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return action.images
    default:
      return state
  }
}

export default images
