import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import './Photo.css'

import { uploadPhoto } from '../../actions/photos'

class Photo extends PureComponent {
  renderImg ({ id, path, src }) {
    return (
      <img
        alt={`iamge-${path}`}
        className='md-paper md-paper--1'
        src={src}
        onClick={() => this.props.uploadPhotoActionCreator(id, path)}
      />
    )
  }

  render () {
    const { photo } = this.props
    return (
      <LazyLoad height={400}>
        <div className='photo'>
          {photo.uri && (
            <div>
              <a href={photo.uri} target='_blank'>
                <div className='submitted'>
                  <svg width='24px' height='24px'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                  </svg>
                </div>
              </a>
              <a href={photo.uri} target='_blank'>
                <div className='linked'>
                  <svg width='24px' height='24px' viewBox='0 0 50 80' >
                    <polyline fill='none' stroke='#000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' points='0.375,0.375 45.63,38.087 0.375,75.8' />
                  </svg>
                </div>
              </a>
            </div>
          )}
          {photo.uri
            ? (
              <a href={photo.uri} target='_blank'>
                {this.renderImg(photo)}
              </a>
            )
            : this.renderImg(photo)
          }
        </div>
      </LazyLoad>
    )
  }
}

export const photoPropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  uri: PropTypes.string,
  path: PropTypes.string
})

Photo.propTypes = {
  photo: photoPropType,
  uploadPhotoActionCreator: PropTypes.func.isRequired
}

const mapStateToProps = ({ photos }, { id }) => {
  return {
    photo: photos.find(photo => photo.id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadPhotoActionCreator: (id, path) => uploadPhoto(dispatch, id, path)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo)
