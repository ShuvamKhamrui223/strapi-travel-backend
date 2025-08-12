'use strict';

/**
 * `blog-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const blogPopulate = {
    
  }
  return async (ctx, next) => {
    
    strapi.log.info('In blog-middleware middleware.');

    await next();
  };
};
