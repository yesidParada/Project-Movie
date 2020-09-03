<template>
  <v-container>
    <v-card max-width="700" dark color="transparent" elevation="0">
      <v-card-title>
        {{ data.title }}
        <v-spacer></v-spacer>
        <v-btn text dark color="teal accent-3" @click="getDataVideo(data.id)">
          <v-icon>mdi-play-circle</v-icon>
          ver trailer
        </v-btn>
      </v-card-title>
      <v-card-subtitle>Calificación</v-card-subtitle>
      <v-card-subtitle>
        <v-rating
          v-model="data.vote_average"
          color="yellow darken-3"
          length="10"
          half-increments
          small
          disabled="true"
        ></v-rating>
      </v-card-subtitle>
      <v-card-subtitle>Generos</v-card-subtitle>
      <v-card-subtitle>
        <v-chip-group column>
          <v-chip
            outlined
            color="teal accent-3"
            v-for="item in data.genres"
            :key="item.id"
          >
            {{ item.name }}
          </v-chip>
        </v-chip-group>
      </v-card-subtitle>
      <v-card-subtitle>Descripción</v-card-subtitle>
      <v-card-text>{{ data.overview }}</v-card-text>
    </v-card>
    <ModalVideo :id="data.id" />
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
import ModalVideo from "./ModalVideo";
export default {
  name: "MovieDetailInfo",
  props: {
    data: {
      type: [Array, Object]
    }
  },
  components: {
    ModalVideo
  },
  methods: {
    ...mapActions(["getDataVideo"])
  }
};
</script>
