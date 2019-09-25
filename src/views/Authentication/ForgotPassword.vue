<template>
  <div class="container register">
    <v-card class="mt-12 regcard mx-auto" width="80%" height="100%">
      <div
        class="mt-12 text-center"
        style="font-size:34px; font-family: 'Nunito', sans-serif;"
      >Forgot Password</div>

      <v-card-text class="text-center">Enter Your Registered Mobile Number Below</v-card-text>

      <div class="text-center">
        <CustomInput
          cssclass="mb-3 mobilenumber"
          label=" Enter Reg Mobile Number "
          v-model="mnumber"
          type="number"
        />
        <v-card-text
          class="text-center"
        >The Password will be Send Your Registered Mobile Number Below</v-card-text>

        <v-btn rounded color="primary" class="submit">Send</v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
import CustomInput from "@/components/Elements/CustomInput.vue";
export default {
  data() {
    return {
      mnumber: "",
      dialog: false
    };
  },
  components: {
    CustomInput
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
.regcard {
  margin-bottom: 8rem;
}
.submit {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}
</style>
<style>
.mobilenumber {
  margin-left: 10rem !important;
  margin-right: 10rem !important;
}
@media (max-width: 768px) {
  .mobilenumber {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
</style>