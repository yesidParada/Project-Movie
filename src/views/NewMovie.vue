<template>
  <div>
    <MovieCatalog
      title="Ultimos Lanzamientos"
      :data="newMovies"
      extencion="now_playing"
    />
    <Footer />
  </div>
</template>
<script>
import MovieCatalog from "../components/MovieCatalog";
import { mapState, mapActions } from "vuex";
export default {
  name: "NewMovie",
  components: {
    MovieCatalog
  },
  mounted() {
    this.getData({
      extencion: "now_playing",
      pages: 1
    });
  },
  methods: {
    ...mapActions(["getData"])
  },
  computed: {
    ...mapState(["newMovies"])
  }
};
</script>
