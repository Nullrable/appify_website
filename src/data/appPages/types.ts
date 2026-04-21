export interface AppPageData {
  appId: string;
  features: Feature[];
  screenshots: string[];
  faqs: FAQ[];
  stats: {
    rating: number;
    ratingCount: string;
    downloads: string;
  };
}

export interface Feature {
  icon: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export interface FAQ {
  question: Record<string, string>;
  answer: Record<string, string>;
}