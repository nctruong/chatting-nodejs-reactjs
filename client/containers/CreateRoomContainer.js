import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'

const CreateRoomContainer = props = <CreateRoom {...props} />

mapStateToProps = state => {
    return {

    }
}

mapDispatchToProps = dispatch => {
    return bindActionCreator({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomContainer);