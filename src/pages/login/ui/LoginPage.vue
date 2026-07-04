<script setup lang="ts">
import LoginForm from '@/features/auth/login/ui/LoginForm.vue';
import { ui } from '@/shared/config/ui';
</script>

<template>
  <div class="dark flex min-h-screen flex-col bg-[#060a09] text-foreground lg:flex-row">
    <p class="px-6 pt-8 text-3xl font-bold tracking-tight text-white sm:px-12 sm:text-4xl lg:hidden">
      {{ ui.loginHeroBrand }}
    </p>

    <aside
      class="login-hero relative hidden min-h-screen w-1/2 shrink-0 overflow-hidden lg:block"
    >
      <p class="absolute left-12 top-12 text-4xl font-bold tracking-tight text-white xl:left-16 xl:top-16 xl:text-5xl">
        {{ ui.loginHeroBrand }}
      </p>
    </aside>

    <main class="flex flex-1 flex-col justify-center px-6 py-10 sm:px-12 lg:w-1/2 lg:px-16 lg:py-12 xl:px-24">
      <div class="mx-auto w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  </div>
</template>

<style scoped>
.login-hero {
  background-color: #061210;
  background-image: radial-gradient(
    ellipse 90% 80% at 20% 50%,
    #2ec4b6 0%,
    #1a9e8f 22%,
    #0f6b62 42%,
    #0a3d38 62%,
    #061210 100%
  );
}
</style>
