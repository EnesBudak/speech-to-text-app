<template>
  <div class="transcribe-player">
    <div class="transcribe-player--container">
      <div class="player-items">
        <div class="player-item">
          <div class="icon icon-playback">
            <img src="/assets/icons/playback.svg" alt="" />
          </div>
        </div>
        <div class="player-item ml-2">
          <div class="icon icon-play">
            <img src="/assets/icons/play.svg" alt="" />
          </div>
        </div>
        <div class="player-item ml-2">
          <div class="icon icon-play-forward">
            <img src="/assets/icons/playforward.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="player-items ml-5">
        <div class="player-slider player-item">
          <div class="player-times">
            <div class="player-times--text">
              00:13
            </div>
            <div class="pl-1 pr-1">/</div>
            <div class="player-times--text">
              00:14
            </div>
          </div>
          <div class="player-slider--input">
            <input
              type="range"
              min="0"
              max="1"
              v-model="rangeValue"
              step="0.001"
              :style="{
                backgroundImage: ` -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${range}, rgb(132, 174, 244)), color-stop(${range}, rgb(242, 242, 242)))`
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rangeValue: 0,
      videoSecond: 60
    };
  },
  computed: {
      range(){
          return this.rangeValue
      }
  },
  mounted(){
      
  }
};
</script>
