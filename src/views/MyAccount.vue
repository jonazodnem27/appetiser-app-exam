<template>
  <div class="container">
    <div class="row">
      <h1>Login successful. Welcome!</h1>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
   data(){
      return {
          username: '',
      }
  },
  // props: {
  //   msg: String
  // }
  created(){
    this.username = this.$route.params.data
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
