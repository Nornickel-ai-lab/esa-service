export const env = {
  apiBase: '/api/v1',
  defaultRedirectUri: import.meta.env.VITE_DEFAULT_REDIRECT_URI ?? 'http://localhost:8080/auth/callback',
} as const;
