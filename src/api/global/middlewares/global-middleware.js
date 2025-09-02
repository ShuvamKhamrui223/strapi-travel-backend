"use strict";

/**
 * `global-middleware` middleware
 */
const imagePopulate = {
  fields: ["documentId", "url", "alternativeText"],
};
module.exports = (config, { strapi }) => {
  const populateQuery = {
    headerBanner: true,
    navbar: {
      populate: {
        logo: imagePopulate,
        navlinks: true,
        getStartedLink: true,
      },
    },
    globalCta: {
      populate: {
        ctaLink: true,
        backgroundImage: imagePopulate,
      },
    },
    footer: {
      populate: {
        footerLogo: imagePopulate,
        footerNewsletter: true,
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
