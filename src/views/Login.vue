<template>
  <div class="login_body">
    <!-- <div class="bg_image"></div> -->
    <v-layout justify-center align-center >
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form" width="400px" class="login_form">
          <v-card-text class="login_form_card_text">
            <!-- :error-messages="errorMessages" -->
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="UserName"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :error-messages="emailErrors"
                label="Password"
                required
                :type="show ? 'text' : 'password'"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                @click:append="show = !show"
              ></v-text-field>

              <v-checkbox v-model="checkbox" label="Remember Password"></v-checkbox>

              <v-btn @click="submit">Login</v-btn>
              <v-btn @click="clear">Clear</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    password: { required }
  },

  data: () => ({
    name: "",
    email: "",
    password: "",
    select: null,
    checkbox: false,
    show: false
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 30 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
    }
  }
};
</script>

<style>

.login_body {
  background-image: url("/blur.jpg");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
}

.login_form {
  margin-top: 10%;
  position: absolute;
  align-content: center;
  text-align: center;
}
.login_form_card_text {
  margin-top: 10%;
  position: absolute;
  background-color: rgb(219, 219, 219);
  box-shadow: 5px 5px rgb(41, 39, 39);

  opacity: 0.5;
  
}
</style>
