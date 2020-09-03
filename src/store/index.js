import Vue from "vue";
import Vuex from "vuex";
import path from "../utils/Params";
import { key, lng, pathImg } from "../utils/Key";

const api = path["path"];

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newMovies: [],
    popularMovies: [],
    topMovies: [],
    movieDetail: [],
    searchData: [],
    searchStatus: true,
    enabledModal: false,
    videoData: "",
    pathPoster: "",
    search: "",
    backgroundPoster: "",
    sinImg:
      "https://i2.wp.com/www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png?fit=862%2C1104&ssl=1"
  },
  mutations: {
    setNewMovies(state, data) {
      state.newMovies = data;
    },
    setPopularMovies(state, data) {
      state.popularMovies = data;
    },
    setTopMovies(state, data) {
      state.topMovies = data;
    },
    setMovieDetail(state, data) {
      state.movieDetail = data;
      state.pathPoster =
        data.poster_path === null
          ? state.sinImg
          : `${pathImg}${data.poster_path}`;
      state.backgroundPoster =
        data.backdrop_path === null
          ? state.sinImg
          : `${pathImg}${data.backdrop_path}`;
    },
    setEnabledModal(state) {
      state.enabledModal = !state.enabledModal;
    },
    setVideoData(state, data) {
      const video = data.results[0];
      switch (video.site) {
        case "Vimeo":
          state.videoData = `https://vimeo.com/${video.key}`;
          break;
        default:
          state.videoData = `https://www.youtube.com/embed/${video.key}`;
          break;
      }
    },
    setSearchData(state, data) {
      state.searchData = data;
    },
    setSearchStatus(state) {
      state.searchStatus = !state.searchStatus;
    },
    setSearch(state, data) {
      state.search = data;
    }
  },
  actions: {
    getData: async function({ commit }, params) {
      commit("setSearchData", []);
      const response = await fetch(
        `${api}movie/${params.extencion}${key}&language=${lng}&page=${params.pages}`
      );
      const data = await response.json();
      switch (params.extencion) {
        case "now_playing":
          commit("setNewMovies", data);
          break;
        case "popular":
          commit("setPopularMovies", data);
          break;
        default:
          commit("setTopMovies", data);
          break;
      }
    },
    getDataId: async function({ commit }, id) {
      commit("setSearchData", []);

      commit("setSearchData", []);
      const response = await fetch(`${api}movie/${id}${key}&language=${lng}`);
      const data = await response.json();
      commit("setMovieDetail", data);
    },
    getDataVideo: async function({ commit }, extencion) {
      commit("setSearchData", []);
      commit("setEnabledModal");
      const response = await fetch(
        `${api}movie/${extencion}/videos${key}&language=${lng}`
      );
      const data = await response.json();
      commit("setVideoData", data);
    },
    getSearchData: async function({ commit }, search) {
      commit("setSearchData", []);
      const response = await fetch(
        `${api}search/movie${key}&language=${lng}&query=${search.extencion}&page=${search.page}`
      );
      const data = await response.json();
      commit("setSearchData", data);
    }
  },
  modules: {}
});
