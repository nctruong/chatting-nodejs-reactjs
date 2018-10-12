import React from 'react';
import { Component } from 'react';

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: this.props.client()
        }
    }

    componentWillMount(){
        this.state.client.register("Will", "Hello there", (data) => {
            console.log('connecting')
        }) 
    }
    render () {
        return (
            <h1>I'm Root</h1>
        )
    }
}

export default Root;