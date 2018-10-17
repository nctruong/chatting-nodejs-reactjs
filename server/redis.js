var jsonify = require('redis-jsonify')
var redis = require('redis');
var client = jsonify(redis.createClient(6379, 'localhost')); // default redis's configuration

// Listening for connection
client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});


client.set('author', { name:'Will Nguyen', title:'Software Engineer' }, redis.print);
client.get('author', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' ,result.name, ' - ', result.title);
});