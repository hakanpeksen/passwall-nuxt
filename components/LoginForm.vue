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
          <b-field label="Base URL" label-for="uf_baseurl">
            <b-input
              id="uf_baseurl"
              v-model="userForm.baseurl"
              type="text"
              size="is-medium"
              placeholder="https://passwall-server.hakanpeksen.com"
              required
              autofocus
            />
          </b-field>
          <b-field label="Username" label-for="uf_username">
            <b-input
              id="uf_username"
              v-model="userForm.username"
              type="text"
              size="is-medium"
              placeholder="Username"
              required
              autofocus
            />
          </b-field>
          <b-field label="Password" label-for="uf_password">
            <b-input
              id="uf_password"
              v-model="userForm.password"
              type="password"
              size="is-medium"
              placeholder="Password"
              required
              password-reveal
            />
          </b-field>
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

<style>
.is-medium.input, .is-medium.textarea {
    font-size: 1.10rem !important;
}
.ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    display: inline-flex;
    max-height: 32px;
}

</style>
