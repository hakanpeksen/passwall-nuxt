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
          <span v-if="errorValidUrl">{{ errorValidMessage }}</span>
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
          <div class="control">
            <button type="submit" name="button" class="button is-medium is-info">
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
      errorMessage: null,
      errorValidMessage: null,
      errorValidUrl: false
    }
  },

  created() {
  },
  methods: {
    async signinUser() {
      const url = this.userForm.baseurl
      const urlRegExp = /^(?:([a-z0-9+.-]+):\/\/)(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/ // eslint-disable-line max-len
      if (!urlRegExp.test(url)) {
        this.errorValidUrl = true
        this.errorValidMessage = 'BaseURL must be a valid URL'
      } else {
        this.errorValidUrl = false
        this.errorValidMessage = ''
      }
      try {
        await this.$auth.login({ data: this.userForm })
        this.$router.push({ path: '/password' })
        this.isError = false
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
