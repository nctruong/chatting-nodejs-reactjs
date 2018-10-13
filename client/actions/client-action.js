import * as events from '../constants/socket-types'

export const listenMessage = client => async(dispatch) => {
    client.socket.on('new_message', (data) => {
        dispatch({
            type: events.NEW_MESSAGE,
            message: data
        })
    })
}

