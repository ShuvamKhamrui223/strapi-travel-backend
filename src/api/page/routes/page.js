"use strict";

/**
 * page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::page.page", {
  config: { find: { middlewares: ["api::page.dynamic-page-middleware"] } },
});
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/pages/:slug",
      handler: "page.findBySlug",
      config: { auth: false },
    },
    {
      method: "GET",
      path: "/pages",
      handler: "page.findAll",
      config: { auth: false },
    },
  ],
};
