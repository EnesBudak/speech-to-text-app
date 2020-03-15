<template>
  <div>
    <Navbar />
    <div class="transcribe-content">
      <div class="transcribe-content--container">
        <span
          v-for="(item, index) in getDetailTranscribe.wordInfos"
          :key="index"
          contenteditable="true"
          :class="[item.wordStart < currentTime && item.wordEnd > currentTime ? 'active' : '']"
          @blur="updateWord($event, index)"
        >
          {{ item.word }}
        </span>
      </div>
    </div>
    <!-- <Player /> -->
    <div class="transcribe-player">
      <div class="transcribe-player--container">
        <div class="player-items">
          <audio controls preload="none" ref="speechPlayer" @timeupdate="updateCurrentTime">
            <source
              type="audio/mp3"
              src="http://apostylee.com/podcast/bolums/bolum1.mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/EditedItemNavbar";
// import Player from "../components/Player/Player";
import { mapGetters } from "vuex";
export default {
  components: {
    Navbar
  },
  data(){
    return {
      currentTime:""
    }
  },
  computed: {
    ...mapGetters(["getDetailTranscribe"])
  },
  methods: {
    updateWord(event, index) {
      this.$store.commit("updateWord", { index, word: event.target.innerText });
    },
    updateCurrentTime() {
      this.currentTime = this.$refs.speechPlayer.currentTime
      // console.log(this.$refs.speechPlayer.currentTime)
    }
  }
};
</script>

<style>

</style>
