<template>
  <div>
    <v-text-field
      :class="cssclass"
      :type="type"
      :label="label"
      :value="value"
      @input="e=>$emit('input',e)"
      outlined
    ></v-text-field>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
    label: String,
    cssclass: String,
    value: String,

  }
};
</script>