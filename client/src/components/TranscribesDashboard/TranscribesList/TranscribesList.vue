<template>
  <div class="transcribes-table">
    <table>
      <tr>
        <th>
          <div>
            <checkbox id="trancribe"/>
          </div>
        </th>
        <th></th>
        <th>Başlık</th>
        <th>Süre</th>
        <th>Yükleme Tarihi</th>
        <th>Durumu</th>
        <th></th>
      </tr>
      <tr class="transcribe-item" v-for="(item, index) in getTranscribes" :key="index">
        <td>
          <checkbox :id="`transcribe-${index}`"/>
        </td>
        <td>
         <img src="/assets/icons/file.svg" alt="">
        </td>
        <td class="table-item--title">
          {{item.title}}
        </td>
        <td>
          {{item.duration}}
        </td>
        <td>
          {{item.uploadDate}}
        </td>
        <td  class="d-flex justify-content-center">
          <img src="/assets/icons/success.svg" alt="">
        </td>
        <td>
          <img src="/assets/icons/more.svg" alt="">
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import checkbox from "@/components/Shared/Checkbox/Checkbox"
export default {
  components: {
    checkbox
  },
  computed: {
    ...mapGetters(["getTranscribes"])
  }
}
</script>