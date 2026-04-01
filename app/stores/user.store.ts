import { defineStore } from 'pinia'
import type { PersonalUser } from '~/types/user'

interface UserState {
  user: PersonalUser | null
  loading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    loading: false,
    error: null
  }),

  getters: {
    isLoggedIn: (state): boolean => !!state.user,
    
    userName: (state): string => {
      return state.user?.nickname || state.user?.login || 'Гость'
    },
    
    isAdmin: (state): boolean => state.user?.isAdmin || false
  },

  actions: {
    setUser(userData: PersonalUser) {
      this.user = userData
    },

    clearUser() {
      this.user = null
    },

    async updateAvatar(newAvatarUrl: string) {
      if (this.user) {
        this.user.avatar = newAvatarUrl
      }
    }
  },

  persist: true
})