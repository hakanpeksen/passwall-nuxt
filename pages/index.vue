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

<style>
body {
  padding: 30px;
}
  .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 60px);
        }
         .login-card {
          display: -webkit-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row-reverse;
          max-width: 1000px;
          background-color: white;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
          overflow: hidden;
          margin: 0 auto;
          border-radius: 12px;
        }
        .form-box {
          -webkit-box-flex: 1;
          flex: 1 0 100%;
          max-width: 480px;
          width: 100%;
          padding: 60px;
        }
        .image-box {
          display: flex;
          align-items: flex-end;
          max-width: 800px;
          min-height: 100%;
          padding: 30px 30px 30px 0;
        }
        .image-box img {
          display: block;
          width: 100%;
        }
     .ant-typography h2,  h2.ant-typography {
    margin-bottom: .5em;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 30px;
    line-height: 1.35;

     }
     img {
    vertical-align: middle;
    border-style: none;
  }
.field>label:before {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun,sans-serif;
    line-height: 1;
    content: "*";
}
.field label {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 32px;
    color:rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: 400;
}

.ant-typography p, div.ant-typography {
    margin-bottom: 1em;
}

.ant-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: green;
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
}
 div.control  input::placeholder{
  color:rgba(0,0,0,.65);
  font-size:14px;
}
/* .ant-form-item-has-error .ant-form-item-explain {
  font-size: 10px;
  margin-top: 2px;
}

.ant-btn-circle > .ant-btn-loading-icon .anticon {
  padding-right: 0px;
} */

</style>
