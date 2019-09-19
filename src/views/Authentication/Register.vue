<template>
  <v-card max-width="80%" class="mt-5 mx-auto">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"></v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div class ="text-center">How do Want to login </div>
          <div class= " my-5">
          <v-expansion-panels>
    <v-expansion-panel
     >
      <v-expansion-panel-header> Using Set Top Box Number</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-img  class = "mb-5" src="https://picsum.photos/510/300?random" width= " 100%" height= "300px" aspect-ratio="1.7"></v-img>
    
        <Input label=" Enter The Set Top Box Number Below  " v-model="stbnumber" placeholder="eg : 12345" />
       <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
  <div class= " my-5">
   <v-expansion-panels>
    <v-expansion-panel
     >
      <v-expansion-panel-header>Using Smart Card Number</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
          <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
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
      e1: 0
    };
  },
  components:{
    Input

  }
};
</script>