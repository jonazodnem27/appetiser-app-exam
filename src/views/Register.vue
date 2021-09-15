<template>
<!--   <div class="hello">
    <h1>{{ msg }}</h1>
  </div> -->
  <div class="container">
    <div class="row">
      <h1>Register</h1>
    <form class="col s12" @submit="fetchData">
      <div class="row">
        <div class="input-field col s12">
          <input id="complete_name" type="text" class="validate" v-model="full_name" name="full_name" required>
          <label for="complete_name">Complete Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" v-model="email" name="email" required>
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
        <div class="input-field col s12">
          <input id="verifypassword" type="password" class="validate" v-model="password_confirmation" name="password_confirmation" required>
          <label for="verifypassword">Verify Password</label>
        </div>
      </div>
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit">Register
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
  name: 'Register',
  data(){
      return {
          full_name: '',
          password: '',
          password_confirmation: '',
          email: ''
      }
  },
  methods: {
      fetchData: function (e){
        e.preventDefault();
      axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/register', {
        full_name : this.full_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }).then(response => {
          if(response.data.success){
            this.$swal('Account successfully created! We sent you an email. Please verify your account to proceed.');
            this.$router.push('verify');
          }else{
            this.$swal('There\'s a problem with your registration');
          }
      }).catch(() => {
        this.$swal('There\'s a problem with your registration');
      });
      }
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
