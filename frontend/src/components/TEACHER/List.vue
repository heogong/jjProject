<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="text-sm-left"><v-icon large>list</v-icon> aaaaaaaaa</h1>
        <v-divider></v-divider>
        
        <v-btn slot="activator" color="grey darken-2" dark round class="mb-2" 
          to="/TEACHER/write">등록</v-btn>

        <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            :pagination.sync="pagination"
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
            <td>{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.calories }}</td>
            <td class="text-xs-center">{{ props.item.fat }}</td>
            <td class="text-xs-center">{{ props.item.carbs }}</td>
            <td class="text-xs-center">{{ props.item.protein }}</td>
            <td class="text-xs-center">{{ props.item.iron }}</td>
            <td class="text-xs-center">
              <router-link :to="{ name: 'TeacherInfo', params: { userId: 123 }}">
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
      dialog : false,        
      search: '',
      pagination: {},
      selected: [],
      headers: [
        { text: 'Dessert (100g serving)', value: 'name', align: 'center', sortable: true},
        { text: 'Calories', value: 'calories', align: 'center', sortable: false},
        { text: 'Fat (g)', value: 'fat', align: 'center', sortable: false },
        { text: 'Carbs (g)', value: 'carbs', align: 'center', sortable: false },
        { text: 'Protein (g)', value: 'protein', align: 'center', sortable: false },
        { text: 'Iron (%)', value: 'iron', align: 'center', sortable: false },
        { text: 'view', value: 'view', align: 'center', sortable: false }
      ],
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

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
