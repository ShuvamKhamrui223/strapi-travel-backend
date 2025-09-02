"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async findAll(ctx) {
    const blogs = await strapi.service("api::blog.blog").findAll();
    // if (!blogs) return ctx.notFound("there is no blog ");
    return blogs;
  },

  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const blog = await strapi.service("api::blog.blog").findBySlug(slug);

    if (!blog) return ctx.notFound("no bliog found with the given slug");
    return blog;
  },
}));
