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
    badge: Schema.Attribute.Component<'common.badge', false>;
    floatingImages: Schema.Attribute.Media<'images', true>;
    heroButtons: Schema.Attribute.Component<'common.link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    heroDescription: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'hero title'>;
  };
}

export interface BlocksJoinOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_join_our_teams';
  info: {
    displayName: 'join-our-team';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    floatingImages: Schema.Attribute.Media<'images', true>;
    job_openings: Schema.Attribute.Relation<
      'oneToMany',
      'api::job-opening.job-opening'
    >;
    jobsHeader: Schema.Attribute.Component<'common.section-header', false>;
  };
}

export interface BlocksNewsletterForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_newsletter_forms';
  info: {
    displayName: 'newsletterForm';
  };
  attributes: {
    description: Schema.Attribute.Text;
    emailFieldPlaceholder: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    newsletterFormButtonLabel: Schema.Attribute.String;
  };
}

export interface BlocksOurCommitments extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_commitments';
  info: {
    displayName: 'our-commitments';
  };
  attributes: {
    commitmentCollapsable: Schema.Attribute.Component<
      'common.collapsable',
      true
    >;
    description: Schema.Attribute.String;
    longImage: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksOurMission extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_missions';
  info: {
    displayName: 'our-mission';
  };
  attributes: {
    ourMission: Schema.Attribute.Component<'common.section-with-image', false>;
  };
}

export interface BlocksResult extends Struct.ComponentSchema {
  collectionName: 'components_blocks_results';
  info: {
    displayName: 'result';
  };
  attributes: {
    resultHeader: Schema.Attribute.Component<'common.section-header', false>;
    results: Schema.Attribute.Component<'common.result-card', true>;
  };
}

export interface BlocksTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_members';
  info: {
    displayName: 'team-members';
  };
  attributes: {
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    teamHeader: Schema.Attribute.Component<'common.section-header', false>;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    testimonialHeader: Schema.Attribute.Component<
      'common.section-header',
      false
    >;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface CommonBadge extends Struct.ComponentSchema {
  collectionName: 'components_common_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    badgeIcon: Schema.Attribute.Media<'images'>;
    badgeTitle: Schema.Attribute.String;
    iconOnLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface CommonBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    bannerContent: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 2;
      }>;
  };
}

export interface CommonCollapsable extends Struct.ComponentSchema {
  collectionName: 'components_common_collapsables';
  info: {
    displayName: 'collapsable';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface CommonFooter extends Struct.ComponentSchema {
  collectionName: 'components_common_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    footerLogo: Schema.Attribute.Media<'images'>;
    footerMenu: Schema.Attribute.JSON;
    footerNewsletter: Schema.Attribute.Component<
      'blocks.newsletter-form',
      false
    >;
    showNewsLetterForm: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    iconOnLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'link title'>;
    style: Schema.Attribute.Enumeration<['ghost', 'filled', 'outlined']> &
      Schema.Attribute.DefaultTo<'ghost'>;
    url: Schema.Attribute.String;
  };
}

export interface CommonNavbar extends Struct.ComponentSchema {
  collectionName: 'components_common_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    getStartedLink: Schema.Attribute.Component<'common.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    navlinks: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface CommonResultCard extends Struct.ComponentSchema {
  collectionName: 'components_common_result_cards';
  info: {
    displayName: 'result-card';
  };
  attributes: {
    cardIcon: Schema.Attribute.Media<'images'>;
    result: Schema.Attribute.String & Schema.Attribute.Required;
    resultDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    resultTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_common_section_headers';
  info: {
    displayName: 'sectionHeader';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CommonSectionHeaderContent extends Struct.ComponentSchema {
  collectionName: 'components_common_section_header_contents';
  info: {
    displayName: 'sectionHeaderContent';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
    sectionMedia: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    sectionWithImageHeader: Schema.Attribute.Component<
      'common.section-header-content',
      false
    > &
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
      'blocks.join-our-team': BlocksJoinOurTeam;
      'blocks.newsletter-form': BlocksNewsletterForm;
      'blocks.our-commitments': BlocksOurCommitments;
      'blocks.our-mission': BlocksOurMission;
      'blocks.result': BlocksResult;
      'blocks.team-members': BlocksTeamMembers;
      'blocks.testimonials': BlocksTestimonials;
      'common.badge': CommonBadge;
      'common.banner': CommonBanner;
      'common.collapsable': CommonCollapsable;
      'common.contact-details': CommonContactDetails;
      'common.contact-info': CommonContactInfo;
      'common.footer': CommonFooter;
      'common.link': CommonLink;
      'common.navbar': CommonNavbar;
      'common.result-card': CommonResultCard;
      'common.section-header': CommonSectionHeader;
      'common.section-header-content': CommonSectionHeaderContent;
      'common.section-with-image': CommonSectionWithImage;
      'common.social-links': CommonSocialLinks;
    }
  }
}
