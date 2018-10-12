import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chatbox from '../components/chatbox';
import client from '../client';

const ChatboxContainer = props => <Chatbox {...props} />

const mapStateToProps = (props) => {
    return {
        client,
    }
}

export default connect(mapStateToProps, null)(ChatboxContainer);