import {collection} from '../db';
import {ObjectID} from 'mongodb';
import Joi from 'joi';

const plugin = (server, options, next) => {

    server.route({
        method: 'POST',
        path: '/orders',

        config: {
            tags: ['api'],
            // validate: {
            //     payload: {
            //
            //         claytype: Joi.number(),
            //         moldtype: Joi.number(),
            //         glazetype: Joi.number(),
            //         glass: Joi.number()
            //     }
            // }
        },

        handler: {
             async (request, reply) => {
                const order = request.payload;
                console.log(order);

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