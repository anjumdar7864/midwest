/**
 * home router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::home.home');

export default {
    routes: [
        {
            method: 'GET',
            path: '/home',
            handler: 'api::home.home.find',
            config: {
                auth: false, // Set to true if authentication is required
            },
        },
        // You can add other custom routes here if needed
    ],
};
