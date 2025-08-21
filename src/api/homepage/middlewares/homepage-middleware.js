"use strict";

/**
 * `homepage-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  const homepagePopulateQuery = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            heroBanner: { fields: ["url", "documentId", "alternativeText"] },
            heroButtons: true,
          },
        },
        "blocks.story": {
          populate: {
            story: {
              populate: {
                sectionMedia: {
                  fields: ["url", "alternativeText", "documentId"],
                },
                sectionWithImageHeader: true,
              },
            },
          },
        },
        "blocks.trip": {
          populate: {
            trips: {
              populate: {
                coverImage: {
                  fields: ["url", "alternativeText", "documentId"],
                },
                tripBannerImage: {
                  fields: ["url", "alternativeText", "documentId"],
                },
              },
            },
            tripSectionHeader: true,
          },
        },
        "blocks.team-members": {
          populate: {
            teamHeader: true,
            team_members: {
              populate: {
                memberProfilePic: {
                  fields: ["url", "documentId", "alternativeText"],
                },
                socialLinks: {
                  populate: {
                    platformIcon: {
                      fields: ["url", "documentId", "alternativeText"],
                    },
                  },
                },
              },
            },
          },
        },
        "blocks.testimonials": {
          populate: { testimonials: true },
        },
        "blocks.cta": {
          populate: {
            ctaLink: true,
            backgroundImage: {
              fields: ["url", "documentId", "alternativeText"],
            },
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
