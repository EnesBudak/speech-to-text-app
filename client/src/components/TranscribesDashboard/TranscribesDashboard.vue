<template>
  <div class="transcribes-dashboard">
    <div class="transcribes-top">
      <div class="transcribes-top--container">
        <button
          class="btn-group btn btn-primary"
          @click="$store.commit('setIsActiveUploadModal', true)"
        >
          <div class="icon btn-icon btn-primary--icon">
            <img src="/assets/icons/upload.svg" alt="" />
          </div>
          Dosya yükleyin
        </button>
      </div>
    </div>
    <TranscribesList />
  </div>
</template>
<script>
import TranscribesList from "./TranscribesList/TranscribesList";
export default {
  components: {
    TranscribesList
  }
};
</script>
