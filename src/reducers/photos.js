import { LOAD_PHOTOS, UPLOAD_PHOTO } from '../actions/types'

const photos = (state = [], action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return action.photos
    case UPLOAD_PHOTO:
      return [
        ...state.map(photo => {
          if (photo.id === action.id) {
            return Object.assign({}, photo, {
              uri: action.uri
            })
          }

          return photo
        })
      ]
    default:
      return state
  }
}

export default photos
