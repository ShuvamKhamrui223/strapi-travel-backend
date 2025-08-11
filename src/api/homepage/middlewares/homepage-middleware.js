"use strict";

/**
 * `homepage-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const homepagePopulateQuery = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            heroBanner: { fields: ["url", "documentId", "alternativeText"] },
          },
        },
        "blocks.cta": {populate:{ctaLink:true,backgroundImage:{fields:["url","documentId","alternativeText"]}}},
      },
    },
  };
  return async (ctx, next) => {
    ctx.query.populate = homepagePopulateQuery;
    strapi.log.info("In homepage-middleware middleware.");

    await next();
  };
};
