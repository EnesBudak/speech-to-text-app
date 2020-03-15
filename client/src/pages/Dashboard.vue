<template>
  <div class="dashboard">
    <Navbar />
  <div class="container">
    <div class="col-md-9 col-9">
     <TranscribesDashboard />
    </div>
    <div class="col-md-3 col-3 pl-4 pt-4">
      <div class="card with-border">
        <div class="d-flex justify-content-between">
          <div class="pr-1">
            <div class="remaining-minutes--title ">Kalan kullanım hakkı</div>
          </div>
          <div class="remaining-minutes--count">
            29dk
          </div>
        </div>
        <div class="btn justify-content-center btn-full btn-dark mt-3">
          Satın al
        </div>
      </div>
    </div>
    <FileuploadModal />
  </div>
  </div>
</template>
<script>
import TranscribesDashboard from "../components/TranscribesDashboard/TranscribesDashboard";
import Navbar from "../components/Navbar/Navbar";
import FileuploadModal from "../components/Fileupload/Fileupload"
export default {
  components: {
    TranscribesDashboard,
    FileuploadModal,
    Navbar
  }
};
</script>

<style>
.transcribes-top--container {
  margin: 20px auto;
}
.remaining-minutes--title {
  font-size: 16px;
  color: #b4b4b4;
}
.remaining-minutes--count {
  font-size: 24px;
  font-weight: 600;
}
.card.with-border {
  border: 1px solid #ddd;
  padding: 15px 30px;
  border-radius: 4px;
}
</style>
