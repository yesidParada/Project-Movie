<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="text-center">Buscar Peliculas</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Buscar"
          outlined
          append-icon="mdi-magnify"
          hide-details="false"
          class="black--text"
          @input="getDataSearch"
          dense
          rounded
        ></v-text-field>
      </v-col>
    </v-row>
    <MovieCatalog
      v-if="searchData"
      :extencion="search"
      :data="searchData"
      search
    />
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import MovieCatalog from "../components/MovieCatalog";
export default {
  name: "Search",
  components: {
    MovieCatalog
  },
  methods: {
    ...mapActions(["getSearchData"]),
    ...mapMutations(["setSearch"]),
    getDataSearch(value) {
      this.setSearch(value);
      if (value.length >= 3) {
        this.getSearchData({
          extencion: value,
          page: 1
        });
      }
    }
  },
  computed: {
    ...mapState(["searchData", "search"])
  }
};
</script>
