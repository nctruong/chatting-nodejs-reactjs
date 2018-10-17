import * as types from '../constants/socket-types'

const initState = {
    message: []
}

const getState = (state, action) => {
    var newState = [];
    if (state.message != undefined) {
        newState = state.message.concat(action.message)
    } else {
        newState = action.message
    }
    return newState
}

export default function receiveMessage(state = initState, action) {
    console.log("reducer: receiveMessage")
    console.log("state: ", state)
    switch (action.type) {
        case types.NEW_MESSAGE:
            console.log(action)
            return {
                message: getState(state, action),
            }
        default:
            return state;
    }
}

