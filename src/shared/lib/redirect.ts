import { env } from '@/shared/config/env';

const ALLOWED_ORIGINS = [
  'http://localhost:8080',
  'http://127.0.0.1:8080',
];

export const resolveRedirectUri = (value: unknown): string => {
  const fallback = env.defaultRedirectUri;
  if (typeof value !== 'string' || value.trim().length === 0) {
    return fallback;
  }
  try {
    const url = new URL(value);
    if (!ALLOWED_ORIGINS.includes(url.origin)) {
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
