interface BaseEntity {
  _id: string;
}

interface Paragraph extends BaseEntity {
  header: string;
  desc: string;
}

interface Image extends BaseEntity {
  alt: string;
  src: string;
}

// interface Background extends BaseEntity {
//   image: Image
//   color: string;
// }

// interface Link extends BaseEntity {
//   text: string
//   href: string
// }


export interface ImageSectionType extends Image, Paragraph {
  buttonText?: string; // Optional field for button text
}

export type MortgageType = 'new' | 'refinance' | 'reverse';

export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  mortgageType: MortgageType;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}