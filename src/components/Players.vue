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
          <v-card>
            <v-card-title>
              Enemy Quad Players
              <v-card-subtitle>
                List of pros in no particular order.
              </v-card-subtitle>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :loading="loading"
              loading-text="Loading players... Please wait"
              :headers="headers"
              :items="players"
              :items-per-page="50"
              class="elevation-5"
              :hide-default-footer=true
              :search="search"
            >
              <template v-slot:item.name="{ item }">
                {{item.name.toUpperCase()}}
              </template>
              <template v-slot:item.actions="{ item }">
                <v-tooltip left>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      medium
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-account
                    </v-icon>
                  </template>
                  <span>Profile</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      medium
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-chart-bar
                    </v-icon>
                  </template>
                  <span>Stats</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                <v-icon
                  v-on="on"
                  medium
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-format-list-bulleted
                </v-icon>
                  </template>
                  <span>Matches</span>
                </v-tooltip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlayersService from "@/services/players";

export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Actions", value: "actions" }
      ],
      players: [],
      errors: "",
      loading: false,
      search: ""
    };
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.loading = true;
      let vm = this;
      PlayersService.getSignedupPlayers()
        .then(playerData => {
          playerData.data.players.forEach(player => {
            vm.players.push(player);
          });
          vm.loading = false;
        })
        .catch(error => {
          this.errors = error;
        });
    }
  },

  editItem(item) {
    console.log(item.name);
  }
};
</script>