import { useRoute } from 'vue-router';

import { useUserStore } from '@/entities/user/model/userStore';
import type { LoginFormValues } from '@/features/auth/login/model/loginSchema';
import { buildRedirectUrl, resolveRedirectUri } from '@/shared/lib/redirect';

interface UseLoginReturn {
  submit: (values: LoginFormValues) => Promise<void>;
}

export const useLogin = (): UseLoginReturn => {
  const store = useUserStore();
  const route = useRoute();

  const submit = async (values: LoginFormValues): Promise<void> => {
    const accessToken = await store.login({
      email: values.email.trim(),
      password: values.password,
    });
    const redirectUri = resolveRedirectUri(route.query.redirect_uri);
    const target = buildRedirectUrl(redirectUri, accessToken);
    window.location.assign(target);
  };

  return {
    submit,
  };
};
