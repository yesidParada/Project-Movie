<template>
  <v-container fluid>
    <v-row align="center" justify="center" v-if="title">
      <h1>{{ title }}</h1>
    </v-row>
    <v-row v-if="data">
      <v-col
        cols="12"
        md="2"
        sm="3"
        v-for="(item, index) in data.results"
        :key="index"
      >
        <v-card
          elevation="0"
          tile
          outlined
          width="100%"
          :to="`/Movie/${item.id}`"
        >
          <v-img
            :src="
              item.poster_path === null
                ? sinImg
                : `${urlImg}${item.poster_path}`
            "
            height="300"
          ></v-img>
          <v-card-subtitle class="text-center">
            {{ item.title.substr(0, 20) }} ...
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text block color="blueDark" :to="`/Movie/${item.id}`">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-if="data">
      <v-pagination
        v-if="data.total_pages > 1"
        v-model="page"
        class="my-4"
        :length="data.total_pages"
        :total-visible="7"
        @input="setPagination"
      ></v-pagination>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
import { pathImg } from "../utils/Key";

export default {
  name: "MovieCatalog",
  props: {
    title: {
      type: String
    },
    extencion: {
      type: String,
      default: "now_playing"
    },
    data: {
      type: [Array, Object]
    },
    search: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      urlImg: pathImg,
      page: 1,
      sinImg:
        "https://i2.wp.com/www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png?fit=862%2C1104&ssl=1"
    };
  },
  methods: {
    ...mapActions(["getData", "getSearchData"]),
    setPagination() {
      console.log(this.search);
      if (this.search) {
        this.getSearchData({
          extencion: this.extencion,
          page: this.page
        });
      } else {
        this.getData({
          extencion: this.extencion,
          pages: this.page
        });
      }
    }
  }
};
</script>
