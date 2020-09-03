<template>
  <div
    class="movieDetailView"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundPoster})`
    }"
  >
    <v-container>
      <v-row align="center" justify="center" class="mx-12 white--text">
        <v-col
          cols="12"
          md="4"
          :style="{
            backgroundImage: `url(${pathPoster})`
          }"
          class="poster"
        >
        </v-col>
        <v-col cols="12" md="8" class="pa-2">
          <MovieDetailInfo :data="movieDetail" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MovieDetailInfo from "../components/MovieDetailInfo";
import { mapState, mapActions } from "vuex";

export default {
  name: "MovieDetail",
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  components: {
    MovieDetailInfo
  },
  mounted() {
    this.getDataId(this.id);
  },
  methods: {
    ...mapActions(["getDataId"])
  },
  computed: {
    ...mapState(["movieDetail", "pathPoster", "backgroundPoster"])
  }
};
</script>
<style lang="scss">
.movieDetailView {
  height: calc(100vh - 64px);
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
}
.poster {
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
