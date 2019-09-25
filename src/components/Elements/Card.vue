<template>
  <v-card class="mx-auto" max-width="90%">
    <v-row>
      <v-col>
        <v-card-title style=" color: #727cf5;">Hi Thomas</v-card-title>
      </v-col>
      <v-col>
        <v-card-title class="float-right text-muted">My Account</v-card-title>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <p>Monthly Cost</p>
        <h5>{{monthlyCost}}</h5>
      </v-col>

      <v-col>
        <p>Current Balance</p>
        <h5>{{Balance}}</h5>
      </v-col>

      <v-col>
        <p>Base Pack Expires On</p>
        <h5>{{date}}</h5>
      </v-col>
    </v-row>
    <v-card-text class="text-center">Keep your Account Top UP to enjoy Uninturrupted Service</v-card-text>
    <v-card-actions>
      <div class="mx-auto">
        <Button cssClass="topup" color="primary" label="Top Up" />
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
import Button from "@/components/Elements/Button.vue";

export default {
  components: {
    Button
  },
  data() {
    return {
      date: " 23/8/2019",
      monthlyCost: 100,
      Balance: 30
    };
  }
};
</script>
<style >
.topup {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}
</style>