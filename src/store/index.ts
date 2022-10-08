import { groupBy } from '@/helpers/helpers'
import { UserItem } from '@/types'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [] as Array<UserItem>
  },
  getters: {
    users: ( state ) => {
      return groupBy( state.users )
    }
  },
  mutations: {
    setUsers( state, users: Array<UserItem> ) {
      state.users = users
    }
  },
  actions: {
    async getUsers() {
      try {
        const response = await fetch( 'https://jsonplaceholder.typicode.com/todos' )
        const users: Array<UserItem> = await response.json()
        this.commit( 'setUsers', users )
      } catch ( error ) {
        console.log( error )
      }
    }
  },
  modules: {},
})
