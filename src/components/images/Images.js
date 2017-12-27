import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loadImages } from '../../actions/images'

class Posts extends PureComponent {
  constructor () {
    super()
  }

  componentDidMount () {
    this.props.loadImagesActionCreator()
  }

  render () {
    return (
      <div></div>
    )
  }
}

Posts.propTypes = {
  images: PropTypes.array.isRequired
}

const mapStateToProps = ({images}) => {
  return {
    images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadImagesActionCreator: () => loadImages(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
