<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      :clipped-left="clippedLeft"
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-md-and-up"
      >
      </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          :src="require('@/assets/quake-logo3.svg')"
          transition="scale-transition"
          width="60"
        />
        <v-toolbar-title class="hidden-sm-and-down">
          <router-link
            to="/"
            tag="span"
            style="cursor: pointer"
            class="homeText"
          >Enemy Quad Stats</router-link>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          class="hidden-sm-and-down"
          light
          text
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="{name: menuItem.name}"
          color="white"
        >
          <div class="black--text">
            {{ menuItem.title }}
          </div>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      :clipped="clipped"
      :app=true
      temporary
      absolute
      v-model="drawer"
      width="225"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Enemy Quad.
          </v-list-item-title>
          <v-list-item-subtitle>
            Where the pros play.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          link
          @click="navigateToPage('Home')"
          >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          @click="navigateToPage(item.name)"
          active-class="white black--text darken-4"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

    <div class="pa-10"></div>
    <v-footer
      dark
      padless
      class="pa-5"
    >
      <v-container>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    largeCols: 3,
    xlOffset: 1,
    drawer: false,
    clippedLeft: true,
    clipped: true,
    menuItems: [
      {
        icon: "mdi-clipboard-account",
        title: "Leader Board",
        name: ""
      },
      {
        icon: "mdi-chart-line",
        title: "All Stats",
        name: "AllStats"
      },
      {
        icon: "mdi-account-multiple",
        title: "Player Stats",
        name: "Players"
      },
      {
        icon: "mdi-chat",
        title: "Coach's Corner",
        name: "Coach"
      },
      {
        icon: "mdi-key",
        title: "Sign Up",
        name: "Signup"
      }
    ]
  }),

  methods: {
    navigateToPage(pageName) {
      this.$router.push({name: pageName})
    }
  }
};
</script>

<style scoped>
.homeText {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  background: whitesmoke;
  text-decoration: underline;
  text-decoration-color: black;
}
</style>