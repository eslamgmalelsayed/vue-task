// imports
import { defineStore } from 'pinia'
import db from '@/db.json'
export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: db,
    }),
    actions: {
        // search
        searchUsers(searchBox){
            this.users = !searchBox ? this.users = db : this.users.filter(user => user.orderId.includes(searchBox))
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
  