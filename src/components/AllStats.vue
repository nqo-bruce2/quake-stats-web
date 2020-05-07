<template>
  <div align="center">
    <v-container>
      <v-row>
        <v-col
          lg="8"
          offset-lg="2"
          xl="12"
          offset-xl="0"
        >
          <v-card>
            <v-card-title>
              All Player Stats
              <v-card-subtitle>
                Showing stats for all players. Sort list to view top and bottom of each column.
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
          <!-- :height="400" -->
            <v-data-table
              :loading="loading"
              loading-text="Loading players... Please wait"
              :headers="headers"
              :items="players"
              :items-per-page="50"
              class="elevation-5"
              :hide-default-footer=true
              :search="search"
              fixed-header
              disable-pagination
            >
              <template v-slot:item.name="{ item }">
                {{item.name.toUpperCase()}}
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
        { text: "Total MVP", value: "mvpCount" },
        { text: "Average Kill Efficiency", value: "avgKillEff" },
        { text: "Average Weapon efficiency", value: "avgWepEff" },
        { text: "Total Quads", value: "quadCount" },
        { text: "Average Quad Efficiency", value: "avgQuadEff" },
        { text: "Total Quad Frags", value: "quadFrags" },
        { text: "Total Quad Self Kills", value: "quadSelfKills" },
        { text: "Total Quad Team Kills", value: "quadTeamKills" },
        { text: "Total Frags", value: "fragCount" },
        { text: "Total Enemy Kills", value: "enemyKills" },
        { text: "Total Self Kills", value: "selfKills" },
        { text: "Total Deaths", value: "deaths" },
        { text: "Total Damage Given", value: "dmgGiven" },
        { text: "Total Damage Taken", value: "dmgTaken" },
        { text: "Average SG Efficiency", value: "avgBulletEff" },
        { text: "Average NG Efficiency", value: "avgNailsEff" },
        { text: "Average RL Efficiency", value: "avgRlEff" },
        { text: "Average LG Efficiency", value: "avgLgEff" },
        { text: "Total Dropped Packs", value: "droppedPacks" },
        { text: "Total Self Damage", value: "selfDmg" },
        { text: "Total Team Damage", value: "teamDmg" }
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
<style>
  table > tbody > tr > td:nth-child(1),
  table > thead > tr > th:nth-child(1) {
    position: sticky !important;
    position: -webkit-sticky !important;
    left: 0;
    z-index: 9998;
    background: white;
  }
  table > thead > tr > th:nth-child(1) {
    z-index: 9999;
  }
</style>