<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
          <!-- <transition-group name="bounce" > -->
            <v-list-tile :key="item.name" v-for="item in sideBarItems" @click="sideClick(item.href)">
              <v-list-tile-action>
                <v-icon>dashboard</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          <!-- </transition-group> -->
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <transition name="router_animate" enter-active-class="animated fadeInDown 0.2">
          <router-view/>
        </transition>
      </v-content>
      <v-footer app fixed>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: true,
      source: "source",
      sideBarItems: [
        { name: "css begin", href: "css3" },
        { name: "Transiton Begin", href: "transiton_demo" },
        { name: "Transiton Group", href: "transiton_group_demo" },
        { name: "Transiton Vue anime", href: "anime_demo" },
        { name: "Transiton Anime", href: "anime_css_demo" },
        { name: "Svg Animation", href: "svg_animation_demo" }
      ]
    };
  },
  methods: {
    sideClick(href) {
      // console.log(this.$router)
      this.$router.push(href);
    }
  }
};
</script>
<style>



</style>

