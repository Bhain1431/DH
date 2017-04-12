import {collection} from '../db';
import Hapi from 'hapi';
import Joi from "joi";

const plugin = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/pottery',
        config: {
            tags: ["api"]
        },
        handler: {
            async: async (request, reply) => {

                const pottery = await collection("pottery");

                const curser = await pottery.find();
                const result = await curser.toArray();


                return reply(result);
            }
        }
    });
    next();
};

plugin.attributes = {
    name: 'products',
    version: '1.0.0'
};


export default plugin;