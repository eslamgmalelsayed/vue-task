// imports
import { defineStore } from 'pinia'
import db from '@/db.json'
export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: db,
    }),
    actions: {
        searchUsers(searchBox){
            this.users = !searchBox ? this.users = db : this.users.filter(user => user.orderId == searchBox)
        }
    }
    })
  