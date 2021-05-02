<template>
  <div class="container">
    <div>
      <h1 class="title">Login Page</h1>
      <br>
      <div>
        <button class="button--grey" @click="authTwitter">Twitterでログイン</button>
        <br>
        <button class="button--grey" @click="authGoogle">Googleでログイン</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Firebase, Provider } from "~/services/firebase";
export default Vue.extend({
  data() {
    return {};
  },
  async asyncData() {},
  methods: {
    // Todo クリック時の引数で呼び出す認証を決定
    async authGoogle() {
      const fire = new Firebase(this.$accessor);
      await fire.login(Provider.Google);
      this.$router.push("/");
    },
    async authTwitter() {
      const fire = new Firebase(this.$accessor);
      await fire.login(Provider.Twitter);
      this.$router.push("/");
    },
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>