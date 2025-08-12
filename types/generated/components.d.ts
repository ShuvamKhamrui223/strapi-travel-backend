import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlog extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    blogHeader: Schema.Attribute.Component<
      'common.section-header-content',
      false
    >;
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'videos'>;
    ctaLink: Schema.Attribute.Component<'common.link', false>;
    description: Schema.Attribute.String;
    isBackgroundImageSticky: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'this is a cta title'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heroBanner: Schema.Attribute.Media<'images' | 'videos'>;
    heroDescription: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'hero title'>;
  };
}

export interface BlocksOurMission extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_missions';
  info: {
    displayName: 'our mission';
  };
  attributes: {
    ourMission: Schema.Attribute.Component<'common.section-with-image', false>;
  };
}

export interface BlocksStory extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    story: Schema.Attribute.Component<'common.section-with-image', false>;
  };
}

export interface BlocksTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_members';
  info: {
    displayName: 'teamMembers';
  };
  attributes: {
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    teamHeader: Schema.Attribute.Component<
      'common.section-header-content',
      false
    >;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    testimonialHeader: Schema.Attribute.Component<
      'common.section-header-content',
      false
    >;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface BlocksTrip extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trips';
  info: {
    displayName: 'trip';
  };
  attributes: {
    showSectionHeader: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    trips: Schema.Attribute.Relation<'oneToMany', 'api::trip.trip'>;
    tripSectionHeader: Schema.Attribute.Component<
      'common.section-header-content',
      false
    >;
  };
}

export interface CommonContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_details';
  info: {
    displayName: 'contactDetails';
  };
  attributes: {
    info: Schema.Attribute.String;
    infoLabel: Schema.Attribute.String;
  };
}

export interface CommonContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_infos';
  info: {
    displayName: 'contactInfoBlock';
  };
  attributes: {
    contactInfoTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'contact info'>;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'link title'>;
    url: Schema.Attribute.String;
  };
}

export interface CommonNavbar extends Struct.ComponentSchema {
  collectionName: 'components_common_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    navlinks: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface CommonSectionHeaderContent extends Struct.ComponentSchema {
  collectionName: 'components_common_section_header_contents';
  info: {
    displayName: 'sectionHeaderContent';
  };
  attributes: {
    backgroundTitle: Schema.Attribute.String;
    foregroundSutitle: Schema.Attribute.String;
    foregroundTitle: Schema.Attribute.String;
  };
}

export interface CommonSectionWithImage extends Struct.ComponentSchema {
  collectionName: 'components_common_section_with_images';
  info: {
    displayName: 'section with image';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    imageOnleft: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    sectionHeaderSectionWithImage: Schema.Attribute.Component<
      'common.section-header-content',
      false
    > &
      Schema.Attribute.Required;
    sectionMedia: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface CommonSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_common_social_links';
  info: {
    displayName: 'social links';
  };
  attributes: {
    platformIcon: Schema.Attribute.Media<'images'>;
    platformName: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog': BlocksBlog;
      'blocks.cta': BlocksCta;
      'blocks.hero': BlocksHero;
      'blocks.our-mission': BlocksOurMission;
      'blocks.story': BlocksStory;
      'blocks.team-members': BlocksTeamMembers;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.trip': BlocksTrip;
      'common.contact-details': CommonContactDetails;
      'common.contact-info': CommonContactInfo;
      'common.link': CommonLink;
      'common.navbar': CommonNavbar;
      'common.section-header-content': CommonSectionHeaderContent;
      'common.section-with-image': CommonSectionWithImage;
      'common.social-links': CommonSocialLinks;
    }
  }
}
