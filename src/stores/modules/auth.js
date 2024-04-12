import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  actions: {
    async login(email, password) {
      // Lógica de inicio de sesión (simulada)
      if (email === 'user@example.com' && password === 'password') {
        this.user = { name: 'John Doe', email }
        this.isAuthenticated = true
      } else {
        throw new Error('Credenciales inválidas')
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    }
  }
})
