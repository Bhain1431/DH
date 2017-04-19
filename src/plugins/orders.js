import {collection} from '../db';
import nodemailer from 'nodemailer';

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
                const orders = await collection('orders');
                const {insertedId} = await orders.insertOne(order);
                if (insertedId) {
                    console.log(insertedId);

                    const result = await orders.findOne({_id: insertedId});

                    let transporter = nodemailer.createTransport({
                        service:'gmail',
                        auth:{
                            user: "bradhain@gmail.com",
                            pass:'babybrad'
                        }
                    });
                    let mailOptions = {
                        from:'"Brad" bradhain@gmail.com',
                        to:'doughain@gmail.com, bradhain@gmail.com',
                        subject:'Order',
                        text:'Order',
                        html:`<b><h1> claytype:${order.claytype}</h1> <h1> moldtype:${order.moldtype}</h1><h1>glazetype: ${order.glazetype}</h1></b>`

                    };
                    transporter.sendMail(mailOptions,(error, info) =>{
                        if(error) {
                            console.log(error);
                        }
                        console.log('Message %s sent: %s', info.messageId,info.response);
                    });
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