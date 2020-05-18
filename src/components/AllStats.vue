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
            <v-data-table id="test"
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
        { text: "Total Matches Played", value: "matchCount" },
        { text: "Avg Frags Per Game", value: "avgFragsPerGame" },
        { text: "Avg Dmg Given Per Game", value: "avgDmgPerGame" },
        { text: "Avg Deaths Per Game", value: "avgDeathsPerGame" },
        { text: "Avg Enemy Kills Per Game", value: "avgEnemyKillsPerGame" },
        { text: "Avg Self Kills Per Game", value: "avgSelfKillsPerGame" },
        { text: "Avg Team Kills Per Game", value: "avgTeamKillsPerGame" },
        { text: "Avg Quads Per Game", value: "avgQuadsPerGame" },
        { text: "Avg Quad Enemy Kills Per Game", value: "avgQuadEnemyKillsPerGame" },
        { text: "Avg Quad Self Kills Per Game", value: "avgQuadSelfKillsPerGame" },
        { text: "Avg Quad Team Kills Per Game", value: "avgQuadTeamKillsPerGame" },
        { text: "Avg Dmg Taken Per Game", value: "avgDmgTakenPerGame" },
        { text: "Avg Dropped Packs Per Game", value: "avgDroppedPacksPerGame" },
        //{ text: "Total MVP", value: "mvpCount" },
        //{ text: "Average Kill Efficiency", value: "avgKillEff" },
        //{ text: "Average Weapon efficiency", value: "avgWepEff" },
        //{ text: "Total Quads", value: "quadCount" },
        //{ text: "Average Quad Efficiency", value: "avgQuadEff" },
        //{ text: "Total Quad Frags", value: "quadFrags" },
        //{ text: "Total Quad Self Kills", value: "quadSelfKills" },
        //{ text: "Total Quad Team Kills", value: "quadTeamKills" },
        //{ text: "Total Frags", value: "fragCount" },
        //{ text: "Total Enemy Kills", value: "enemyKills" },
        //{ text: "Total Self Kills", value: "selfKills" },
        //{ text: "Total Deaths", value: "deaths" },
        //{ text: "Total Damage Taken", value: "dmgTaken" },
        //{ text: "Average SG Efficiency", value: "avgBulletEff" },
        //{ text: "Average NG Efficiency", value: "avgNailsEff" },
        //{ text: "Average RL Efficiency", value: "avgRlEff" },
        //{ text: "Average LG Efficiency", value: "avgLgEff" },
        //{ text: "Total Dropped Packs", value: "droppedPacks" },
        //{ text: "Total Self Damage", value: "selfDmg" },
        //{ text: "Total Team Damage", value: "teamDmg" }
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
      PlayersService.getAllStats()
        .then(playerData => {
          playerData.data.allStats.forEach(player => {
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
  #test
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