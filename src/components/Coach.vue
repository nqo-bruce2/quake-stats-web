<template>
  <div align="center">
    <v-container>
      <v-row>
        <v-col
          lg="8"
          offset-lg="2"
          xl="10"
          offset-xl="1"
        >
          <v-card
            class="elevation-5"
            outline
          >
            <v-card-title>
              Coach's Commentary
              <v-card-subtitle>
                Watch for this week's rankings.
              </v-card-subtitle>
              <v-spacer></v-spacer>
            </v-card-title>
            <div class="hidden-sm-and-up">
              <template v-for="vid in coachVideos">
                <v-card
                  :key="vid.videoDate"
                  class="mx-auto"
                  max-width="344"
                >
                  <div class="pa-5">
                    <vue-friendly-iframe
                      v-if="vid.link != ''"
                      :src="vid.link"
                    ></vue-friendly-iframe>
                  </div>

                  <v-card-title>
                    {{vid.videoDate}}
                  </v-card-title>

                  <v-card-subtitle>
                    <div align="left">
                      {{vid.comments}}
                    </div>
                  </v-card-subtitle>
                </v-card>
              </template>
            </div>

            <div class="hidden-xs-only">
              <v-data-table
                :headers="headers"
                :items="coachVideos"
                :items-per-page="10"
                :hide-default-footer=true
              >
                <template v-slot:item.link="{ item }">
                  <vue-friendly-iframe
                    class="pa-2"
                    v-if="item.link != ''"
                    :src="item.link"
                  ></vue-friendly-iframe>
                </template>
                <template v-slot:item.comments="{ item }">
                  <div align="left">
                    {{item.comments}}
                  </div>
                </template>
              </v-data-table>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Video Date",
          align: "start",
          sortable: true,
          value: "videoDate"
        },
        { text: "Comments", value: "comments" },
        { text: "Video", value: "link" }
      ],
      coachVideos: [
        {
          videoDate: "4/23/2020",
          comments:
            "Episode 1 of Rankings. Featuring Chris, Bruce, TV, Levon, and Lenny. Notably missing is CD.",
          link:
            "https://drive.google.com/file/d/18BmZwtkfZI-62hvHBOENYI3Fcw2MKKRR/preview"
        }
      ],
      errors: ""
    };
  }
};
</script>