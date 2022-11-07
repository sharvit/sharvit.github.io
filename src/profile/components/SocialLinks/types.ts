export type SocialLinkType = 'github' | 'twitter' | 'stackoverflow' | 'email';

export interface ISocialLink {
  type: SocialLinkType;
  href: string;
  label: string;
}
