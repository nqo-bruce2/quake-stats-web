<template>
  <div>
    <section id="carousel">
      <!-- :src="require('@/assets/banner.jpg')" -->
      <v-img
        src="https://cdn.discordapp.com/attachments/703048719477506058/705863800548622407/qrack030.jpg"
        aspect-ratio="3"
        max-height="600"
      >
      </v-img>
    </section>

    <section
      id="definitions"
      class="pa-5"
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
          no-gutters
        >
          <v-col>
            <div class="text-center">
              <h4>{{infoText}}</h4>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="pa5">
      <div>
        <h1 class="pt-5 text-center">Latest Matches</h1>
        <p class="text-center">
          Displaying the last 10 matches.
        </p>
        <div align="center">
          <v-container>
            <v-data-table
              :loading="loading"
              loading-text="Loading matches... Please wait"
              :headers="headers"
              :items="latestMatches"
              :items-per-page="10"
              class="elevation-5"
              :single-expand=true
              show-expand
              :hide-default-footer=true
              :expanded.sync="expanded"
            >
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                  <div>
                    <br>
                    <v-data-table
                      :headers="playerStatsHeaders"
                      :items="item.listOfPlayers"
                      :items-per-page="10"
                      class="elevation-5"
                      :hide-default-footer=true
                      dense
                    >
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>PLAYER STATS</v-toolbar-title>
                          <v-spacer></v-spacer>
                        </v-toolbar>
                      </template>
                    </v-data-table>
                    <br>
                    <v-data-table
                      :headers="quadStatsHeaders"
                      :items="item.listOfPlayers"
                      :items-per-page="10"
                      class="elevation-5"
                      :hide-default-footer=true
                      dense
                    >
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>QUAD STATS</v-toolbar-title>
                          <v-spacer></v-spacer>
                        </v-toolbar>
                      </template>
                    </v-data-table>
                    <br>
                    <v-data-table
                      :headers="badStatsHeaders"
                      :items="item.listOfPlayers"
                      :items-per-page="10"
                      class="elevation-5"
                      :hide-default-footer=true
                      dense
                    >
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>BAD STATS</v-toolbar-title>
                          <v-spacer></v-spacer>
                        </v-toolbar>
                      </template>
                    </v-data-table>
                    <br>
                    <v-data-table
                      :headers="efficiencyStatsHeaders"
                      :items="item.listOfPlayers"
                      :items-per-page="10"
                      class="elevation-5"
                      :hide-default-footer=true
                      dense
                    >
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>EFFICIENCY STATS</v-toolbar-title>
                          <v-spacer></v-spacer>
                        </v-toolbar>
                      </template>
                    </v-data-table>
                    <br>
                    <v-data-table
                      :headers="killStatsHeaders"
                      :items="item.listOfPlayers"
                      :items-per-page="10"
                      class="elevation-5"
                      :hide-default-footer=true
                      dense
                    >
                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>KILL STATS</v-toolbar-title>
                          <v-spacer></v-spacer>
                        </v-toolbar>
                      </template>
                    </v-data-table>
                    <br>
                  </div>
                </td>
              </template>
            </v-data-table>
          </v-container>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MatchService from "@/services/matches";
import dateFormat from "dateformat";

