const Hapi = require('hapi');
const Boom = require('boom');


const plugin = function(server, options, next){

    server.route( {
        method: 'GET',
        path:  '/{id}',
        handler(request, reply) {
            const db = request.mongo.db;
            const ObjectID = request.mongo.ObjectID;

            db.collection('dhdb').findOne({  _id: new ObjectID(request.params.id) }, function (err, result) {

                if (err) {
                    return reply(Boom.internal('Internal MongoDB error', err));
                }

                reply(result);
            });
        }
    });

    server.start(function() {
        console.log(`Server started at ${server.info.uri}`);
    });
};


export default plugin;