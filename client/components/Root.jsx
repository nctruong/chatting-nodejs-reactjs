import React from 'react';
import { Component } from 'react';
import ChatboxContainer from '../containers/ChatboxContainer'

class Root extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.client.register("Hello there", (data) => {
            console.log('connecting')
        }) 
    }
    render () {
        return (

            <ChatboxContainer />     

        )
    }
}

export default Root;