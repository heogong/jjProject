<template>
  <div id="app">
    <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h1>{{ post.userId }}</h1>
        <p>{{ post.userTel }}</p>
      </div>
    </div>
    <button v-else v-on:click="searchTerm">글 불러오기</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    searchTerm: function () {
      // using JSONPlaceholder
      const baseURI = '/user/getAxiosListUser';
      this.$http.get(`${baseURI}`).then((result) => {
        console.log(result)
        this.posts = result.data.content
      })
    }
  }
}
</script>

<style>

</style>