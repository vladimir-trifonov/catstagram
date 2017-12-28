/* global fetch */
import shortid from 'shortid'

const apiHost = process.env.REACT_APP_API_HOST
const pasteBinApiKey = process.env.REACT_APP_PASTEBIN_API_KEY

export const getPhotos = () => {
  return fetch(`${apiHost}/api/list`)
    .then(response => response.json())
    .then(photos => photos.map(photo => ({
      ...photo,
      src: `${apiHost}\\${photo.path}`,
      id: shortid.generate()
    })))
    .catch(console.error)
}

export const uploadPhoto = (path) => {
  return fetch(`${apiHost}/api/upload`, {
    method: 'POST',
    body: JSON.stringify({
      pastebin_api_key: pasteBinApiKey,
      filename: path
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(console.error)
}

