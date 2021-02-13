<template>
  <v-dialog
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    v-model="enabledModal"
  >
    <v-card color="black">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      <iframe
        class="videoSection"
        :src="videoData"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "ModalVideo",
  props: {
    id: {
      type: [String, Number],
      default: "475557"
    }
  },
  methods: {
    ...mapMutations(["setEnabledModal"]),
    ...mapActions(["getDataId"]),
    closeModal() {
      this.getDataId(this.id);
      this.setEnabledModal();
    }
  },
  computed: {
    ...mapState(["enabledModal", "videoData"])
  }
};
</script>
<style>
.videoSection {
  width: 100%;
  height: calc(100vh - 60px);
  padding: 10px;
}
</style>
