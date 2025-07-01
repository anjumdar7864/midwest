/**
 * footer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer.footer', ({strapi}) => ({
    async find(ctx) {
        try {
            // Define the populate options correctly, specifying nested fields as necessary
            const data = await strapi.db.query('api::footer.footer').findOne({
                // where:  {
                //     locale: ctx.query.locale || 'en',
                //     publishedAt: { $notNull: true }, // Only include published news
                // },
                populate: {
                   contactInformation:{
                    populate: {
                        contactListing: true
                    }
                   }
                    
                }
            });

            return {data, meta: {}};
        } catch (error) {
            strapi.log.error('Error fetching footer:', error);
            return ctx.internalServerError('An error occurred while fetching the footer.');
        }
    },
}));