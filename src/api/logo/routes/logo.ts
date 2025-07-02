/**
 * logo router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::logo.logo');

export default {
    routes: [
        {
            method: 'GET',
            path: '/logo',
            handler: 'api::logo.logo.find',
            config: {
                auth: false, // Set to true if authentication is required
            },
        },
        // You can add other custom routes here if needed
    ],
};
