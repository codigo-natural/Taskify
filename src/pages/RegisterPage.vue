<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg">
      <q-card-section>
        <div class="text-h6">Registrarse</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <q-input
            v-model="name"
            label="Nombre"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor, ingresa tu nombre',
            ]"
          />
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
            label="Registrarse"
            color="primary"
            class="full-width"
            @click="register"
          />
        </q-form>
      </q-card-section>
      <q-card-section>
        <div>
          ¿Ya tienes una cuenta?
          <router-link to="/login">Inicia sesión</router-link>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const name = ref("");
    const email = ref("");
    const password = ref("");

    function register() {
      console.log("Nombre:", name.value);
      console.log("Email:", email.value);
      console.log("Contraseña:", password.value);

      // Redirigir a la página de inicio de sesión después del registro
      router.push("/login");
    }

    return {
      name,
      email,
      password,
      register,
    };
  },
};
</script>
