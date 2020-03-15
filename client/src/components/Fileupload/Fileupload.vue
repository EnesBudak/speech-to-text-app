<template>
    <div
      :class="[
        'modal-overlay',
        getIsActiveUploadModal ? 'modal-active' : 'modal-disable'
      ]"
    >
      <div class="modal-box">
        <div class="modal-box--header">
          <div class="modal-box--header-title">
            Dosya yükleyin
          </div>
          <!-- clear button -->
          <div
            class="modal-box--header-clear-icon"
            @click="$store.commit('setIsActiveUploadModal',false)"
          >
            <img src="/assets/icons/clear.svg" alt="" />
          </div>
        </div>
        <div class="modal-box--form">
          <div class="input-control">
            <div class="input-control--label">
              <div class="input-control--label-count">
                1
              </div>
              <div class="input-control--label-text">
                Dosyanıza bir isim verin
              </div>
            </div>
            <input type="text" />
          </div>
          <div class="input-control mt-4">
            <div class="input-control--label">
              <div class="input-control--label-count">
                2
              </div>
              <div class="input-control--label-text">
                Bir dosya yükleyin
              </div>
            </div>
            <input type="file" />
          </div>
          <div class="mt-4 pt-2">
            <div class="btn btn-primary btn-full justify-content-center">
              Çevir
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default { 
  computed: {
    ...mapGetters(["getIsActiveUploadModal"])
  }
}
</script>