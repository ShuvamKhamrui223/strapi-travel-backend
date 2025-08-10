"use strict";

/**
 * `homepage-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  // mug 100 buli 100 sorser tel 500 chicken 2
  const homepageQuery = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            heroBannerImage: {
              fields: ["url", "alternativeText", "documentId"],
            },
            exploreButton: true,
          },
        },
      },
    },
  };
  return async (ctx, next) => {
    ctx.query.populate = homepageQuery;
    strapi.log.info("In homepage-middleware middleware.");

    await next();
  };
};
