<template>
  <v-text-field
    :label="label"
    class="mt-2"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="e=>$emit('input',e)"
    :rules="rules"
    required
  ></v-text-field>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    value: String,
    type: String,
    rules: Array
  }
};
</script>