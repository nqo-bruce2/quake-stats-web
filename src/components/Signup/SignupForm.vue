<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <div
      align="center"
      v-if="$vuetify.breakpoint.mdAndDown"
    >
      <v-img
        height="100px"
        width="100px"
        :src="require('@/assets/quake-logo3.svg')"
      >
      </v-img>
      <h1 class="display-1 font-weight-black">
        Enemy Quad
      </h1>
      <p>Where the pros play.</p>
    </div>

    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Quake Login Code"
      required
    ></v-text-field>

    <div align="center">
      <v-btn
        width="215px"
        color="black"
        class="white--text"
      >Sign-up</v-btn>
    </div>

    <br>
  </v-form>
</template>

<script>
export default {
  name: "SigninForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
    ],
    password: "",
    passwordRules: [
      v => !!v || "Name is required",
      v => v.length !== 7 || "Quake Login Code must be 7 digits"
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="scss">
@import "@/sass/variables.scss";
</style>