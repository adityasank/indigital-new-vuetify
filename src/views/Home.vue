<template>
  <v-card max-width="80%" class="mt-5 mx-auto">
    <v-row justify="center">
      <div class="text-center">
        <v-card-text> Already Registered</v-card-text>
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
</template>
<script>
export default {};
</script>
<style scoped>
.login {
  padding-right: 90px !important;
  padding-left: 90px !important;
}
.register{
  padding-right: 70px !important;
  
  padding-left: 80px !important;
}

</style>