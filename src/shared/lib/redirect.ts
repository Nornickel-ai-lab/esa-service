import { env } from '@/shared/config/env';

const ALLOWED_ORIGINS = [
  'http://localhost:8080',
  'http://127.0.0.1:8080',
];

const isAllowedRedirect = (url: URL): boolean => {
  if (ALLOWED_ORIGINS.includes(url.origin)) {
    return true;
  }
  if (url.port !== '8080') {
    return false;
  }
  const host = url.hostname;
  if (host === 'localhost' || host === '127.0.0.1') {
    return true;
  }
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(host)) {
    return true;
  }
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host)) {
    return true;
  }
  return false;
};

export const resolveRedirectUri = (value: unknown): string => {
  const fallback = env.defaultRedirectUri;
  if (typeof value !== 'string' || value.trim().length === 0) {
    return fallback;
  }
  try {
    const url = new URL(value);
    if (!isAllowedRedirect(url)) {
      return fallback;
    }
    return url.toString();
  } catch {
    return fallback;
  }
};

export const buildRedirectUrl = (redirectUri: string, accessToken: string): string => {
  const url = new URL(redirectUri);
  url.searchParams.set('access_token', accessToken);
  return url.toString();
};
