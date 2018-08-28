<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
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
        <td class="text-xs-center">{{ conversionAge(props.item.userBirth) }}</td>
        <td class="text-xs-center">{{ props.item.userTel }}</td>
        <td class="text-xs-center">{{ props.item.userSt }}</td>
        <td class="text-xs-center">{{ moment(props.item.instDt).format('YYYY.MM.DD') }}</td>
        <td class="text-xs-center">
          <router-link :to="{ name: 'CompanyUserView', params: { userSeq: props.item.seq, compSeq: compSeq}}">
            <v-icon color="white">search</v-icon>
          </router-link>
        </td>
      </template>
    </v-data-table>

    <v-layout row wrap>
      <v-flex xs8></v-flex>
      <v-flex xs4>
        <div class="text-sm-right">
          <v-btn slot="activator" outline dark :to="{name : 'CompanyUserWrite', params: { compSeq: compSeq }}">등록</v-btn>
        </div>
      </v-flex>
    </v-layout>
    
  </div>
</template>
<script>
export default {
  name: 'Company_User_List',
  props : ['parentData'],
  data () {
    return {
      search: '',
      pagination: {},
      loading: true,
      compSeq: '',
        headers: [
        { text: '사용자 ID', value: 'userId', align: 'center', sortable: true},
        { text: '이름', value: 'userNm', align: 'center', sortable: false},
        { text: '나이', value: 'userBirth', align: 'center', sortable: false },
        { text: '전화번호', value: 'userTel', align: 'center', sortable: false },
        { text: '상태', value: 'userSt', align: 'center', sortable: false },
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
    getUserList : function() {
      this.compSeq = this.parentData
      //const baseURI = '/user/companyUser';
      const baseURI ='http://localhost:8080/user/companyUser';
      this.$http.get(`${baseURI}`, {
        params : {
          compSeq : this.compSeq
        }
      }).then((result) => {
        this.desserts = result.data
      }).catch(error => {
        console.log(error)
      })
    },
    conversionAge : function(date) {
      var birthday = new Date(date);
      var today = new Date();
      var age = today.getFullYear() - birthday.getFullYear();

      return age
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

