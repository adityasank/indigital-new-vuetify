<template>
  <div class="container register">
    <v-card class="mt-12 regcard mx-auto" width="80%" height="100%">
      <div
        class="mt-12 text-center"
        style="font-size:34px; font-family: 'Nunito', sans-serif;"
      >Verify Your Mobile Number</div>

      <v-card-text class="text-center">
        An OTP has been Sent to the Registered Mobile Number : {{number}}
        <router-link to="/register1">
          <v-btn text onclick="this.blur();">Change?</v-btn>
        </router-link>
      </v-card-text>

      <div class="text-center">
        <v-text-field class="otp" type="number" label="Enter 6 digit OTP" outlined></v-text-field>
        <v-card-text class="justify-center">By Clicking on Submit You Agree to the terms of Services</v-card-text>

        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn rounded color="primary" class="submit" dark v-on="on">Submit</v-btn>
            </template>
            <v-card>
              <v-card-title primary-title>Congrats Account Created</v-card-title>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <router-link to="/login">
                  <v-btn color="primary" text @click="dialog = false">OK</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 912345678,
      dialog: false
    };
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
.otp {
  margin-left: 10rem !important;
  margin-right: 10rem !important;
}
@media (max-width: 768px) {
  .otp {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
.regcard{
    margin-bottom: 5rem;
}
.submit{
      padding-right: 5rem !important;
  padding-left: 5rem !important;

}
</style>
