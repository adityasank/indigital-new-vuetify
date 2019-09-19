<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    :value="value"
    @input="e=>$emit('input',e)"
  ></v-text-field>
</template>

<script>
export default {
  
      props: {
        label: String,
        placeholder: String,
        value: String
      }
  
};
</script>