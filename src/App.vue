<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer v-if="enabledInput" />
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header
  },

  data() {
    return {
      enabledInput: false
    };
  },
  watch: {
    $route(to) {
      this.enabledInput = to.path !== "/Movie" ? true : false;
    }
  }
};
</script>
