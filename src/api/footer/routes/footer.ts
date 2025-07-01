/**
 * footer router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::footer.footer');
export default {
    routes: [
        {
            method: 'GET',
            path: '/footer',
            handler: 'api::footer.footer.find',
            config: {
                auth: false, // Set to true if authentication is required
            },
        },
        // You can add other custom routes here if needed
    ],
};