<template>
  <div class="home">
    <SliderMovie />
    <v-row align="center" justify="center" class="mx-12">
      <v-col cols="12" md="6">
        <MovieList title="Películas Populares" :dataList="popularMovies" />
      </v-col>
      <v-col cols="12" md="6">
        <MovieList title="Top Mejores Películas" :dataList="topMovies" />
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>
<script>
import SliderMovie from "../components/SliderMovie";
import MovieList from "../components/MovieList";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    SliderMovie,
    MovieList
  },
  mounted() {
    this.getData({
      extencion: "now_playing",
      pages: 1
    });
    this.getData({
      extencion: "popular",
      pages: 1
    });
    this.getData({
      extencion: "top_rated",
      pages: 1
    });
  },
  methods: {
    ...mapActions(["getData"])
  },
  computed: {
    ...mapState(["popularMovies", "topMovies"])
  }
};
</script>
