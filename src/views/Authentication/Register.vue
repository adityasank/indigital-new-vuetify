<template>
  <v-card max-width="80%" class="mt-5 mx-auto">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step class="ml-12" :complete="e1 > 1" step="1"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step class="mr-12" step="3"></v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="wish mt-5 text-center text-white">How do You Wish To Register</div>
          <div class="my-5">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Using Set Top Box Number</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-img
                    class="mb-5"
                    src="https://picsum.photos/510/300?random"
                    width=" 100%"
                    height="300px"
                    aspect-ratio="1.7"
                  ></v-img>

                  <Input
                    label=" Enter The Set Top Box Number Below  "
                    v-model="stbnumber"
                    placeholder="eg : 12345"
                  />
                  <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="my-5">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Using Smart Card Number</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-img
                    class="mb-5"
                    src="https://picsum.photos/510/300?random"
                    width=" 100%"
                    height="300px"
                    aspect-ratio="1.7"
                  ></v-img>

                  <Input
                    label=" Enter Smart Card Number Below  "
                    v-model="stbnumber"
                    placeholder="eg : 12345"
                  />
                  <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <div class="mt-5 text-center text-white">Provide Account Details</div>
          <v-card ref="form" class="mt-5 mb-12" height="370px">
            <v-card-text>
              <Input
                label=" Enter your Mobile Number "
                v-model="mobNumber"
                placeholder="eg : 9999999999"
                type="number"
                :rules="[() => !!mobNumber || 'This field is required']"
              />

              <Input
                label=" Enter your Email Id "
                v-model="emailAddress"
                placeholder="eg : 12345"
                type="text"
                :rules="[() => !!emailAddress || 'This field is required']"
              />
              <Input
                label=" Enter password "
                v-model="password"
                placeholder="Should Be Upto 8 characters"
                type="password"
                :rules="[() => !!password || 'This field is required']"
              />

              <Input
                label=" Enter password "
                v-model="password"
                placeholder="Should Be Upto 8 characters"
                type="password"
                :rules="[() => !!password || 'This field is required']"
              />


              <v-btn color="primary" @click="e1 = 3">Next</v-btn>
            </v-card-text>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <div class="mb-2 mt-5 text-center text-white">Verify Your Mobile Number</div>
          <v-card ref="form" class="mt-5 mb-12" height="370px">
            <v-card-text class="text-center">
              An OTP has been Sent to the Registered Mobile Number : {{number}}
              <v-btn text onclick="this.blur();" @click="e1 = 2">Change?</v-btn>
            </v-card-text>

            <div class="text-center">
              <v-text-field class="otp" type ="number" label="Enter 6 digit OTP" outlined></v-text-field>
              <v-card-text
                class="justify-center"
              >By Clicking on Submit You Agree to the terms of Services</v-card-text>

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
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>
<script>
import Input from "@/components/Elements/Input.vue";
export default {
  data() {
    return {
      stbnumber: "",
      mobNumber: "",
      emailAddress: "",
      password: "",
      cPassword: "",
      e1: 0,
      number: 912345678,
      dialog: false
    };
  },
  components: {
    Input
  }
};
</script>
<style scoped>
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
</style>
<style scoped>
.v-stepper__header {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  background-image: linear-gradient(
    to top right,
    rgb(112, 47, 137),
    rgb(186, 54, 113)
  );
  height: 190px;
  margin-bottom: -110px;
}
.submit {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}

</style>