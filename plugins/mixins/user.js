import Vue from 'vue'
import { mapGetters } from 'vuex'

const User = {
  install(Vue) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          loggedIn: 'loggedIn',
          user: 'user'
        })
      }
    })
  }
}

Vue.use(User)
