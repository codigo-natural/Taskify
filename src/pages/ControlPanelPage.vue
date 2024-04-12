<template>
  <q-page class="flex flex-col items-center justify-center">
    <div class="text-center">
      <h4 class="q-mb-md">Panel de Control</h4>
      <p v-if="user">
        <span class="text-weight-bold">Nombre:</span> {{ user.name }}
      </p>
      <p v-if="user">
        <span class="text-weight-bold">Correo electrónico:</span>
        {{ user.email }}
      </p>
      <q-btn
        color="negative"
        label="Cerrar sesión"
        @click="logout"
        class="q-mt-md"
      />
    </div>
  </q-page>
</template>

<script>
import { useAuthStore } from "src/stores/modules/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    return {
      user: authStore.user,
      logout() {
        authStore.logout();
        router.push("/login");
      },
    };
  },
};
</script>
