<template >
  <div class="container register">
    <v-card class="mt-12 regcard mx-auto" width="80%" height="100%">
      <div
        class="mt-5 wish text-center"
        style="font-size:34px; font-family: 'Nunito', sans-serif;"
      >How do You Wish To Register?</div>
      <div class="mt-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Using Set Top Box Number</v-expansion-panel-header>
            <v-expansion-panel-content>
              <Input
                label=" Enter The Set Top Box Number Below  "
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="mt-5 section2">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Using Smart Card Number</v-expansion-panel-header>
            <v-expansion-panel-content>
              <Input
                label=" Enter Smart Card Number Below  "
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
.regcard{
    margin-bottom: 10rem;
}
</style>
<style>
.regcard {
  padding: 4rem;
}

.mdi-chevron-down::before {
  display: none;
}
</style>
