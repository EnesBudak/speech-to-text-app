<template >
  <div class="bg-image">
    <el-row :gutter="40" type="flex" justify="center">
      <el-col :xs="12" :sm="12" :lg="6" class="mt-5" :span="6">
        <el-form ref="form" :model="user">
          <el-form-item label="E-mail ">
            <el-input type="text" v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item label="Şifre">
            <el-input type="password" v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round plain @click="login">Giriş Yap !</el-button>
            <el-button type="primary" round>Şifremi Unuttum !</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {},
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.user.email,
          password: this.user.password
        })
        .then(success => {
          console.log(success);
          this.$notify({
            title: "Success",
            message: "Başarıyla giriş yapıldı !",
            type: "success"
          });
          this.$router.push("/anasayfa");
        })
        .catch(error => {
          if (error) {
            console.log(error);
            this.$notify({
              title: "Hata",
              message: "Email yada Şifre hatalı",
              type: "error"
            });
          }
        });
    }
  },
  created() {}
};
</script>

<style>
.bg-image {
  background-image: url("./../assets/login-bg.bd93cbf.jpg");
  width: 100%;
  height: 100%;

  background-position: 100%;
  background-size: cover;
  position: fixed;
}
</style>