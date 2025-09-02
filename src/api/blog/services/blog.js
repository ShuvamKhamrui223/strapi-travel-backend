"use strict";

/**
 * blog service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::blog.blog", ({ strapi }) => ({
  async findAll() {
    return await strapi.db.query("api::blog.blog").findMany({
      populate: ["thumbnail", "blog.authors"],
      filters: {
        publishedAt: { $notNull: true },
      },
      orderBy: { publishedAt: "desc" },
    });
  },
  async findBySlug(slug) {
    return await strapi.db.query("api::blog.blog").findOne({
      where: { slug },
      populate: ["thumbnail"],
    });
  },
}));
