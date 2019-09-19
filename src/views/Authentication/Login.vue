<template>
  <div>
    <v-card max-width="80%" height="500px" class="mt-4 mx-auto">
      <v-card-title class="loginmain justify-center text-white">Login</v-card-title>
      <v-card max-width="80%" class="mx-auto">
        <div class="ml-5 mr-5">
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
            <v-btn class="mb-12 login" onclick="this.blur();" rounded color="primary">Login</v-btn>
            <v-btn text onclick="this.blur();">Forgot Password ?</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
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
  background-image: linear-gradient(
    to top right,
    rgb(112, 47, 137),
    rgb(186, 54, 113)
  );
  padding: 50px;
  margin-bottom: -30px;
}
</style>
<style>
.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  font-size: 14px !important;
}
</style>
