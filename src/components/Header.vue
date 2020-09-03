<template>
  <v-app-bar color="bluedark" app dark>
    <v-avatar tile>
      <img :src="Logo" alt="Logo" />
    </v-avatar>
    <v-toolbar-title>Movie</v-toolbar-title>
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn text to="/NewMovie">últimos lanzamientos</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn text to="/Popular">Populares</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn text to="/Search">Buscar</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-text-field
      label="Buscar"
      outlined
      append-icon="mdi-magnify"
      hide-details="false"
      dense
      rounded
      @input="getDataSearch"
      v-model="search"
    ></v-text-field>
  </v-app-bar>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import Logo from "../assets/logo.svg";
export default {
  name: "Header",
  data() {
    return {
      Logo,
      search: ""
    };
  },
  methods: {
    ...mapActions(["getSearchData"]),
    ...mapMutations(["setSearch"]),
    getDataSearch(value) {
      if (value.length >= 3) {
        this.setSearch(value);
        this.$router.push("/Search");
        this.getSearchData({
          extencion: value,
          page: 1
        });
      }
    }
  }
};
</script>
