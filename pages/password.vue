<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3" />
        <div class="column is-6">
          <h2 class="ant-typography">
            <span style="font-weight: bold;">Pass</span>Wall
          </h2>
        </div>
        <div class="column is-3">
          <button @click="ismodalAlertCreate = true" class="button is-info">
            <b-icon
              icon="plus"
              size="is-small"
            />
            <span> New Pass</span>
          </button>
        </div>
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
      </div>
      <div class="columns">
        <div class="column is-3" />
        <div class="column is-6">
          <div class="control">
            <input class="input" type="text" placeholder="Search">
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3" />
        <div class="column is-6">
          <b-table
            v-if="dataList && dataList.length > 0"
            :data="dataList"
            :columns="columns"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="url"
          >
            <template slot-scope="props">
              <b-table-column field="url" label="Url" sortable>
                {{ props.row.url }}
              </b-table-column>
              <b-table-column field="username" label="Username" sortable>
                {{ props.row.username }}
              </b-table-column>
              <b-table-column field="password" label="Password" sortable>
                {{ props.row.password }}
              </b-table-column>
              <b-table-column field="" label="" sortable />
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </section>
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
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      ismodalAlertCreate: false,
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
      ]

    }
  },
  mounted() {
    // this.passwordGet()
  },

  methods: {
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
