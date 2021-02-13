<template>
  <v-list dense tile>
    <v-list-item class="headerMovieList">
      <v-list-item-content>
        <v-list-item-title class="white--text">{{ title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <div class="scroll">
      <v-list-item
        v-for="item in dataList.results"
        :key="item.id"
        :to="`/Movie/${item.id}`"
      >
        <v-list-item-avatar>
          <v-img :src="img + item.backdrop_path"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn fab dark small color="indigo" :to="`/Movie/${item.id}`">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </div>
  </v-list>
</template>
<script>
import { pathImg } from "../utils/Key";
export default {
  name: "MovieList",
  props: {
    title: {
      type: String,
      default: "title default"
    },
    dataList: {
      type: [Object, Array]
    }
  },
  data() {
    return {
      img: pathImg,
      position: 1
    };
  }
};
</script>
<style>
.scroll {
  height: 300px;
  overflow: scroll;
  overflow-x: auto;
}
.headerMovieList {
  background: #001529 !important;
  color: #fff !important;
}
</style>
