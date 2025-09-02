"use strict";

/**
 * `homepage-middleware` middleware
 */
const imagePopulate = { fields: ["url", "alternativeText"] };
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const homepagePopulateQuery = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            heroButtons: true,
            floatingImages: imagePopulate,
            badge: { populate: { badgeIcon: imagePopulate } },
          },
        },
        "blocks.our-commitments": {
          populate: {
            commitmentCollapsable: true,
            longImage: imagePopulate,
          },
        },
        "blocks.result": {
          populate: {
            resultHeader: true,
            results: { populate: { cardIcon: imagePopulate } },
          },
        },
        "blocks.team-members": {
          populate: {
            teamHeader: true,
            team_members: { populate: { memberProfilePic: imagePopulate } },
          },
        },
      },
    },
  };
  return async (ctx, next) => {
    ctx.query.populate = homepagePopulateQuery;
    strapi.log.info("In homepage-middleware middleware.");

    await next();
  };
};
