<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs6>
            <h1 class="text-sm-left"><v-icon large>list</v-icon> LIST</h1>
          </v-flex>
          <v-flex xs6>
            <div class="text-sm-right">
              <!-- <v-btn  slot="activator" color="grey darken-2" dark round class="mb-2" to="/TEACHER/write">등록</v-btn> -->
              <v-tooltip bottom>
                <v-btn slot="activator" dark icon to="/TEACHER/write"><v-icon>edit</v-icon></v-btn> 
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
              append-icon="search"
              label="Search"
              single-line
              hide-details
              @keyup.enter="getUserList()"
              v-model="searchValue"
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
            <td>{{ props.item.userId }}</td>
            <td class="text-xs-center">{{ props.item.userNm }}</td>
            <td class="text-xs-center">{{ props.item.userAge }}</td>
            <td class="text-xs-center">{{ props.item.userTel }}</td>
            <td class="text-xs-center">{{ props.item.userSt }}</td>
            <td class="text-xs-center">{{ props.item.instDt }}</td>
            <td class="text-xs-center">
              <router-link :to="{ name: 'TeacherInfo', params: { userId: props.item.seq }}">
                <v-icon color="white">search</v-icon>
              </router-link>
            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pageNum" :length="pages" :circle=true @input="getUserList"></v-pagination>
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
      searchValue: '',
      search: '',
      pagination: {},
      loading: true,
      pageNum : 1, // 페이징을 클릭 해도 현재페이지 '1' 만 유지한다 -- 실시간으로 데이터를 가져올때만 사용
      headers: [
        { text: '사용자 ID', value: 'userId', align: 'center', sortable: true},
        { text: '이름', value: 'userNm', align: 'center', sortable: false},
        { text: '나이', value: 'userAge', align: 'center', sortable: false },
        { text: '전화번호', value: 'userTel', align: 'center', sortable: false },
        { text: '상태', value: 'userSt', align: 'center', sortable: false },
        { text: '등록일', value: 'instDt', align: 'center', sortable: false },
        { text: '조회', value: '조회', align: 'center', sortable: false }
      ],
      desserts: [
        // {
        //   value: false,
        //   userId: 'Frozen Yogurt',
        //   userNm: 159,
        //   userAge: 6.0,
        //   userTel: 24,
        //   userSt: 4.0,
        //   insertDt: '1%'
        // } 샘플 데이터
      ]
    }
  },
  created : function() {
    this.getUserList();
  },
  methods: {
    getUserList : function(page) {
      setTimeout(() => {
        this.loading = false

        //const baseURI = '/user/getAxiosListUser';
        const baseURI ='http://localhost:8080/user/getListUser';
        this.$http.get(`${baseURI}`,{
          params : {
            page : page - 1,
            search : this.searchValue
          }
        }).then((result) => {
          this.desserts = result.data.content
          this.pagination.totalItems = result.data.totalElements
          this.pagination.rowsPerPage = result.data.pageable.pageSize
        }).catch(error => {
          console.log(error)
        })
      }, 700)

      this.loading = true
    },
    testAlert : function() {
      alert("ddddddddddd")
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

