export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface Consultant {
  id: string;
  name: string;
  role: string;
  description: string;
  initials: string;
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface MedicalFeature {
  id: string;
  label: string;
}
