import { LOAD_PHOTOS } from './types'

import { getPhotos } from '../utils/api'

const loadPostsAction = photos => ({
  type: LOAD_PHOTOS,
  photos
})

export function loadPhotos(dispatch, category) {
  return getPhotos()
    .then(photos => {
      dispatch(loadPostsAction(photos))
    })
    .catch(error => console.error(error))
}
