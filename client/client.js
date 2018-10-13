import socket from './socket';

export default function(name) {
    var name = name || 'Anonymous';
    return {
        name,
        socket: socket().socket,
        register: socket().register,
        message: socket().message
    }
}
