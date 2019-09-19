<template>
<div >
  <v-card max-width="100%"   class="back mx-auto">
    <v-card-title class="justify-center text-white" style=" font-size:53px;"> InDigital </v-card-title>
      
    <v-row class="back" justify="center">
      <div class="text-center text-white">
        <v-card-text > Already Registered</v-card-text>
        <v-card-actions>

          <div class="my-2">
            <router-link to="/login">
            <v-btn class="login" onclick="this.blur();" rounded color="primary">Login</v-btn>
            </router-link>
          </div>
        </v-card-actions>
        <v-card-text>Not Registered</v-card-text>
        <v-card-actions>
          <router-link to="/register">
            <v-btn class="register" onclick="this.blur();" rounded color="primary">Register</v-btn>
          </router-link>
          </v-card-actions>
      </div>
    </v-row>
  </v-card>
</div>
</template>
<script>
export default {};
</script>
<style scoped>
.login {
  padding-right: 120px !important;
  padding-left: 130px !important;
}
.register{
  padding-right: 100px !important;
  margin-bottom: 340px;
  padding-left: 125px !important;
}
.back{
background-image: linear-gradient(
    to top right,
    rgb(112, 47, 137),
    rgb(186, 54, 113)
  );
}

</style>