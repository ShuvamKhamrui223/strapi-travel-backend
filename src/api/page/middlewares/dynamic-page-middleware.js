"use strict";

/**
 * `dynamic-page-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  
  return async (ctx, next) => {
    strapi.log.info("In dynamic-page-middleware middleware.");

    await next();
  };
};
