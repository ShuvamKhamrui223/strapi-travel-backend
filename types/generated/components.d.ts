import type { Schema, Struct } from '@strapi/strapi';

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

export interface BlocksStory extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    ourStory: Schema.Attribute.Component<
      'common.section-header-content',
      false
    >;
    storyBanner: Schema.Attribute.Media<'images' | 'videos'>;
    storyDescription: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cta': BlocksCta;
      'blocks.hero': BlocksHero;
      'blocks.story': BlocksStory;
      'common.link': CommonLink;
      'common.navbar': CommonNavbar;
      'common.section-header-content': CommonSectionHeaderContent;
    }
  }
}
