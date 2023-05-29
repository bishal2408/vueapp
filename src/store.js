import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLoginStore = defineStore({
    id: "login",
    state: () => reactive({
        isLoggedIn: true
    }),

    actions: {
        checkLogin() {
            if(localStorage.getItem('data')) return this.isLoggedIn
            return !this.isLoggedIn
        }
    }
}) 