// imports
import { defineStore } from 'pinia'
import db from '@/db.json'
export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: db,
        filtered: db,
    }),
    actions: {
        // search
        searchUsers(searchBox){
            this.filtered = !searchBox ? this.users : this.users.filter(item => item.orderId.includes(searchBox))
        },
        //  delete
        delete(orderId) {
            this.users = this.users.filter(user => user.orderId != orderId)
        },
        //  clear
        clear() {
            this.users = []
        }
    }
    })
  