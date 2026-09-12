import { MetadataRoute } from 'next';
import { FRAMEWORKS, ARTICLES } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://somakirangonella.com';

  const staticRoutes = [
    '',
    '/thinking',
    '/book',
    '/sigmago',
    '/writing',
    '/experience',
    '/about',
    '/contact',
    '/book-a-conversation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const frameworkRoutes = FRAMEWORKS.map((fw) => ({
    url: `${baseUrl}/thinking/${fw.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${baseUrl}/writing/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...frameworkRoutes, ...articleRoutes];
}
