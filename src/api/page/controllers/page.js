"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findAll(ctx) {
    const pages = await strapi.service("api::page.page").findAll();
    return pages;
  },
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const entity = strapi.service("api::page.page").findBySlug(slug);

    if (!entity) {
      return ctx.notFound("page not found");
    } else return entity;
  },
}));
