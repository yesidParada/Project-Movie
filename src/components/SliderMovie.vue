<template>
  <v-carousel
    :continuous="false"
    :cycle="true"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    height="400"
  >
    <v-carousel-item
      v-for="(item, index) in newMovies.results"
      :key="index"
      :src="img + item.backdrop_path"
    >
      <v-container>
        <v-row class="pt-12" align="end" justify="center">
          <v-card color="rgba(160, 160, 160, 0.81)" width="500">
            <v-card-text>
              <h2 class="text-center pt-3">{{ item.title }}</h2>
              <p class="text-center pt-3">
                {{ item.overview.substr(0, 200) }} ...
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue" :to="`/Movie/${item.id}`">Ver mas</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import { mapState } from "vuex";
import { pathImg } from "../utils/Key";
export default {
  name: "SliderMovie",
  data() {
    return {
      img: pathImg
    };
  },
  computed: {
    ...mapState(["newMovies"])
  }
};
</script>
<style lang="scss">
.v-image__image--cover {
  background-position: center top !important;
}
</style>
