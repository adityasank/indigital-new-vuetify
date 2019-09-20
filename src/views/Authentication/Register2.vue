<template >
  <div class="container register">
    <v-card class="regcard mx-auto" width="80%">
      <div
        class="mt-1 wish text-center"
        style="font-size:34px; font-family: 'Nunito', sans-serif;"
      >Create an Account</div>
      <div class="mt-4">
        <Input
          label=" Enter The Set Top Box Number/Smart Card Number Below  "
          v-model="stbnumber"
          placeholder="eg : 12345"
        />
        <RegForm />
        <router-link to="/otp">
          <v-btn rounded color="primary">Next</v-btn>
        </router-link>

        <router-link to="/login">
          <v-btn text color="primary">Cancel</v-btn>
        </router-link>
      </div>
    </v-card>
  </div>
</template>
<script>
import Input from "@/components/Elements/Input.vue";
import RegForm from "@/views/Authentication/RegForm.vue";
export default {
  data() {
    return {
      stbnumber: ""
    };
  },

  components: {
    Input,
    RegForm
  }
};
</script>
<style scoped>
.register {
  background-image: url("/img/authentication.jpg");
  background-size: cover;
  background-position: center;
  max-width: 100%;
}
</style>
