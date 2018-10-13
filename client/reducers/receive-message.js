import * as types from '../constants/socket-types'

export default function receiveMessage(state = {}, action) {
    switch (action.type) {
        case types.NEW_MESSAGE:
            return {
                ...state,
                message: action.message,
            }
        default:
            return state;

    }
}