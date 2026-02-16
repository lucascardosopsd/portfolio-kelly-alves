import { revalidateTag } from 'next/cache';

export const cacheTags = {
  SERVICES: 'services',
  RESULTS: 'results',
  RATINGS: 'ratings',
  PROFILE: 'profile',
  HERO: 'hero',
} as const;

export type CacheTag = typeof cacheTags[keyof typeof cacheTags];

export function revalidateCache(...tags: CacheTag[]) {
  tags.forEach((tag) => revalidateTag(tag, 'max'));
}

export function revalidateAllCache() {
  revalidateCache(
    cacheTags.SERVICES,
    cacheTags.RESULTS,
    cacheTags.RATINGS,
    cacheTags.PROFILE,
    cacheTags.HERO
  );
}