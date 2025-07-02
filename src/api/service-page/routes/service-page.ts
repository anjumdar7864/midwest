/**
 * service-page router
 */

import { factories } from '@strapi/strapi';

// export default {
//     routes: [
//         {
//             method: 'GET',
//             path: '/services',
//             handler: 'api::service-page.service-page.find',
//             config: {
//                 auth: false, // Set to true if authentication is required
//             },
//         },
//         // You can add other custom routes here if needed
//     ],
// };

export default {
    routes: [
        {
            method: 'GET',
            path: '/services',
            handler: 'service-page.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/services/:slug',
            handler: 'service-page.findOne',
            config: {
                policies: [],
                middlewares: [],
            }
        }
    ],
};