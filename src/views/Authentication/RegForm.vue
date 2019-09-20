<template>
    <div>
        
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


    </div>
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