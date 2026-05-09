import { en } from './en';
import { zh } from './zh';

export type Locale = 'en' | 'zh';
export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, typeof en> = { en, zh };

export function t(locale: Locale): typeof en {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const lang = url.searchParams.get('lang');
  if (lang === 'zh') return 'zh';
  if (lang === 'en') return 'en';
  return defaultLocale;
}

export function localePath(locale: Locale, path: string = '/'): string {
  if (path === '/') return `/?lang=${locale}`;
  return `${path}?lang=${locale}`;
}
