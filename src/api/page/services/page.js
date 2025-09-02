"use strict";

/**
 * page service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::page.page", ({ strapi }) => ({
  async findAll() {
    return await strapi.db
      .query("api::page.page")
      .findMany({ orderBy: { publishedAt: "desc" } });
  },
  async findBySlug(slug) {
    const page = await strapi.db.query("api::page.page").findOne({
      where: { slug },
      populate: ["blocks", "blocks.cta", "blocks.ctaLink"],
    });
    return page;
  },
}));
