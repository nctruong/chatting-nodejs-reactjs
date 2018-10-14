import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Chatbox from '../components/chatbox';
import client from '../client';
import { listenMessage } from '../actions/client-action'

const ChatboxContainer = props => <Chatbox {...props} />

const mapStateToProps = (state) => {
    return {
        client: client(),
        messages: state.messages.message
    }
}

const mapDispatchToProps = (dispatch) => {
    // Must bindActionCreators
    return bindActionCreators({
        listenMessage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatboxContainer);