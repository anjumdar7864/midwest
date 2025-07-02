/**
 * logo controller
 */


import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::logo.logo', ({strapi}) => ({
    async find(ctx) {
        try {
            // Define the populate options correctly, specifying nested fields as necessary
            const data = await strapi.db.query('api::logo.logo').findOne({
                // where:  {
                //     locale: ctx.query.locale || 'en',
                //     publishedAt: { $notNull: true }, // Only include published news
                // },
                populate: {
                   logoheader: true,
                   logofooter: true
                }
            });

            return {data, meta: {}};
        } catch (error) {
            strapi.log.error('Error fetching footer:', error);
            return ctx.internalServerError('An error occurred while fetching the footer.');
        }
    },
}));