<template>
  <section class="section">
    <div class="container">
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
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',

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

<style>
</style>
