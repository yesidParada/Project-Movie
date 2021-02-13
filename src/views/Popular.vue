<template>
  <div>
    <MovieCatalog
      title="Mas Populares"
      :data="popularMovies"
      extencion="popular"
    />
  </div>
</template>
<script>
import MovieCatalog from "../components/MovieCatalog";
import { mapState, mapActions } from "vuex";
export default {
  name: "Popular",
  components: {
    MovieCatalog
  },
  mounted() {
    this.getData({
      extencion: "popular",
      pages: 1
    });
  },
  methods: {
    ...mapActions(["getData"])
  },
  computed: {
    ...mapState(["popularMovies"])
  }
};
</script>
