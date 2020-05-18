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
          :data="filteredUsername"
          :columns="columns"
        >
          <template slot-scope="props">
            <b-table-column field="url" label="Url">
              {{ props.row.url }}
            </b-table-column>
            <b-table-column field="username" label="Username">
              {{ props.row.username }}
            </b-table-column>
            <b-table-column field="password" label="Password">
              {{ props.row.password }}
            </b-table-column>

            <b-table-column>
              <button @click="valuesAlertEdit(props.row,$event)" class="button is-small is-light">
                <b-icon icon="edit" size="is-small" />
              </button>
              <button @click="confirmAlertDelete(props.row,$event)" class="button is-small is-light">
                <b-icon icon="trash" size="is-small" />
              </button>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
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
      findUsername: '',
      ismodalAlertEdit: false,
      ismodalAlertCreate: false,
      isPlural: ''

    }
  },
  middleware: [
    'auth'
  ],

  computed: {
    filteredUsername() {
      const filter = new RegExp(this.findUsername, 'i')
      return this.dataList.filter(el => el.username.toString().match(filter))
    }
  },
  // asyncData({ store, redirect }) {
  //   if (store.state.auth.loggedIn === true) {
  //     return redirect('/password')
  //   }
  // },
  mounted() {
    this.passwordGet()
  },

  methods: {
    valuesAlertEdit(event) {
      this.alertEditForm.id = event.id
      this.alertEditForm.url = event.url
      this.alertEditForm.username = event.username
      this.alertEditForm.password = event.password
      this.ismodalAlertEdit = true
    },
    async alertEdit() {
      try {
        await this.$axios.setToken(this.$auth.$storage.getCookie('_token.local'), '')
        await this.$axios.put(`/api/logins/${this.alertEditForm.id}`, this.alertEditForm)
        this.alertEditForm.id = ''
        this.alertEditForm.url = ''
        this.alertEditForm.username = ''
        this.alertEditForm.password = ''
        this.ismodalAlertEdit = false
        this.$buefy.toast.open({
          message: 'You have successfully edited alert!',
          type: 'is-success',
          position: 'is-bottom-right',
          duration: 4000
        })
        this.passwordGet()
      } catch (e) {
        this.$buefy.toast.open({
          message: e.message,
          type: 'is-danger',
          position: 'is-bottom-right',
          duration: 4000
        })
      }
    },
    confirmAlertDelete(event) {
      this.$buefy.dialog.confirm({
        title: `Deleting alert${this.isPlural}`,
        message: `Are you sure you want to <b>delete</b> your alert${this.isPlural}? This action cannot be undone.`,
        confirmText: `Delete Alert${this.isPlural}`,
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.alertDelete(event)
      })
    },
    async alertDelete(event) {
      try {
        await this.$axios.setToken(this.$auth.$storage.getCookie('_token.local'), '')
        await this.$axios.delete(`/api/logins/${event.id}`)
        this.$buefy.toast.open({
          message: 'You have successfully deleted!',
          type: 'is-success',
          position: 'is-bottom-right',
          duration: 4000
        })
        this.passwordGet()
      } catch (e) {
        this.$buefy.toast.open({
          message: e.message,
          type: 'is-danger',
          position: 'is-bottom-right',
          duration: 4000
        })
      }
    },
    async passwordGet() {
      try {
        await this.$axios.setToken(this.$auth.$storage.getCookie('_token.local'), '')
        await this.$axios.get('/api/logins').then(res => (this.dataList = res.data))
      } catch (e) {
        this.$buefy.toast.open({
          message: e.message,
          type: 'is-danger',
          position: 'is-bottom-right',
          duration: 4000
        })
      }
    }

  }

}
</script>