export default {
  data() {
    return {
      expanded: [],
      missionText: "Enemy Quad",
      infoText: " ",
      items: [
        {
          src:
            "https://c4.wallpaperflare.com/wallpaper/416/24/916/quake-video-games-wallpaper-preview.jpg"
        }
      ],
      columnText: [
        {
          title: "FRAG LEADER",
          verbiage:
            "This is what we call speaking opportunities. It's a lot less of a mouthful and captures the essence of what a speaking opportunity is (we borrowed it from the music industry but it is also a nod to the Gig Economy)",
          linkName: "Find Gigs"
        },
        {
          title: "BEST KDR",
          verbiage:
            "These are our speakers. They are primarily academics, but also professionals who now work outside of academia, but who have unique expertise and insights to provide to a college audience.",
          linkName: "Find Gigsters"
        },
        {
          title: "QUAD LEADER",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        },
        {
          title: "TEAM KILLER",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        },
        {
          title: "WEAPON EFF%",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        },
        {
          title: "BEST WIN %",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        },
        {
          title: "MOST WINS",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        },
        {
          title: "WIN STREAK",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        },
        {
          title: "DMG LEADER",
          verbiage:
            "College departments, programs and professors offering speaking opportunities, anything from a classroom lecture to a large address.",
          linkName: "Post a Gig"
        }
      ],
      headers: [
        {
          text: "Match Date",
          align: "start",
          sortable: true,
          value: "matchDate"
        },
        { text: "Match Type", value: "matchType" },
        { text: "Map", value: "mapName" },
        { text: "Winner", value: "winner" },
        { text: "Winner Score", value: "winnerScore" },
        { text: "Loser Score", value: "loserScore" },
        { text: "MVP", value: "matchMVP" }
      ],
      playerStatsHeaders: [
        { text: "Name", value: "name" },
        { text: "Team", value: "teamColor" },
        { text: "Kill Efficiency", value: "killEfficiency" },
        { text: "Weapon Efficiency", value: "weaponEfficiency" },
        { text: "Ping", value: "ping" }
      ],
      quadStatsHeaders: [
        { text: "Name", value: "name" },
        { text: "Number of Quads", value: "numberOfQuads" },
        { text: "Quad Efficiency", value: "quadEfficiency" },
        { text: "Enemy Kills", value: "numQuadEnemyKills" },
        { text: "Self Kills", value: "numQuadSelfKills" },
        { text: "Team Kills", value: "numQuadTeamKills" },
      ],
      badStatsHeaders: [
        { text: "Name", value: "name" },
        { text: "Dropped Packs", value: "droppedPaks" },
        { text: "Self Damage", value: "selfDamage" },
        { text: "Team Damage", value: "teamDamage" },
      ],
      efficiencyStatsHeaders: [
        { text: "Name", value: "name" },
        { text: "Bullets", value: "bulletEfficiency" },
        { text: "Nails", value: "nailsEfficiency" },
        { text: "Rockets", value: "rocketEfficiency" },
        { text: "Lightning", value: "lightningEfficiency" },
        { text: "Total", value: "totalEfficiency" },
      ],
      killStatsHeaders: [
        { text: "Name", value: "name" },
        { text: "Frags", value: "numOfFrags" },
        { text: "Enemy", value: "numOfEnemyKills" },
        { text: "Self", value: "numOfSelfKills" },
        { text: "Team", value: "numOfTeamKills" },
        { text: "Deaths", value: "numOfDeaths" },
        { text: "Damage Given", value: "dmgGiven" },
        { text: "Damage Taken", value: "dmgTaken" },
      ],
      latestMatches: [],
      teams: [],
      players: [],
      errors: "",
      loading: false
    };
  },

  created() {
    this.initialize();
  },

  computed: {
    jumboHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "110";
        case "sm":
          return "200";
        case "md":
          return "350";
        case "lg":
          return "650";
        case "xl":
          return "650";
        default:
          return "500";
      }
    }
  },

  methods: {
    initialize() {
      this.loading = true
      let vm = this
      MatchService.getMatches()
        .then(matchData => {
          vm.length = matchData.data.length
          matchData.data.matches.forEach(match => {
            match.matchDate = dateFormat(
              new Date(match.matchDate),
              "mm/dd/yyyy h:MM:ss TT"
            )
            vm.latestMatches.push(match);
          })
          vm.loading = false
        })
        .catch(error => {
          this.errors = error;
          // this.errors = 'Unable to fetch your gigs at this time'
          // this.snackColor = 'red'
          // this.snackbar = true
        });
    }
  }
};
</script>
<style scoped>
::v-deep .v-carousel__controls__item > .v-btn__content > .v-icon {
  color: #a05dec;
}
</style>
<style lang="scss">
@import "@/sass/variables.scss";
</style>
