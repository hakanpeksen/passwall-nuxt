<template>
  <div class="container">
    <section>
      <button
        @click="isActive = !isActive"
        class="button block"
      >
        Toggle
      </button>
      <b-message
        :active.sync="isActive"
        title="Default"
        aria-close-label="Close message"
      >
        Lorem ipsum dolor
      </b-message>
    </section>
    <b-field label="Password">
      <b-input

      
        type="password"
        value="iwantmytreasure"
        password-reveal
      />
    </b-field>

    <button
      @click="success"
      class="button is-medium is-success"
    >
      Launch toast (custom)
    </button>
    <b-icon
      pack="fas"
      icon="home"
      size="is-large"
    />
    <b-icon
      pack="fas"
      icon="user"
      size="is-large"
    />
    <b-icon
      pack="fas"
      icon="lock"
      size="is-medium"
    />
    <b-icon
      pack="fas"
      icon="tachometer-alt"
      size="is-medium"
    />
    <b-icon
      pack="fas"
      icon="check"
    />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: true
    }
  },
  created() {
    this.signinUser()
  },
  methods: {
    success() {
      this.$buefy.toast.open({
        message: 'Something happened correctly!',
        type: 'is-success'
      })
    },

    async signinUser() {
      try {
        //  await this.$axios.get({ data: this.userForm })
        await this.$axios
          .$get('https://jsonplaceholder.typicode.com/posts')
          .then((res

          ) => {
            console.log(res)
          })
        //   this.$toast.open({
        //   message: 'You have successfully logged in!',
        //   type: 'is-success',
        //   position: 'is-bottom',
        //   duration: 7000
        // })
      } catch (e) {
        //   this.errorMessage = `Your email address or password don't match!`
        //  this.isError = true
      }
    }
  }
}
</script>

<style></style>
