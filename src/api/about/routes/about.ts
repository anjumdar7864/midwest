/**
 * about router.
 */

import { factories } from '@strapi/strapi';

export default {
    routes: [
        {
            method: 'GET',
            path: '/aboutUs',
            handler: 'api::about.about.find',
            config: {
                auth: false, // Set to true if authentication is required
            },
        },
        // You can add other custom routes here if needed
    ],
};