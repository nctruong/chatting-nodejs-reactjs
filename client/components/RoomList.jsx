import React, { Component } from 'react'

export default class RoomList extends Component {
    constructor(props){
        super(props)
    }

    handleEnter = (e) => {
        console.log(e.target.value)
    }

    render() {
        const rooms = this.props.roomList
        if (rooms == null) {
            rooms = <li>You haven't created any rooms yet.</li>
        }
        return (
            <ul>
                { rooms }
            </ul>
        )
    }
}