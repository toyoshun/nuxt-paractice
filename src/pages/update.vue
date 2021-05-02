<template>
  <div class="page">
    <label>
      <span> id: </span>
      <input type="text" v-model="userInfo.id" />
    </label>
    <button type="button" @click="updateUserInfo">update</button>
    <br />
    <button type="button" @click="deleteUserInfo">delete</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Firebase } from "~/services/firebase";

export default Vue.extend({
  data() {
    return {
      userInfo: {
        id: "",
      },
      //  farebaseインスタンス
      fire: new Firebase(this.$accessor),
    };
  },
  methods: {
    //  更新
    async updateUserInfo() {
      await this.fire.updateUser(this.userInfo.id);
      console.log("Update!!");
    },
    //  削除
    async deleteUserInfo() {
      this.fire.deleteUser(this.userInfo.id);
      console.log("Delete!!");
    },
  },
});
</script>