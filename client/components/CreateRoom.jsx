import React, { Component } from 'react'

export default class CreateRoom extends Component {
    constructor(props){
        super(props)
    }

    handleEnter = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <input type='text' onKeyUp={this.handleEnter} placeHolder='Create a new Room' />
            </div>
        )
    }
}