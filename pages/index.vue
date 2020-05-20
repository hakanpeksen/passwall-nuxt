<template>
  <div>
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
  },
  methods: {

  }
}
</script>
