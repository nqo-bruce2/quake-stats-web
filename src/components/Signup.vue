<template>
  <div class="pa-sm-10 ma-sm-10">
    <v-container>
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col
          :xl="8"
          cols="12"
        >
          <v-card outlined>
            <v-row
              align="center"
              justify="center"
              no-gutters
            >
              <v-col
                :xl="6"
                :lg="6"
                cols="12"
              >
                <v-card-text >
                  <h1 v-if="$vuetify.breakpoint.lgAndUp" class="display-1 font-weight-black">
                    Welcome to Enemy Quad Stats
                  </h1>
                  <p v-if="$vuetify.breakpoint.lgAndUp">Where the pros play.</p>
                  <template>
                    <SignupForm />
                  </template>
                </v-card-text>
              </v-col>
              <v-col
                :xl="6"
                :lg="6"
                v-if="$vuetify.breakpoint.lgAndUp"
              >
                <v-avatar
                  size="500"
                  width="100%"
                  tile
                >
                <!-- src="https://i.redd.it/27h3fc2y3vd01.jpg" -->
                  <v-img
                    src="https://cdn.discordapp.com/attachments/703048719477506058/706159915336466503/tucm.jpg"
                    aspect-ratio="4/3"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SignupForm from "@/components/Signup/SignupForm.vue";
export default {
  components: {
    SignupForm
  },
  data: () => ({})
};
</script>
