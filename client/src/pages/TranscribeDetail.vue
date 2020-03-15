<template>
  <div>
    <Navbar />
    <div class="transcribe-content">
      <div class="transcribe-content--container">
        <span
          v-for="(item, index) in getDetailTranscribe.wordInfos"
          :key="index"
          contenteditable="true"
          @blur="updateWord($event,index)"
        >
          {{ item.word }}
        </span>
      </div>
    </div>
    <Player />
  </div>
</template>

<script>
import Navbar from "../components/Navbar/EditedItemNavbar";
import Player from "../components/Player/Player";
import { mapGetters } from "vuex";
export default {
  components: {
    Navbar,
    Player
  },
  computed: {
    ...mapGetters(["getDetailTranscribe"])
  },
  methods: {
    updateWord(event , index) {
      this.$store.commit("updateWord",{index, word:event.target.innerText})
    }
  }
};
</script>

<style></style>
