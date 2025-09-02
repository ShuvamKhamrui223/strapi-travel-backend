"use strict";

/**
 * `trip-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const tripQuery = {
    coverImage: {
      fields: ["url", "alternativeText", "documentId"],
    },
    tripBannerImage: {
      fields: ["url", "alternativeText", "documentId"],
    },
  };
  return async (ctx, next) => {
    ctx.query.populate = tripQuery;
    strapi.log.info("In trip-middleware middleware.");
    await next();
  };
};
