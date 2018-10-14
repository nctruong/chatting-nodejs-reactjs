import * as types from '../constants/socket-types'

export const listenMessage = client => async(dispatch) => {
    console.log("call listen to messages")
    client.socket.on('new_message', (data) => {
        console.log("new message: ", data)
        dispatch({
            type: types.NEW_MESSAGE,
            message: [ data ]
        })
    })
}

