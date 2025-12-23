
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  isFeatured?: boolean;
  stock: number;
  slogan?: string;
}

export interface Service {
  id: string;
  name: string;
  abbr: string;
  descriptionShort: string;
  descriptionLong: string;
  price: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  videoUrl?: string;
  isFeatured?: boolean;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Comité Exécutif' | 'Conseil d’administration';
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  isImportant: boolean;
}
