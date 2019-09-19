<template>
  <v-card max-width="80%" class="mt-5  mx-auto">
    <v-card-title>Login</v-card-title>
    <div class="ml-3 mr-3">
    <v-text-field
      
      label="Enter your Registered Mobile Number"
      placeholder="eg:+919400370592"
    ></v-text-field>
     <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            name="input-10-1"
            label="Password"
            placeholder="eg:hunter123"
            hint="At least 8 characters"
            ></v-text-field>
          </div>
    <v-card-actions>
      <div class="my-2">
        <v-btn class = "login" onclick="this.blur();" rounded color="primary">Login</v-btn>
      </div>
      <v-btn text onclick="this.blur();">Forgot Password ?</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        password: "",
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
    },
  }
</script>
<style scoped>
.login{
   padding-right: 50px !important;
  padding-left: 50px !important; 
}

</style>