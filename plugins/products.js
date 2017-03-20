const Hapi = require('hapi');
const Boom = require('boom');
const mongodb = require('mongodb');

const plugin = (server, options, next)=> {

    server.route({
        method: 'POST',
        path: 'orders',

        handler(request, reply) {
            const NewOrder = request.payload;
            db.collection('mongodb').insertOne({NewOrder});
            reply(NewOrder, {message: 'Order received'});
        }
    });
    next();

};


export default plugin;