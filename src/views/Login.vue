<template>
  <div class="container">
    <div class="row">
      <h1>Login</h1>
    <form class="col s12" @submit="fetchData">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" name="username" v-model="username" required>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">

          <input id="password" type="password" class="validate" v-model="password" name="password" required>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Login
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Login',
  data(){
      return {
          password: '',
          username: ''
      }
  },
  methods: {
      fetchData: function (e){
        e.preventDefault();
      axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/login', {
        username: this.username,
        password: this.password,
      }).then(response => {
          console.log(response.data)
        this.$swal('Successful logged in. Redirecting you to your account.');
        this.$router.push('my-account');
      }).catch(() => {
        this.$swal('Incorrect! Please try again');
      });
      }
  },
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
