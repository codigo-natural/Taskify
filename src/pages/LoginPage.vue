<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg">
      <q-card-section>
        <div class="text-h6">Iniciar sesión</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <q-input
            v-model="email"
            label="Correo electrónico"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Por favor, ingresa tu correo electrónico',
            ]"
          />
          <q-input
            v-model="password"
            type="password"
            label="Contraseña"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor, ingresa tu contraseña',
            ]"
          />
          <q-btn
            label="Iniciar sesión"
            color="primary"
            class="full-width"
            @click="login"
          />
        </q-form>
      </q-card-section>
      <q-card-section>
        <div>
          ¿No tienes una cuenta?
          <router-link to="/register">Regístrate</router-link>
        </div>
      </q-card-section>

      <q-card-section v-if="errorMessage" class="text-red-500 mt-4">
        {{ errorMessage }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/modules/auth"; // Importar el store de autenticación de Pinia

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const authStore = useAuthStore();
    const errorMessage = ref(""); // Variable reactiva para el mensaje de error

    async function login() {
      try {
        await authStore.login(email.value, password.value); // Iniciar sesión utilizando el almacén de autenticación
        router.push("/control-panel");
      } catch (error) {
        // console.error("Error al iniciar sesión:", error);
        errorMessage.value =
          "Error al iniciar sesión. Por favor, verifica tus credenciales.";
      }
    }

    return {
      email,
      password,
      login,
      errorMessage,
    };
  },
};
</script>
