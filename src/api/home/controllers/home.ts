/**
 * home controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::home.home');

export default factories.createCoreController('api::home.home', ({strapi}) => ({
    async find(ctx) {
        try {
            // Define the populate options correctly, specifying nested fields as necessary
            const data = await strapi.db.query('api::home.home').findOne({
                // where:  {
                //     locale: ctx.query.locale || 'en',
                //     publishedAt: { $notNull: true }, // Only include published news
                // },
                populate: {
                    HomeBanner: {
                        populate: {
                            bannerImage: true,
                            Tiles: {
                                populate: {
                                    Icon: true
                                }
                            }
                        },
                    },
                    Services: {
                        populate: {
                            servicesList: {
                                populate: {
                                    Icon: true,
                                    features: true
                                }
                            }
                        }
                    },
                    locationsHomeSection: {
                        populate: {
                            LocationsList : {
                                populate: {
                                    Image: true,
                                    textList: true
                                }
                            }
                        }
                    },
                    chooseUs: {
                        populate: {
                            chooseUsTiles: {
                                populate: {
                                    Icon: true
                                }
                            }
                        }
                    },
                    testimonials: true
                    
                }
            });

            return {data, meta: {}};
        } catch (error) {
            strapi.log.error('Error fetching About Us page:', error);
            return ctx.internalServerError('An error occurred while fetching the About Us page.');
        }
    },
}));