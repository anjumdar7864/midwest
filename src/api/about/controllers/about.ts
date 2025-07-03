/**
 *  about controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about.about', ({strapi}) => ({
    async find(ctx) {
        try {
            // Define the populate options correctly, specifying nested fields as necessary
            const data = await strapi.db.query('api::about.about').findOne({
                // where:  {
                //     locale: ctx.query.locale || 'en',
                //     publishedAt: { $notNull: true }, // Only include published news
                // },
                populate: {
                   aboutTiles: {
                      populate: {
                        Icon: true
                      }
                   },
                   ourStoryImage: true,
                   ourCoreTites: {
                        populate: {
                            Icon: true
                        }
                   },
                   team: {
                        populate: {
                            profileImage: true
                        }
                   },
                   certificates: {
                      populate: {
                        Icon: true
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