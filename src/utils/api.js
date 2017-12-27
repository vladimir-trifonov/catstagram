/* global fetch */
import shortid from 'shortid'
const apiHost = process.env.REACT_APP_API_HOST

export const getPhotos = () => {
  return fetch(`${apiHost}/api/list`)
    .then(response => response.json())
    .then(photos => photos.map(photo => ({ ...photo, id: shortid.generate() })))
}
