<template>
  <div class="container register">
    <v-card max-width="70%" class="logincard mx-auto">
      <v-card-title class="loginmain justify-center text-white" style="font-size:30px; font-family: 'Nunito', sans-serif;">InDigital</v-card-title>

      <div class="ml-5 mr-5 mt-8">
        <v-card-text>
          <Input
            label=" Enter your Registered Mobile Number "
            v-model="mobNumber"
            placeholder="eg : 9999999999"
            type="number"
            :rules="[() => !!mobNumber || 'This field is required']"
          />

          <Input
            label=" Enter password "
            v-model="password"
            placeholder="Should Be Upto 8 characters"
            type="password"
            :rules="[() => !!password || 'This field is required']"
          />
        </v-card-text>
      </div>
      <v-card-actions>
        <v-row justify="center">
          <v-btn class="mb-1 mr-2 login" rounded color="primary">Login</v-btn>
          <router-link to="/register2">
            <v-btn class="login" rounded color="primary">Register</v-btn>
          </router-link>
        </v-row>
        <div></div>
      </v-card-actions>
      <v-card-actions>
        <v-row justify="center">
          <v-btn text class="login" onclick="this.blur();" rounded color="primary">Forgot password</v-btn>
        </v-row>
        <div></div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Input from "@/components/Elements/Input.vue";
export default {
  data() {
    return {
      password: "",
      mobNumber: ""
    };
  },
  components: {
    Input
  }
};
</script>
<style scoped>
.login {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}
.loginmain {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(9, 9, 121, 1) 50%,
    rgba(0, 212, 255, 1) 90%
  );
  padding: 2rem;
}
.register {
  background-image: url("/img/authentication.jpg");
  background-size: cover;
  background-position: center;
  max-width: 100%;
}
.logincard {
  margin-bottom: 6rem;
  margin-top: 5rem !important;
}
</style>
<style>
.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  font-size: 14px !important;
}

.v-btn:focus {
  outline: none !important;
}
</style>
