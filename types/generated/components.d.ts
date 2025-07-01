import type { Schema, Struct } from '@strapi/strapi';

export interface FooterContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_informations';
  info: {
    displayName: 'ContactInformation';
  };
  attributes: {
    contactListing: Schema.Attribute.Component<'footer.contact-listing', true>;
  };
}

export interface FooterContactListing extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_listings';
  info: {
    displayName: 'contactListing';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface HomeBannerSectionChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_section_chooseuses';
  info: {
    displayName: 'chooseUs';
  };
  attributes: {
    chooseUsTiles: Schema.Attribute.Component<'tiles.banner-tiles', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HomeBannerSectionHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_section_home_banners';
  info: {
    displayName: 'HomeBanner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'>;
    BookAppointmentButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Tiles: Schema.Attribute.Component<'tiles.banner-tiles', true>;
    Title: Schema.Attribute.Text;
    ViewServiceButtonText: Schema.Attribute.String;
  };
}

export interface HomeBannerSectionLocationSectionHome
  extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_section_location_section_homes';
  info: {
    displayName: 'Location Section Home';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    LocationsList: Schema.Attribute.Component<
      'home-banner-section.locations',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface HomeBannerSectionLocations extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_section_locations';
  info: {
    displayName: 'Locations';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Location: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    textList: Schema.Attribute.Component<'text-list.text-list', true>;
    Timing: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomeBannerSectionTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_section_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    grade: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    review: Schema.Attribute.Text;
  };
}

export interface HomeBannerSectionWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_section_why_choose_uses';
  info: {
    displayName: 'Why Choose Us';
  };
  attributes: {
    chooseUsTiles: Schema.Attribute.Component<'tiles.banner-tiles', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    servicesList: Schema.Attribute.Component<'tiles.banner-tiles', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TextListTextList extends Struct.ComponentSchema {
  collectionName: 'components_text_list_text_lists';
  info: {
    displayName: 'Text List';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface TilesBannerTiles extends Struct.ComponentSchema {
  collectionName: 'components_tiles_banner_tiles';
  info: {
    displayName: 'bannerTiles';
  };
  attributes: {
    features: Schema.Attribute.Component<'text-list.text-list', true>;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.contact-information': FooterContactInformation;
      'footer.contact-listing': FooterContactListing;
      'home-banner-section.choose-us': HomeBannerSectionChooseUs;
      'home-banner-section.home-banner': HomeBannerSectionHomeBanner;
      'home-banner-section.location-section-home': HomeBannerSectionLocationSectionHome;
      'home-banner-section.locations': HomeBannerSectionLocations;
      'home-banner-section.testimonials': HomeBannerSectionTestimonials;
      'home-banner-section.why-choose-us': HomeBannerSectionWhyChooseUs;
      'services.services': ServicesServices;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'text-list.text-list': TextListTextList;
      'tiles.banner-tiles': TilesBannerTiles;
    }
  }
}
