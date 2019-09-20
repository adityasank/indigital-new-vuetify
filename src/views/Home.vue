<template>
  <div>
    <v-card max-width="100%" class="back mx-auto">
      <div class="text-center text-white">
        <p style="font-size:40px;">InDigital</p>

        <p class="mt-12">Already Registered</p>
        <v-card-actions class="justify-center">
          <router-link to="/login">
            <v-btn x-large class="login" onclick="this.blur();" rounded color="white">Login</v-btn>
          </router-link>
        </v-card-actions>
        <p class="mt-6">Not Registered</p>

        <v-card-actions class="justify-center">
          <router-link to="/register">
            <v-btn
              x-large
              class="register"
              onclick="this.blur();"
              rounded
              outlined
              color="white"
            >Register</v-btn>
          </router-link>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.login {
  width: 25rem !important;
  color: blue !important;
}
.login:hover {
  text-decoration:none !important;
}
.register {
  width: 25rem !important;
}

.back {
  background-image: linear-gradient(
    to top right,
    rgb(17, 156, 220),
    rgb(186, 54, 113) 65%
  );
  padding: 13%;
}
</style>