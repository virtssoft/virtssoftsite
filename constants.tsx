
import React from 'react';
import { Product, Service, BlogPost, TeamMember, TimelineEvent } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'veido-330',
    name: 'Veido-330',
    category: 'Objets connectés',
    description: 'Une vie améliorée avec une connectivité sans faille.',
    price: 125000,
    image: 'https://picsum.photos/seed/veido330/800/600',
    stock: 120,
    slogan: 'Innovation pure'
  },
  {
    id: 'veido-conlight',
    name: 'Veido-Conlight',
    category: 'Objets connectés',
    description: 'L’éclairage intelligent pour votre maison moderne.',
    price: 45000,
    image: 'https://picsum.photos/seed/conlight/800/600',
    stock: 45,
    slogan: 'Éclairez votre futur'
  },
  {
    id: 'solar-core',
    name: 'Solar-Core v1',
    category: 'Énergies renouvelables',
    description: 'Énergie propre, partout, tout le temps.',
    price: 350000,
    image: 'https://picsum.photos/seed/solar/800/600',
    stock: 10,
    slogan: 'L’avenir est solaire'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'adn',
    abbr: 'Acad',
    name: 'EM Academia',
    descriptionShort: 'Le futur de l’éducation numérique.',
    descriptionLong: 'Une plateforme complète pour la gestion des institutions académiques, offrant des outils d’apprentissage et d’administration de pointe.',
    price: 'À partir de 50$ / mois',
    image: 'https://picsum.photos/seed/acad/800/600'
  },
  {
    id: 'biz',
    abbr: 'Biz',
    name: 'EM Business',
    descriptionShort: 'Optimisez votre entreprise avec Virtssoft.',
    descriptionLong: 'Une suite logicielle robuste pour les entreprises de toutes tailles, permettant une automatisation intelligente de vos processus.',
    price: 'Sur devis',
    image: 'https://picsum.photos/seed/biz/800/600'
  },
  {
    id: 'tools',
    abbr: 'Tools',
    name: 'EM Tools',
    descriptionShort: 'Des outils de développement avancés.',
    descriptionLong: 'Accédez à une bibliothèque d’outils conçus pour accélérer votre productivité technique et créative.',
    price: 'Gratuit - Version standard',
    image: 'https://picsum.photos/seed/tools/800/600'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'tech-innov-2025',
    title: 'TECH-INNOV 2025',
    category: 'Innovation',
    date: '24 Janvier 2025',
    author: 'Equipe Virtssoft',
    image: 'https://picsum.photos/seed/tech/1200/800',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isFeatured: true,
    content: 'Découvrez les dernières innovations présentées lors de notre événement phare TECH-INNOV.'
  },
  {
    id: 'cloud-security',
    title: 'Sécurité Cloud en 2025',
    category: 'Tech & IA',
    date: '15 Janvier 2025',
    author: 'Jean Dupont',
    image: 'https://picsum.photos/seed/cloud/800/600',
    content: 'Comment protéger vos données dans un monde de plus en plus connecté.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'John Doe',
    role: 'CEO & Fondateur',
    category: 'Comité Exécutif',
    image: 'https://picsum.photos/seed/ceo/600/800',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'cto',
    name: 'Jane Smith',
    role: 'Directrice Technique',
    category: 'Comité Exécutif',
    image: 'https://picsum.photos/seed/cto/600/800',
    socials: { linkedin: '#' }
  }
];

export const HISTORY: TimelineEvent[] = [
  { year: '2020', title: 'Fondation', description: 'Création de Virtssoft Technologies à Goma.', isImportant: true },
  { year: '2022', title: 'Expansion', description: 'Lancement du programme EM Academia.', isImportant: true },
  { year: '2024', title: 'Innovation', description: 'Déploiement des premières solutions IoT.', isImportant: true }
];
