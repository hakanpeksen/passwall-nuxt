<template>
 <div class="container">
          <section>
        <button class="button block" @click="isActive = !isActive">Toggle</button>
        <b-message title="Default" :active.sync="isActive" aria-close-label="Close message">
            Lorem ipsum dolor 
        </b-message>
    </section>

     <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>


          <button class="button is-medium is-success" @click="success">
                Launch toast (custom)
            </button>
<b-icon pack="fas" icon="home" size="is-large" />
<b-icon pack="fas" icon="user" size="is-large" />
<b-icon pack="fas" icon="lock" size="is-medium" />
  </div>
</template> 
 
<script>
import Logo from '~/components/Logo.vue'

export default {
    data() {
            return {
                isActive: true
            }
        },
          methods: {         
            success() {
                this.$buefy.toast.open({
                    message: 'Something happened correctly!',
                    type: 'is-success'
                })
            }
          },
  components: {
    Logo
  }
}
</script>

<style>

</style>
