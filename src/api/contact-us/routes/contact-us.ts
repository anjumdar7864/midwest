/**
 * contact-us router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::contact-us.contact-us');


export default {
    routes: [
        {
            method: 'GET',
            path: '/contactData',
            handler: 'api::contact-us.contact-us.find',
            config: {
                auth: false, // Set to true if authentication is required
            },
        },
        // You can add other custom routes here if needed
    ],
};