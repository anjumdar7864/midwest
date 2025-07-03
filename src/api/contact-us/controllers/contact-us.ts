/**
 * contact-us controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::contact-us.contact-us');

export default factories.createCoreController('api::contact-us.contact-us', ({strapi}) => ({
    async find(ctx) {
        try {
            // Define the populate options correctly, specifying nested fields as necessary
            const data = await strapi.db.query('api::contact-us.contact-us').findOne({
                // where:  {
                //     locale: ctx.query.locale || 'en',
                //     publishedAt: { $notNull: true }, // Only include published news
                // },
                populate: {
                   contactTiles: {
                      populate: {
                        Icon: true
                      }
                   },
                   EmergencyInformation: true,
                   faqs: true
                }
            });

            return {data, meta: {}};
        } catch (error) {
            strapi.log.error('Error fetching footer:', error);
            return ctx.internalServerError('An error occurred while fetching the footer.');
        }
    },
}));