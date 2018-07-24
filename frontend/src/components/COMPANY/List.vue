<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs6>
            <h1 class="text-sm-left"><v-icon large>list</v-icon> COMPANY LIST</h1>
          </v-flex>
          <v-flex xs6>
            <div class="text-sm-right">
              <v-tooltip bottom>
                <v-btn slot="activator" outline dark icon to="/COMPANY/write"><v-icon>edit</v-icon></v-btn> 
                <span>등록</span>
              </v-tooltip>
            </div>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-layout row wrap>
          <v-flex xs8></v-flex>
          <v-flex xs4>
            <v-text-field
              clearable
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            >
            </v-text-field><!-- v-model="search" : v-text-field 프로퍼티 입력 즉시 값을 검색-->
          </v-flex>
        </v-layout>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          :pagination.sync="pagination"
          :loading="loading"
          hide-actions
          class="elevation-1"
        >
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
                <span slot="activator">
                {{ props.header.text }}
                </span>
                <span>
                {{ props.header.text }}
                </span>
            </v-tooltip>
          </template>
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.compNm }}</td>
            <td class="text-xs-center">{{ props.item.compOwner }}</td>
            <td class="text-xs-center">{{ props.item.compTel }}</td>
            <td class="text-xs-center">{{ moment(props.item.instDt).format('YYYY.MM.DD') }}</td>
            <td class="text-xs-center">
              <router-link :to="{ name: 'TeacherInfo', params: { userId: props.item.compSeq }}">
                <v-icon color="white">search</v-icon>
              </router-link>
            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages" :circle=true></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Teacher_List',
  data () {
    return {
      search: '',
      pagination: {},
      loading: true,
      headers: [
        { text: '법인명', value: 'compNm', align: 'center', sortable: false},
        { text: '대표', value: 'compOwner', align: 'center', sortable: false},
        { text: '전화번호', value: 'compTel', align: 'center', sortable: false },
        { text: '등록일', value: 'instDt', align: 'center', sortable: false },
        { text: '조회', value: '조회', align: 'center', sortable: false }
      ],
      desserts: []
    }
  },
  created : function() {
    this.getUserList();
  },
  methods: {
    getUserList : function(page) {
      setTimeout(() => {
        this.loading = false

        //const baseURI = '/comp/getListCompany';
        const baseURI ='http://localhost:8080/comp/getListCompany';
        this.$http.get(`${baseURI}`).then((result) => {
          this.desserts = result.data
          this.pagination.totalItems = result.data.length
          this.pagination.rowsPerPage = 5
        }).catch(error => {
          console.log(error)
          this.loading = true
        })
      }, 700)

      this.loading = true
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl {
    float : left;
}
.fr {
    float : right;
}
a {
  text-decoration: none;
}
</style>

