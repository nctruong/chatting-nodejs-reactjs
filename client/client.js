import socket from './socket';

export default function(name) {
    var name = name || 'Anonymous';
    return {
        name,
        register: socket().register,
        message: socket().message
    }
}
