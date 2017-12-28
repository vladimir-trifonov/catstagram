import { LOAD_PHOTOS, UPLOAD_PHOTO } from './types'

import { getPhotos, uploadPhoto as uploadPhotoAPI } from '../utils/api'

const loadPhotosAction = photos => ({
  type: LOAD_PHOTOS,
  photos
})

const uploadPhotoAction = (id, uri) => ({
  type: UPLOAD_PHOTO,
  id,
  uri
})

export function loadPhotos (dispatch) {
  return getPhotos()
    .then(photos => {
      dispatch(loadPhotosAction(photos))
    })
}

export function uploadPhoto (dispatch, id, path) {
  return uploadPhotoAPI(path)
    .then(response => {
      dispatch(uploadPhotoAction(id, response.uri))
    })
}
