import Hapi from 'hapi';
import {collection} from '../db';

const plugin = (server, options, next)=> {

    server.route({
        method: 'POST',
        path: 'orders',

        handler(request, reply) {
            const NewOrder = request.payload;
            db.collection('collection').insertOne({NewOrder});
            reply(NewOrder, {message: 'Order received'});
        }
    });
    next();

};


export default plugin;