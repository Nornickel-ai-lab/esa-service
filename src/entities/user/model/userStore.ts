import { defineStore } from 'pinia';
import { ref } from 'vue';

import { postLogin } from '@/entities/user/api/userApi';
import type { LoginPayload } from '@/entities/user/model/types';

const TOKEN_KEY = 'access_token';

export const useUserStore = defineStore('user', () => {
  const token = ref<string>(localStorage.getItem(TOKEN_KEY) ?? '');

  const setToken = (value: string): void => {
    token.value = value;
    localStorage.setItem(TOKEN_KEY, value);
  };

  const clearSession = (): void => {
    token.value = '';
    localStorage.removeItem(TOKEN_KEY);
  };

  const login = async (payload: LoginPayload): Promise<string> => {
    const response = await postLogin(payload);
    setToken(response.access_token);
    return response.access_token;
  };

  const isAuthenticated = (): boolean => {
    return token.value.length > 0;
  };

  return {
    token,
    login,
    clearSession,
    isAuthenticated,
  };
});
