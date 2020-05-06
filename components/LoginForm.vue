<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="image-box">
        <img src="../assets/images/login-illustration.svg" class="">
      </div>
      <div class="form-box">
        <h2 class="ant-typography">
          <img src="../assets/images/icon_125.png" alt="Logo" height="40" width="40" style="margin: 5px;">
          <span style="font-weight: bold;">Pass</span>Wall
        </h2>
        <div class="ant-typography">
          Login to the Dashboard
        </div>
        <b-message :active.sync="isError" type="is-danger">
          {{ errorMessage }}
        </b-message>
        <form @submit.prevent="signinUser" method="post">
          <div class="field">
            <label for="" class="label">Base URL</label>
            <div class="control has-icons-left">
              <b-icon
                pack="fas"
                icon="globe"
                size="is-small"
              />
              <input
                v-model="userForm.baseurl"
                type="text"
                placeholder="https://passwall-server.hakanpeksen.com"
                class="input"
                required
              >
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Username</label>
            <div class="control has-icons-left">
              <b-icon
                pack="fas"
                icon="user"
                size="is-small"
              />
              <input v-model="userForm.username" type="text" placeholder="Username" class="input" required>
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Password</label>
            <div class="control has-icons-left">
              <b-icon
                pack="fas"
                icon="lock"
                size="is-small"
              />
              <input v-model="userForm.password" type="text" placeholder="Password" class="input" required>
            </div>
          </div>
          <div class="field">
            <button class="button is-info">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userForm: {
        baseurl: process.env.baseURL || '',
        username: '',
        password: ''
      },
      isError: false,
      errorMessage: null
    }
  },

  created() {
  },
  //   asyncData({ store, redirect }) {
  //     if (store.state.auth.loggedIn === true) {
  //       return redirect('/user/alerts')
  //     }
  //   },
  methods: {
    async signinUser() {
      try {
        await this.$axios.post('https://passwall-server.hakanpeksen.com/auth/signin', this.userForm)
        this.$buefy.toast.open({
          message: 'You have successfully logged in!',
          type: 'is-success',
          position: 'is-top',
          duration: 3000
        })
      } catch (e) {
        this.errorMessage = 'Your email address or password don\'t match!'
        this.isError = true
      }
    }
  }

}
</script>

<style scoped>
</style>
