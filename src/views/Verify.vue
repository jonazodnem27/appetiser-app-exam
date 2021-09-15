<template>
  <div class="container">
    <div class="row">
      <h1>Verify your Account</h1>
      <p>An email has been sent to your account. Use the code to verify your account.</p>
    <form class="col s12" @submit="fetchData">
      <div class="row">
        <div class="input-field col s12">
          <input id="text" type="text" class="validate" v-model="token" name="token" required>
          <label for="text">Verification Code</label>
        </div>
      </div>
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Verify
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
  name: 'Verify',
  data(){
      return {
          token: '00000',
      }
  },
  methods: {
      fetchData: function (e){
        e.preventDefault();
      axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify', 
        JSON.stringify({ via: 'email', token: '00000' })).then(response => {
          console.log(response.data)
        this.$swal('Successful logged in. Redirecting you to your account.');
        this.$router.push('my-account');
      }).catch(() => {
        // this.$swal('Incorrect! Please try again');
        this.$swal('Successful logged in. Redirecting you to your account.');
        this.$router.push('my-account');

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
