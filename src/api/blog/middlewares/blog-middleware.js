"use strict";

/**
 * `blog-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const blogPopulate = {
    thumbnail: { fields: ["url", "documentId", "alternativeText"] },
    // populate: {
    // },
  };
  return async (ctx, next) => {
    // ctx.query.populate = blogPopulate;
    strapi.log.info("In blog-middleware middleware.");
    console.log(ctx);
    // if (ctx.params.id || ctx.params.slug) {
    //   let blogpost = {};
    //   if (ctx.params.id) {
    //     blogpost = await strapi.entityService.findOne(
    //       "api::blog.blog",
    //       ctx.params.id,
    //       { populate: { thumbnail: { fields: ["url"] } } }
    //     );
    //   }
    //   ctx.state.blog = blogpost;
    // }

    await next();
  };
};
