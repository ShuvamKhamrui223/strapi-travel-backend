"use strict";

/**
 * blog router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::blog.blog", {
  config: {
    find: { middlewares: ["api::blog.blog-middleware"] },
  },
});
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blogs",
      handler: "blog.findAll",
      config: { auth: false },
    },
    {
      method: "GET",
      path: "/blogs/:slug",
      handler: "blog.findBySlug",
      config: { auth: false },
    },
  ],
};
