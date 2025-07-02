/**
 * service-page controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::service-page.service-page', ({strapi}) => ({
    async findOne(ctx) {
        try {
            const { slug } = ctx.params;
            if (!slug) {
                return ctx.badRequest('Slug is required');
            }
            // Define the populate options correctly, specifying nested fields as necessary
            const data = await strapi.db.query('api::service-page.service-page').findOne({
                where:  {
                slug,
                },  
                populate: {
                    Image: true,
                    icon: true,
                    featureTiles: {
                        populate: {
                            icon: true
                        }
                    },
                    servicesList: {
                        populate: {
                            Icon: true,
                            features: true
                        }
                    }
                }
            });

            return {data, meta: {}};
        } catch (error) {
            strapi.log.error('Error fetching About Us page:', error);
            return ctx.internalServerError('An error occurred while fetching the About Us page.');
        }
    },
    async find(ctx) {

        try {
            // Define the populate options correctly, specifying nested fields as necessary
            // const data = await strapi.db.query('api::service-page.service-page').findMany({  
            //     populate: {
            //         Image: true,
            //         featureTiles: {
            //             populate: {
            //                 icon: true
            //             }
            //         },
            //         servicesList: {
            //             populate: {
            //                 Icon: true
            //             }
            //         }
            //     }
            // });

            // return {data, meta: {}};
            ctx.query.populate = {
                Image: true,
                icon: true,
                featureTiles: {
                populate: { icon: true },
                },
                servicesList: {
                populate: { Icon: true, features: true },
                },
            };

      const response = await super.find(ctx);
      return response;
        } catch (error) {
            strapi.log.error('Error fetching About Us page:', error);
            return ctx.internalServerError('An error occurred while fetching the About Us page.');
        }

    }
}));