"use strict";

/**
 * `global-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  const populateQuery = {
    navbar: {
      populate: {
        logo: { fields: ["documentId", "url"] },
        navlinks: true,
      },
    },
  };
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populateQuery;
    strapi.log.info("In global-middleware middleware.");

    await next();
  };
};
