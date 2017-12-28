import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Gallery.css'

import { loadPhotos } from '../../actions/photos'
import { splitListToBuckets } from '../../utils/helpers'
import Photo from './Photo'

class Gallery extends PureComponent {
  componentDidMount() {
    this.props.loadPhotosActionCreator()
  }

  render() {
    const numOfColumns = 4
    const buckets = splitListToBuckets(this.props.photos, numOfColumns)

    return (
      <div className='gallery'>
        <div className='row'>
          {buckets.map((bucket, index) => (
            <div className='column' key={index}>
              {bucket.map((photo, index) => <Photo id={photo.id} key={photo.id} />)}
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

