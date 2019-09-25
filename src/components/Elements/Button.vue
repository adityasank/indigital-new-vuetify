<template>
  <div>
    <v-btn rounded :color="color" :class="cssClass" @click="e=>this.$emit('click',e)">
      <span>{{ label }}</span>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    cssClass: String,
    label: String
  }
};
</script>