/* global fetch */
import { LOAD_IMAGES } from './types'

const apiHost = process.env.REACT_APP_API_HOST

const loadPostsAction = images => ({
  type: LOAD_IMAGES,
  images
})

export function loadImages (dispatch, category) {
  return fetch(`${apiHost}/list`)
    .then(response => response.json())
    .then(images => {
      dispatch(loadPostsAction(images))
    })
    .catch(error => console.error(error))
}
