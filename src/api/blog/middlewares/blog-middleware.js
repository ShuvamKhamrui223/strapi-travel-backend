"use strict";

/**
 * `blog-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const blogPopulate = {
    populate: {
      thumbnail: { fields: ["documentId", "url", "alternativeText"] },
    },
  };
  return async (ctx, next) => {
    strapi.log.info("In blog-middleware middleware.");
    ctx.query.populate = blogPopulate;
    await next();
  };
};
