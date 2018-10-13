import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chatbox from '../components/chatbox';
import client from '../client';
import { listenMessage } from '../actions/client-action'

const ChatboxContainer = props => <Chatbox {...props} />

const mapStateToProps = (props) => {
    return {
        client: client(),
    }
}

const mapDispatchToProps = (props) => {
    return {
        listenMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatboxContainer);