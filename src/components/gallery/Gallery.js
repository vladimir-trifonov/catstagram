import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import './Gallery.css'

import { loadPhotos } from '../../actions/photos'
import { splitListToBuckets } from '../../utils/helpers'

const apiHost = process.env.REACT_APP_API_HOST

class Gallery extends PureComponent {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadPhotosActionCreator()
  }

  render() {
    const buckets = splitListToBuckets(this.props.photos, 4)

    return (
      <div className='gallery'>
        <div className='row'>
          {buckets.map((bucket, index) => (
            <div className='column' key={index}>
              {bucket.map((photo) => (
                <LazyLoad height={200} key={photo.id}>
                  <img className='md-paper md-paper--1' src={`${apiHost}\\${photo.path}`} />
                </LazyLoad>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  loadPhotosActionCreator: PropTypes.func.isRequired
}

const mapStateToProps = ({ photos }) => {
  return {
    photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPhotosActionCreator: () => loadPhotos(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
