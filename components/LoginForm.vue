<template>
  <div class="container">
    <div class="hero-body">
      <form @submit.prevent="signinUser" method="post">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box has-background-lighter">
              <div class="p-md">
                <div class="content p-b-lg">
                  <p class="has-text-left has-text-weight-normal">
                    Login to the Dashboard
                  </p>
                </div>
                <b-field class="p-t-xs trend-form" label="Base URL" label-for="uf_text">
                  <span class="icon is-small is-left">
                    <i
                      pack="fas"
                      icon="lock"
                      size="is-medium"
                    />
                  </span>
                  <b-icon
                    pack="fas"
                    icon="lock"
                    size="is-medium"
                  />
                  <b-input
                    id="uf_text"
                    v-model="userForm.baseurl"
                    type="text"
                    size="is-medium"
                    placeholder="http://0.0.0.0:3625"
                    required
                    autofocus
                  />
                </b-field>
                <b-field class="p-t-xs trend-form" label="Username" label-for="uf_email">
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
                <b-field class="p-t-md trend-form" label="Password" label-for="uf_password">
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
                <div class="field p-t-md has-text-right">
                  <div class="control">
                    <button type="submit" name="button" class="button is-medium is-primary is-fullwidth">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        baseurl: '',
        username: '',
        password: ''
      }
    //   isError: false,
    //   errorMessage: null
    }
  },
  //   asyncData({ store, redirect }) {
  //     if (store.state.auth.loggedIn === true) {
  //       return redirect('/user/alerts')
  //     }
  //   },
  methods: {
    async signinUser() {
      try {
        await this.$axios.post({ data: this.userForm })

        this.$toast.open({
          message: 'You have successfully logged in!',
          type: 'is-success',
          position: 'is-bottom',
          duration: 7000
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
 .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 60px);
        }

</style>
