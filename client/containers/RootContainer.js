import React, { Component } from 'react';
import Root from '../components/Root';
import { connect } from 'react-redux';
import client from '../client';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (props) => {
    return {
        client
    }
}

export default connect(mapStateToProps, null)(RootContainer)