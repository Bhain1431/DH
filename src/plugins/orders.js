import {collection} from '../db';
import {ObjectID} from 'mongodb';
import Joi from 'joi';

const plugin = (server, options, next) => {

    server.route({
        method: 'POST',
        path: '/orders',

        config: {
            tags: ['api'],

        },

        handler: {
             async: async (request, reply) => {
                const order = request.payload;
                console.log(order);
//dad i want to boial noodles and not rawmen i also do not want sause plaease dad
                const orders = await collection('orders');
                const {insertedId} = await orders.insertOne(order);

                if (insertedId) {
                    console.log(insertedId);

                    const result = await orders.findOne({_id: insertedId});

                    return reply(result);
                }

                return reply({error: 'blah'});

            }
        }
    });
    return next();

};

plugin.attributes = {
    name: 'orders',
    version: '1.0.0'
};


export default plugin;