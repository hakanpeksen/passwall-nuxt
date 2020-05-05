<template>
  <div class="container">
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm
  },
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
          .then((res) => {
            // console.log(res)
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
