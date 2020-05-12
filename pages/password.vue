<template>
  <div class="container">
    <div class="columns">
      <div class="column" />
      <div class="column">
        <h2 class="ant-typography">
          <span style="font-weight: bold;">Pass</span>Wall
        </h2>
      </div>
      <div class="column">
        <button @click="ismodalAlertCreate = true" class="button is-info is-pulled-right">
          <b-icon
            icon="plus"
            size="is-small"
          />
          <span> New Pass</span>
        </button>
      </div>
      <div>
        <b-dropdown class="is-bottom-left" aria-role="list">
          <button slot="trigger" class="button">
            <b-icon
              icon="ellipsis-h"
              size="is-small"
            />
          </button>
          <b-dropdown-item aria-role="listitem">
            Action
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            Another action
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            Something else
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="column" />
      <!-- Create Alert Modal Form  -->
      <b-modal :active.sync="ismodalAlertCreate" :width="640">
        <form @submit.prevent="alertCreate" method="post">
          <div class="box">
            <div class="ant-modal-header">
              <div class="ant-modal-title">
                New Pass
              </div>
            </div>
            <div class="field">
              <b-field label="URL" label-for="uf_baseurl">
                <b-input
                  id="uf_baseurl"
                  v-model="userForm.baseurl"
                  type="text"
                  size="is-medium"
                  placeholder="https://example.com"
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
                  placeholder="Username or Email"
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
                <button @click="ismodalAlertCreate = false" class="button is-rounded" type="button">
                  Cancel
                </button>
                <button type="submit" name="button" class="button is-info is-rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </b-modal>
      <!-- Edit Alert Modal Form  -->
      <b-modal :active.sync="ismodalAlertEdit" :width="640">
        <form @submit.prevent="alertEdit" method="post">
          <div class="box">
            <div class="ant-modal-header">
              <div class="ant-modal-title">
                Edit
              </div>
            </div>
            <input v-model="alertEditForm.id" type="hidden">
            <div class="field">
              <b-field label="URL" label-for="uf_baseurl">
                <b-input
                  id="uf_baseurl"
                  v-model="alertEditForm.url"
                  type="text"
                  size="is-medium"
                  placeholder="https://example.com"
                  required
                  autofocus
                />
              </b-field>
              <b-field label="Username" label-for="uf_username">
                <b-input
                  id="uf_username"
                  v-model="alertEditForm.username"
                  type="text"
                  size="is-medium"
                  placeholder="Username or Email"
                  required
                  autofocus
                />
              </b-field>
              <b-field label="Password" label-for="uf_password">
                <b-input
                  id="uf_password"
                  v-model="alertEditForm.password"
                  type="password"
                  size="is-medium"
                  placeholder="Password"
                  required
                  password-reveal
                />
              </b-field>
              <div class="control">
                <button type="submit" name="button" class="button is-info is-rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </b-modal>
    </div>
    <div class="columns">
      <div class="column is-3" />
      <div class="column is-7">
        <input
          v-model="findUsername"
          class="input"
          placeholder="Search"
          type="text"
        >
      </div>
      <div class="column" />
    </div>
    <div class="columns">
      <div class="column is-3" />
      <div class="column is-6">
        <b-table
          v-if="dataList && dataList.length > 0"
          :data="dataList"
          :columns="columns"
          :checked-rows.sync="checkedRows"
          checkable
        />
        <button :disabled="!checkedRows || checkedRows.length !== 1" @click="valuesAlertEdit()" class="button field is-dark is-outlined">
          <span class="lt-icon icon-down p-r-sm" />
          <span>Edit</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: 14,
          created_at: '2020-04-30T10:29:04.010137+03:00',
          updated_at: '2020-04-30T10:29:04.010137+03:00',
          deleted_at: null,
          url: 'https://paypal.com/tr/ame',
          username: 'Jammie',
          password: 'YEF7eNCmdXu'
        },
        {
          id: 13,
          created_at: '2020-04-30T10:29:04.010137+03:00',
          updated_at: '2020-04-30T10:29:04.010137+03:00',
          deleted_at: null,
          url: 'https://paypal.com/tr/home',
          username: 'Ahmet',
          password: 'YEF7eNCmdXu'
        }
      ],
      columns: [{
        field: 'url',
        label: 'Url'
      },
      {
        field: 'username',
        label: 'Username'
      },
      {
        field: 'password',
        label: 'Password'
      }],
      userForm: {
        baseurl: process.env.baseURL || '',
        username: '',
        password: ''
      },
      alertEditForm: {
        id: null,
        url: null,
        username: null,
        password: null

      },
      checkedRows: [],
      findUsername: '',
      ismodalAlertEdit: false,
      ismodalAlertCreate: false

    }
  },
  computed: {
    filteredUsername() {
      const filter = new RegExp(this.findUsername, 'i')
      return this.dataList.filter(el => el.username.toString().match(filter))
    }
  },
  mounted() {
    // this.passwordGet()
  },

  methods: {
    valuesAlertEdit() {
      this.alertEditForm.id = this.checkedRows[0].id
      this.alertEditForm.url = this.checkedRows[0].url
      this.alertEditForm.username = this.checkedRows[0].username
      this.alertEditForm.password = this.checkedRows[0].password
      this.ismodalAlertEdit = true
    }
    // async passwordGet() {
    //   try {
    //   //  await this.$axios.setToken(this.$auth.$storage.getCookie('_token.local'))
    //   //  localStorage.getItem('TOKEN', res.data.access_token)
    //     this.dataList = await this.$axios.post('https://passwall-server.hakanpeksen.com/api/logins')
    //     // if (!this.dataList || this.dataList.length < 3) {
    //     //   this.isLimit = true
    //     // } else {
    //     //   this.isLimit = false
    //     // }
    //   } catch (e) {
    //     this.$toast.open({
    //       message: e.message,
    //       type: 'is-danger',
    //       position: 'is-bottom-right',
    //       duration: 4000
    //     })
    //   }
    // }

  }

}
</script>
